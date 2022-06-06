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
    paddingRight: 150,
  },
  logo: {
    height: 20,
    maxWidth: 240,
    flex: 1,
    alignContent: 'flex-start',
  },
})
