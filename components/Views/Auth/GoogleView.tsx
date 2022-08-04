import { StyleSheet, Text, Pressable } from 'react-native'
import * as Google from 'expo-auth-session/providers/google'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import React from 'react'
import axios from 'axios'
import { addUserLoginInfo } from '../../../features/auth/userLoginInfo'
import { addUserToken } from '../../../features/auth/userToken'
import BaseUrl from '../../../constants/baseUrl'

const GoogleView = () => {
  const dispatch = useDispatch()
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId:
      '794107543440-lpkdn66vavjaimjjktu80drecc9botvc.apps.googleusercontent.com',
    iosClientId:
      '794107543440-6dlk0op7p4908k2narso7h66jg9h5u4n.apps.googleusercontent.com',
    androidClientId:
      '794107543440-g548hisva4dodqkt0h75cgij8cbjucmj.apps.googleusercontent.com',
    webClientId:
      '794107543440-vsv7phnoshnvau74hp3q75i8a5qoc9lp.apps.googleusercontent.com',
  })
  useEffect(() => {
    if (response?.type === 'success') {
      axios
        .post(`${BaseUrl}/api/auth/google/login`, {
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
      className="bg-[#4285F4] my-1 rounded-lg px-5 py-2.5 shadow flex justify-center items-center"
      disabled={!request}
      onPress={() => {
        promptAsync({ useProxy: true, showInRecents: true })
      }}
    >
      <Ionicons style={styles.icon} name="logo-google" size={20} />
      <Text className="text-lg font-semibold text-center text-white">
        Sign in with Google
      </Text>
    </Pressable>
  )
}

export default GoogleView

const styles = StyleSheet.create({
  icon: {
    color: 'white',
    position: 'absolute',
    left: 18,
  },
})
