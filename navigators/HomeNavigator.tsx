import {createStackNavigator} from '@react-navigation/stack'
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import {Transition} from 'react-native-reanimated';
import React from 'react'
import HomeScreen from '../screens/HomeScreen'
import SearchScreen from '../screens/SearchScreen'
import BillboardDetailScreen from '../screens/BillboardDetailScreen'
import SeeMoreBillboardScreen from '../screens/SeeMoreBillboardScreen'
import ProfileScreen from '../screens/ProfileScreen'
import ContactScreen from "../screens/ContactScreen";

const HomeStack = createStackNavigator()

const HomeNavigator = () => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="HomeScreen" component={HomeScreen}/>
            <HomeStack.Screen
                name="SearchScreen"
                component={SearchScreen}
                options={{headerShown: false}}
            />
            <HomeStack.Screen
                name="SeeMoreBillboardScreen"
                component={SeeMoreBillboardScreen}
            />
            <HomeStack.Screen
                name="BillboardDetailScreen"
                component={BillboardDetailScreen}
                options={{
                    headerTransparent: true,
                    headerTitle: '',
                }}
            />
            <HomeStack.Screen
                name="ProfileScreen"
                options={{headerShown: false}}
                component={ProfileScreen}
            />
            <HomeStack.Screen
                name="ContactScreen"
                component={ContactScreen}
                options={{
                    headerTitle: 'Contact Information'
                }}
            />
        </HomeStack.Navigator>
    )
}

export default HomeNavigator
