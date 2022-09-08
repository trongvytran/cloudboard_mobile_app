import Ionicons from '@expo/vector-icons/Ionicons'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Colors from '../constants/color'
import ProfileNavigator from '../navigators/ProfileNavigator'
import SubscriptionNavigator from '../navigators/SubscriptionsNavigator'
import React from 'react'
import HomeNavigator from '../navigators/HomeNavigator'
import {useSelector} from 'react-redux'

const Tab = createBottomTabNavigator()

const iconOptions = (options: any) => {
    let iconName
    if (options.route.name === 'Home') {
        iconName = options.focused ? 'ios-home' : 'ios-home-outline'
    } else if (options.route.name === 'Subscriptions') {
        iconName = options.focused ? 'ios-heart' : 'ios-heart-outline'
    } else if (options.route.name === 'My Profile') {
        iconName = options.focused
            ? 'ios-person-circle'
            : 'ios-person-circle-outline'
    }
    return iconName
}

const Main = () => {
    const {userLoginInfo} = useSelector((state: any) => state.userLoginInfo)
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({route}) => ({
                headerShown: false,
                tabBarIcon: ({focused, color, size}) => {
                    let iconName = iconOptions({route, focused})
                    return <Ionicons name={iconName} size={size} color={color}/>
                },
                tabBarActiveTintColor: Colors.primaryColor,
                tabBarStyle: {
                    marginBottom: 5,
                },
            })}
        >
            <Tab.Screen name="Home" options={{lazy: false}} component={HomeNavigator}/>
            {userLoginInfo ? (
                <Tab.Screen name="Subscriptions" component={SubscriptionNavigator}/>
            ) : null}
            <Tab.Screen name="My Profile" component={ProfileNavigator}/>
        </Tab.Navigator>
    )
}

export default Main
