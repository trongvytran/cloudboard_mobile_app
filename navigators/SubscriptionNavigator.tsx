import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import SubscriptionsScreen from '../screens/SubscriptionsScreen'

const SubscriptionsStack = createStackNavigator()

const SubscriptionsNavigator = () => {
  return (
    <SubscriptionsStack.Navigator>
      <SubscriptionsStack.Screen
        name="SubscriptionsScreen"
        component={SubscriptionsScreen}
        options={{ headerShown: false }}
      />
    </SubscriptionsStack.Navigator>
  )
}

export default SubscriptionsNavigator
