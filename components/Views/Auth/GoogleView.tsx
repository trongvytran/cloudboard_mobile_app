import { StyleSheet, Text, Pressable } from 'react-native'
import * as Google from 'expo-auth-session/providers/google'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addUserLoginInfo } from '../../../features/auth/userLoginInfo'
import React from 'react'
import * as WebBrowser from 'expo-web-browser';
import axios from 'axios'

WebBrowser.maybeCompleteAuthSession();

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
      axios(
        `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${response.params.access_token}`
      ).then((res) => {
        axios
          .post('http://localhost:3000/api/auth/login', {
            name: res.data.name,
            email: res.data.email,
            imageUrl: res.data.picture,
          })
          .then((res) => dispatch(addUserLoginInfo(res.data)))
      })
    }
  }, [response])

  return (
    <Pressable
      disabled={!request}
      style={styles.button}
      onPress={() => {
        promptAsync({ useProxy: true, showInRecents: true })
      }}
    >
      <Ionicons style={styles.icon} name="logo-google" size={20} />
      <Text style={styles.text}>Sign in with Google</Text>
    </Pressable>
  )
}

export default GoogleView

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    elevation: 3,
    backgroundColor: '#EA4335',
    marginTop: 4,
    marginBottom: 4,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  icon: {
    color: 'white',
    position: 'absolute',
    left: 18,
  },
})
