import { StyleSheet, Image, View } from 'react-native'
import React from 'react'

const LogoTitle = (props: any) => {
  return (
    <View style={{flex:1, paddingRight:900}}>
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
  logo: {
    height: 20,
    maxWidth: 240,
    flex: 1,
    alignContent:'flex-start'
  },
})
