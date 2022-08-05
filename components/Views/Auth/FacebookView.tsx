import { Pressable, Text, StyleSheet } from 'react-native'
import * as Facebook from 'expo-auth-session/providers/facebook'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import React from 'react'
import axios from 'axios'
import { addUserLoginInfo } from '../../../features/auth/userLoginInfo'
import { addUserToken } from '../../../features/auth/userToken'
import BaseUrl from '../../../constants/baseUrl'
import {makeRedirectUri} from "expo-auth-session";

const FacebookView = () => {
  const dispatch = useDispatch()
  const [request, response, promptAsync] = Facebook.useAuthRequest({
    expoClientId: '403771287819141',
    iosClientId:'403771287819141',
    androidClientId: '403771287819141',
    webClientId:'403771287819141'
  })


  useEffect(() => {
    if (response?.type === 'success') {

      axios
        .post(`${BaseUrl}/api/auth/facebook/login`, {
          accessToken: response.params.access_token,

        })
        .then((res) => {
          dispatch(addUserLoginInfo(res.data.user))
          dispatch(addUserToken(res.data.token))
        })
    }
  }, [response])
  return (
    <Pressable
      disabled={!request}
      className="bg-[#3b5998] my-1 rounded-lg px-5 py-2.5 shadow flex justify-center items-center"
      onPress={() => {
        promptAsync({ useProxy: true, showInRecents: true})
      }}
      // onPress={() => console.log(redirect)}
    >
      <Ionicons style={styles.icon} name="logo-facebook" size={25} />
      <Text className="text-lg font-semibold text-center text-white">
        Sign in with Facebook
      </Text>
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
