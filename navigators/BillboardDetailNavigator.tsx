import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import LogoTitle from '../components/LogoTitle'
import SearchScreen from '../screens/SearchScreen'
import BillboardDetailScreen from '../screens/BillboardDetailScreen'
const BillboardDetailStack = createStackNavigator()

const BillboardDetailNavigator = () => {
  return (
    <BillboardDetailStack.Navigator>
      <BillboardDetailStack.Screen
        name="BillboardDetailScreen"
        component={BillboardDetailScreen}
        options={{headerShown: true}}
      />
      <BillboardDetailStack.Screen name="Share" component={SearchScreen} />
      <BillboardDetailStack.Screen name="Like" component={BillboardDetailScreen} options={{headerShown: false, }} />
    </BillboardDetailStack.Navigator>
  )
}

export default BillboardDetailNavigator
