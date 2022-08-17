import { StyleSheet, Image } from 'react-native'
import React from 'react'

const LogoTitle = (_props: any) => {
  return (
    <Image
      style={styles.logo}
      className="ml-3"
      source={require('../assets/img/cloudboard.png')}
    />
  )
}

export default LogoTitle

const styles = StyleSheet.create({
  logo: {
    maxHeight: 501 / 13,
    maxWidth: 3170 / 13,
  },
})
