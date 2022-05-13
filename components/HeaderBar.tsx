import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import SearchScreen from '../screens/SearchScreen'
import { createStackNavigator } from '@react-navigation/stack'

const Header = createStackNavigator()

const HeaderBar = () => {
  return (
    <View style={styles.menu}>
      <Image
        style={styles.logo}
        source={require('../assets/img/cloudboard.svg')}
        resizeMode="contain"
      />
      <Ionicons
        style={styles.icon}
        name="ios-search"
        size={40}
        onPress={() => SearchScreen}
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
    height: 50,
    maxWidth: 500,
    alignSelf: 'center',
  },
  icon: {
    color: '#F59E0B',
    alignSelf: 'center',
  },
})
