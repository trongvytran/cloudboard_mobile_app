import React from "react"
import { Text, View, StyleSheet, Pressable } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import Colors from '../../constants/color'
import * as Facebook from 'expo-facebook';
import { useDispatch, useSelector } from 'react-redux'
import { clearUserLoginInfo } from '../../features/auth/userLoginInfo'
import { clearUserToken } from '../../features/auth/userToken'

const LogoutButton = () => {
  const dispatch = useDispatch()
  const Logout = () => {
    dispatch(clearUserLoginInfo())
    dispatch(clearUserToken())
  }
  return (
    <Pressable onPress={Logout} style={styles.container}>
      <View style={styles.title}>
        <Text>
        Sign Out
        </Text>
      </View>
      <Ionicons style={styles.icon} name="ios-exit-outline" size={20} />
    </Pressable>
  )
}

export default LogoutButton

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    flexDirection: 'row',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.borderColor,
    paddingBottom: 17,
    paddingTop: 17,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
  },
  icon: {
    color: Colors.textColor,
  },
})

