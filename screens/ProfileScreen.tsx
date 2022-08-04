import { useDispatch, useSelector } from 'react-redux'
import { View, FlatList, Text, Pressable, Alert } from 'react-native'
import LayoutView from '../components/Views/LayoutView'
import TitleText from '../components/TitleText'
import ContainerView from '../components/Views/ContainerView'
import GoogleView from '../components/Views/Auth/GoogleView'
import FacebookView from '../components/Views/Auth/FacebookView'
import ProfileCard from '../components/Profile/ProfileCard'
import ProfileItem from '../components/Profile/ProfileItem'
import React from 'react'
import { clearUserLoginInfo } from '../features/auth/userLoginInfo'
import { clearUserToken } from '../features/auth/userToken'

const ProfileScreen = ({ navigation }: any) => {
  const DATA = [
    { id: 1, title: 'My billboards', subtitle: 'Already have 5 billboards' },
    { id: 2, title: 'Payment methods', subtitle: 'Visa **89' },
    { id: 3, title: 'Settings', subtitle: 'Notifications, password' },
  ]
  const dispatch = useDispatch()

  const handleSignOut = () => {
    Alert.alert('Are you sure you want to log out?', '', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Sign Out',
        onPress: () => {
          dispatch(clearUserLoginInfo())
          dispatch(clearUserToken())
        },
      },
    ])
  }

  const { userToken } = useSelector((state: any) => state.userToken)
  const { userLoginInfo } = useSelector((state: any) => state.userLoginInfo)
  const validateUser = userLoginInfo ? (
    <View>
      <ProfileCard
        imageSource={userLoginInfo.imageUrl}
        name={userLoginInfo.name}
        email={userLoginInfo.email}
      />
      <FlatList
        scrollEnabled={false}
        data={DATA}
        renderItem={({ item }) => (
          <ProfileItem
            title={item.title}
            subtitle={item.subtitle}
            onPress={() => navigation.navigate(item.title)}
          />
        )}
        keyExtractor={(item) => item.id}
      />
      <Pressable
        onPress={handleSignOut}
        className="bg-red-500 mt-6 rounded-lg px-5 py-2.5 shadow flex justify-center items-center"
      >
        <Text className="font-semibold text-center text-white">Sign Out</Text>
      </Pressable>
    </View>
  ) : (
    <View>
      <GoogleView />
      <FacebookView />
    </View>
  )
  return (
    <LayoutView>
      <ContainerView>
        <TitleText>Profile</TitleText>
        {validateUser}
      </ContainerView>
    </LayoutView>
  )
}

export default ProfileScreen
