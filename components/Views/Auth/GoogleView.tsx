import { StyleSheet, Button } from 'react-native'
import * as Google from 'expo-auth-session/providers/google'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addAccessToken } from '../../../features/auth/accessTokenSlice'

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
      dispatch(addAccessToken(response.params.access_token))
    }
  }, [response])
  return (
    <Button
      disabled={!request}
      onPress={() => {
        promptAsync({ useProxy: true, showInRecents: true })
      }}
      title="Sign In with Google"
    />
  )
}

export default GoogleView

const styles = StyleSheet.create({})
