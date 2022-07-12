import { StyleSheet, Image, View } from 'react-native'
import React from 'react'

const LogoTitle = (_props: any) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/img/cloudboard.png')}
        resizeMode="contain"
      />
    </View>
  )
}

export default LogoTitle

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginRight: 200,
  },
  logo: {
    height: 40,
    maxWidth: 240,
  },
})
