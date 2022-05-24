import { StyleSheet, Image } from 'react-native'
import React from 'react'

const LogoTitle = () => {
  return (
    <Image
      style={styles.logo}
      source={require('../assets/img/cloudboard.png')}
      resizeMode="contain"
    />
  )
}

export default LogoTitle

const styles = StyleSheet.create({
  logo: {
    height: 20,
    maxWidth: 180,
    flex: 1
  },
})
