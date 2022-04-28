import { StyleSheet } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen'
import SearchScreen from '../screens/SearchScreen'
import ProfileScreen from '../screens/ProfileScreen'
import Colors from '../constants/color'

const Tab = createBottomTabNavigator()

const iconOptions = (options: any) => {
  let iconName
  if (options.route.name === 'Home') {
    iconName = options.focused ? 'ios-home' : 'ios-home-outline'
  } else if (options.route.name === 'Search') {
    iconName = options.focused ? 'ios-search' : 'ios-search-outline'
  } else if (options.route.name === 'Profile') {
    iconName = options.focused
      ? 'ios-person-circle'
      : 'ios-person-circle-outline'
  }
  return iconName
}

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = iconOptions({ route, focused })
          return <Ionicons name={iconName} size={size} color={color} />
        },
        tabBarActiveTintColor: Colors.primaryColor,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  )
}

export default BottomTabs

const styles = StyleSheet.create({})
