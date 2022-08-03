import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import HomeScreen from '../screens/HomeScreen'
import SearchScreen from '../screens/SearchScreen'
import BillboardDetailScreen from '../screens/BillboardDetailScreen'
import SeeMoreBillboardListScreen from '../screens/SeeMoreBillboardListScreen'
import { TouchableOpacity, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import Colors from '../constants/color'
import ProfileScreen from '../screens/ProfileScreen'
const HomeStack = createStackNavigator()

const HomeNavigator = () => {
  const navigation = useNavigation()
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
      <HomeStack.Screen
        name="Search"
        component={SearchScreen}
        options={{
          headerLeft: () => (
            <View>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons
                  name="arrow-back-outline"
                  size={32}
                  style={{ marginLeft: 10 }}
                  color={Colors.primaryColor}
                ></Ionicons>
              </TouchableOpacity>
            </View>
          ),
          headerTitle: '',
          headerStyle: { shadowColor: 'transparent' },
        }}
      />
      <HomeStack.Screen
        name="SeeMoreBillboardListScreen"
        component={SeeMoreBillboardListScreen}
      />
      <HomeStack.Screen
        name="BillboardDetailScreen"
        component={BillboardDetailScreen}
        options={{
          headerTransparent: true,
          headerTitle: '',
        }}
      />
      <HomeStack.Screen name="Profile" component={ProfileScreen} />
    </HomeStack.Navigator>
  )
}

export default HomeNavigator

