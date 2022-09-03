import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import ProfileScreen from '../screens/ProfileScreen'
import PaymentMethodScreen from '../screens/PaymentMethodScreen'
import MyBillboardScreen from '../screens/MyBillboardScreen'
import SettingsScreen from "../screens/SettingsScreen";

const ProfileStack = createStackNavigator()

const ProfileNavigator = () => {
    return (
        <ProfileStack.Navigator>
            <ProfileStack.Screen
                options={{headerShown: false}}
                name="ProfileScreen"
                component={ProfileScreen}
            />
            <ProfileStack.Screen
                name="SettingsScreen" component={SettingsScreen}
            />
            <ProfileStack.Screen
                name="PaymentMethodScreen"
                component={PaymentMethodScreen}
            />
            <ProfileStack.Screen name="MyBillboardScreen" component={MyBillboardScreen}/>
        </ProfileStack.Navigator>
    )
}

export default ProfileNavigator
