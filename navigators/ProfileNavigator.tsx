import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ProfileScreen from '../screens/ProfileScreen'
import SettingScreen from '../screens/SettingScreen'
import PaymentMethodScreen from '../screens/PaymentMethodScreen'
import MyBillboardScreen from '../screens/MyBillboardScreen'

const ProfileStack = createStackNavigator()

const ProfileNavigator = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        options={{ headerShown: false }}
        name="Profile"
        component={ProfileScreen}
      />
      <ProfileStack.Screen name="Settings" component={SettingScreen} />
      <ProfileStack.Screen
        name="Payment methods"
        component={PaymentMethodScreen}
      />
      <ProfileStack.Screen name="My billboards" component={MyBillboardScreen} />
    </ProfileStack.Navigator>
  )
}

export default ProfileNavigator
