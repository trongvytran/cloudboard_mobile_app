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
  },
  logo: {
    maxHeight: 501/13,
    maxWidth: 3174/13,
    // marginVertical:10,
    marginLeft:5,
    marginTop:5
  },
})
