import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import LogoTitle from '../components/LogoTitle'
import HomeScreen from '../screens/HomeScreen'
import SearchScreen from '../screens/SearchScreen'
import BillboardDetailScreen from '../screens/BillboardDetailScreen'
const HomeStack = createStackNavigator()

const HomeNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerTitle: (props) => <LogoTitle {...props} /> }}
      />
      <HomeStack.Screen name="Search" component={SearchScreen} />
      <HomeStack.Screen name="BillboardDetailScreen" component={BillboardDetailScreen} />
    </HomeStack.Navigator>
  )
}

export default HomeNavigator
