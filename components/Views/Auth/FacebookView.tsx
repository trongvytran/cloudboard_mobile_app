import { Pressable, Text, StyleSheet } from 'react-native'
import * as Facebook from 'expo-auth-session/providers/facebook'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUserLoginInfo } from '../../../features/auth/userLoginInfo'
import { addUserToken } from '../../../features/auth/userToken'
import React from 'react'
import axios from 'axios'

const FacebookView = () => {
  const dispatch = useDispatch()
  const [request, response, promptAsync] = Facebook.useAuthRequest({
    clientId: '403771287819141',
  })

  useEffect(() => {
    if (response?.type === 'success') {
      axios(
        `https://graph.facebook.com/me?access_token=${response.params.access_token}&fields=id,name,email,picture`
      )
      .then((res) => {
        axios
          .post('http://192.168.1.13:3000/api/auth/login', {
            name: res.data.name,
            email: res.data.email,
            imageUrl: res.data.picture.data.url,
          })
          .then((res) => dispatch(addUserLoginInfo(res.data)))
        axios
          .post('http://192.168.1.13:3000/api/auth/login2', {          
            email: res.data.email,          
          })
          .then((res) => dispatch(addUserToken(res.data)))
      })

    }
  }, [response])
  return (
    <Pressable
      disabled={!request}
      className="bg-[#3b5998] my-1 rounded-lg px-5 py-2.5 shadow flex justify-center items-center"
      onPress={() => {
        promptAsync({ useProxy: true, showInRecents: true })
      }}
    >
      <Ionicons style={styles.icon} name="logo-facebook" size={25} />
      <Text className="text-lg font-semibold text-center text-white">Sign in with Facebook</Text>
    </Pressable>
  )
}

export default FacebookView

const styles = StyleSheet.create({
  icon: {
    color: 'white',
    position: 'absolute',
    left: 18,
  },
})
