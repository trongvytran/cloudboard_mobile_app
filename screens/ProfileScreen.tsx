import { View, FlatList, Text, Pressable, StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import LayoutView from '../components/Views/LayoutView'
import TitleText from '../components/TitleText'
import ContainerView from '../components/Views/ContainerView'
import GoogleView from '../components/Views/Auth/GoogleView'
import FacebookView from '../components/Views/Auth/FacebookView'
import ProfileCard from '../components/Profile/ProfileCard'
import ProfileItem from '../components/Profile/ProfileItem'
import Colors from '../constants/color'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import Ionicons from '@expo/vector-icons/Ionicons'
import { initializeAsync, logOutAsync } from 'expo-facebook'
import App from '../App'
import { clearUserLoginInfo } from '../features/auth/userLoginInfo'

const ProfileScreen = ({ navigation }: any) => {
  const DATA = [
    { id: 1, title: 'My billboards', subtitle: 'Already have 5 billboards' },
    { id: 2, title: 'Payment methods', subtitle: 'Visa **89' },
    { id: 3, title: 'Settings', subtitle: 'Notifications, password' },
  ]
  const [data, setData] = useState([])

  const logOut = async () => {
    try {
      await initializeAsync({'appId':'403771287819141', 'appName':'billboard-capstone-project'})
        await logOutAsync()
      dispatch(clearUserLoginInfo())
    }
    catch(error){
      console.error(error)
    }
  }

  const { userLoginInfo } = useSelector((state: any) => state.userLoginInfo)
  const dispatch = useDispatch()
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
       <Pressable onPress={() => logOut()} 
                                  style={styles.container}>
      <Text style={styles.title}>
       Sign Out
      </Text>
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

const styles = StyleSheet.create({
  container: {
    marginTop:20,
    justifyContent:'center',
    backgroundColor: 'red',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.borderColor,
    paddingVertical:17,
    paddingHorizontal:10,
    borderRadius:10,
    alignItems: 'center'
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
    color: 'white'
  },
  icon: {
    color: 'white',
  },
})