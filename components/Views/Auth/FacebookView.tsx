import { Pressable, Text, StyleSheet } from 'react-native'
import * as Facebook from 'expo-auth-session/providers/facebook'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
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
            .post('http://192.168.1.12:3000/api/auth/login', {
              name: res.data.name,
              email: res.data.email,
              imageUrl: res.data.picture.data.url,
            })
            .then((res) => dispatch(addUserLoginInfo(res.data)))
            .then(() => dispatch(addUserToken(response.params)))
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
      <Ionicons style={styles.icon} name="logo-facebook" size={25} />
      <Text style={styles.text}>Sign in with Facebook</Text>
    </Pressable>
  )
}

export default FacebookView

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    elevation: 3,
    backgroundColor: '#1778F2',
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
