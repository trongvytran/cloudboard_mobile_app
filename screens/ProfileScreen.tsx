import { Button,View, FlatList, Text } from 'react-native'
import { useSelector } from 'react-redux'
import LayoutView from '../components/Views/LayoutView'
import TitleText from '../components/TitleText'
import ContainerView from '../components/Views/ContainerView'
import GoogleView from '../components/Views/Auth/GoogleView'
import FacebookView from '../components/Views/Auth/FacebookView'
import ProfileCard from '../components/Profile/ProfileCard'
import ProfileItem from '../components/Profile/ProfileItem'
import React from 'react'
import { clearUserLoginInfo } from '../features/auth/userLoginInfo'

const logout = () => {
 
};
const ProfileScreen = ({ navigation }: any) => {
  const DATA = [
    { id: 1, title: 'My billboards', subtitle: 'Already have 5 billboards' },
    { id: 2, title: 'Payment methods', subtitle: 'Visa **89' },
    { id: 3, title: 'Settings', subtitle: 'Notifications, password' },
  ]

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
      <Button onPress={logout} title="Logout" />
      </ContainerView>
    </LayoutView>
  )
}

export default ProfileScreen
