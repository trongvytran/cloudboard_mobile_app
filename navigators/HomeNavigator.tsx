import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import LogoTitle from '../components/LogoTitle'
import HomeScreen from '../screens/HomeScreen'
import SearchScreen from '../screens/SearchScreen'

const HomeStack = createStackNavigator()

const HomeNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        options={{
          headerTitleAlign: 'left',
          headerTitle: (props) => <LogoTitle {...props} />,
        }}
        name="Home"
        component={HomeScreen}
      />
      <HomeStack.Screen name="Search" component={SearchScreen} />
    </HomeStack.Navigator>
  )
}

export default HomeNavigator
