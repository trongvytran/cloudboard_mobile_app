import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import SubscriptionScreen from '../screens/SubscriptionScreen'

const SubscriptionStack = createStackNavigator()

const SubscriptionNavigator = () => {
  return (
    <SubscriptionStack.Navigator>
      <SubscriptionStack.Screen
        name="SubscriptionScreen"
        component={SubscriptionScreen}
        options={{ headerShown: false }}
      />
    </SubscriptionStack.Navigator>
  )
}

export default SubscriptionNavigator
