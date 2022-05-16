import Ionicons from '@expo/vector-icons/Ionicons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen'
import Colors from '../constants/color'
import ProfileNavigator from '../navigators/ProfileNavigator'
import SubscriptionScreen from '../screens/SubscriptionScreen'

const Tab = createBottomTabNavigator()

const iconOptions = (options: any) => {
  let iconName
  if (options.route.name === 'Home') {
    iconName = options.focused ? 'ios-home' : 'ios-home-outline'
  } else if (options.route.name === 'Subscription') {
    iconName = options.focused ? 'ios-heart' : 'ios-heart-outline'
  } else if (options.route.name === 'My Profile') {
    iconName = options.focused
      ? 'ios-person-circle'
      : 'ios-person-circle-outline'
  }
  return iconName
}

const Main = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
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
      <Tab.Screen name="Subscription" component={SubscriptionScreen} />
      <Tab.Screen name="My Profile" component={ProfileNavigator} />
    </Tab.Navigator>
  )
}

export default Main
