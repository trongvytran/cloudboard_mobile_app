import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'

const HeaderBar = ({navigation} : any) => {
  return (
    <View style={styles.menu}>
      <Image
        style={styles.logo}
        source={require('../assets/img/cloudboard.png')}
        resizeMode="contain"
      />
      <Ionicons
        style={styles.icon}
        name="ios-search"
        size={40}
        onPress={() => navigation.navigate('Search')}
      />
    </View>
  )
}


export default HeaderBar

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 16,
    paddingRight: 16,
  },
  logo: {
    flex: 1,
    height: 20,
    maxWidth: 500,
    alignSelf: 'center',
  },
  icon: {
    color: '#F59E0B',
    alignSelf: 'center',
  },
})
