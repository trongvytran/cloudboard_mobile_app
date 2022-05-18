import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import React from "react"
import SearchScreen from "../screens/SearchScreen"

const HomeStack = createStackNavigator()

const HomeNavigator = () => {
    return (
    <HomeStack.Navigator>
      <HomeStack.Screen options={{ headerShown: false }} name="Search" component={SearchScreen} />
    </HomeStack.Navigator>
    )
  }

  export default HomeNavigator