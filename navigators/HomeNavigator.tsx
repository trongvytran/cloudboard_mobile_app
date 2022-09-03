import {createStackNavigator} from '@react-navigation/stack'
import React from 'react'
import HomeScreen from '../screens/HomeScreen'
import SearchScreen from '../screens/SearchScreen'
import BillboardDetailScreen from '../screens/BillboardDetailScreen'
import SeeMoreBillboardListScreen from '../screens/SeeMoreBillboardListScreen'
import ProfileScreen from '../screens/ProfileScreen'
import ContactScreen from "../screens/ContactScreen";
import MyBillboardScreen from "../screens/MyBillboardScreen";
import PaymentMethodScreen from "../screens/PaymentMethodScreen";
import ProfileNavigator from "./ProfileNavigator";

const HomeStack = createStackNavigator()

const HomeNavigator = () => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="HomeScreen" component={HomeScreen}/>
            <HomeStack.Screen
                name="Search"
                component={SearchScreen}
                options={{headerShown: false}}
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
