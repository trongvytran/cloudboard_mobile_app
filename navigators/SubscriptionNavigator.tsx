import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import LogoTitle from '../components/LogoTitle'
import SubscriptionScreen from '../screens/SubscriptionScreen'
import SearchScreen from '../screens/SearchScreen'
import BillboardDetailScreen from '../screens/BillboardDetailScreen'
import { TouchableOpacity, View, StyleSheet} from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'

const SubscriptionStack = createStackNavigator()

const SubscriptionNavigator = () => {
//   const navigation = useNavigation()
  return (
    <SubscriptionStack.Navigator>
      <SubscriptionStack.Screen
        name="SubscriptionScreen"
        component={SubscriptionScreen}
        options={{headerTitle: 'Your Subscription', 
                    headerTitleAlign: 'left',
                    headerTitleStyle:{ fontSize: 24,
                                        fontWeight: 'bold',
                                        },
                                    headerStyle:{
                                        shadowColor:'transparent'
                                    }}}
      />
    </SubscriptionStack.Navigator>
  )
}

export default SubscriptionNavigator

