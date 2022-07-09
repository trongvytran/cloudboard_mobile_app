import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import LogoTitle from '../components/LogoTitle'
import HomeScreen from '../screens/HomeScreen'
import SearchScreen from '../screens/SearchScreen'
import BillboardDetailScreen from '../screens/BillboardDetailScreen'
const BillboardDetailStack = createStackNavigator()

const HomeNavigator = () => {
  return (
    <BillboardDetailStack.Navigator>
      <BillboardDetailStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerTitle: (props) => <LogoTitle {...props} /> }}
      />
      <BillboardDetailStack.Screen name="Share" component={SearchScreen} />
      <BillboardDetailStack.Screen name="Like" component={BillboardDetailScreen} options={{headerShown: false, }} />
    </BillboardDetailStack.Navigator>
  )
}

export default HomeNavigator
