import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import LogoTitle from '../components/LogoTitle'
import HomeScreen from '../screens/HomeScreen'
import SearchScreen from '../screens/SearchScreen'
import BillboardDetailScreen from '../screens/BillboardDetailScreen'
import { TouchableOpacity, View, StyleSheet, Animated, Text} from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useNavigation, useRoute } from '@react-navigation/native'
import Colors from '../constants/color'
import onShare from '../screens/BillboardDetailScreen'
import ProfileScreen from '../screens/ProfileScreen'

const HomeStack = createStackNavigator()

const HomeNavigator = () => {
  const navigation = useNavigation()
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerTitle: (props) => <LogoTitle {...props} />,
                  headerStyle: {
                    shadowColor:'transparent',
                    height:90
                }
                }}
      />
      <HomeStack.Screen name="Search" component={SearchScreen} 
                        options={{headerLeft: () => (<View>
                          <TouchableOpacity onPress={() => navigation.goBack()}>
                          <Ionicons name="arrow-back-outline" size={32} style={{marginLeft:10}} color={Colors.primaryColor}></Ionicons>
                          </TouchableOpacity>
                        </View>),
                                  headerTitle: '',
                                  headerStyle:{shadowColor:'transparent'}
                        }}/>
      <HomeStack.Screen 
      name="BillboardDetailScreen" 
      component={BillboardDetailScreen}
      options={{headerTransparent:true, 
                headerTitle: '',
                headerLeft: () => (<TouchableOpacity style={styles.button} onPress={() => navigation.navigate('HomeScreen')}>
                <Ionicons name="arrow-back-outline" size={24} color="white" />
                </TouchableOpacity>),
                headerRight: () => (
                  <View style={{flex:1, flexDirection:'row', alignContent:'center', alignItems:'center', marginRight: 15}}>
                  <TouchableOpacity style={styles.share} onPress={() => onShare()}>
                    <Ionicons name="share-outline" size={24} color="white" />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.like}>
                    <Ionicons name="heart-outline" size={24} color="white" />
                  </TouchableOpacity>
                  </View>   
                )}} />
      <HomeStack.Screen
        name="Profile"
        component={ProfileScreen}
      />          
    </HomeStack.Navigator>
  )
}

export default HomeNavigator

const styles = StyleSheet.create({
  button:{
    marginLeft:15, 
    backgroundColor:'black', 
    opacity:.6,
    padding:10, 
    borderRadius:9999},
  share:{marginLeft:15, 
      backgroundColor:'black', 
      opacity:.6,
      padding:10, 
      borderRadius:9999,
      marginRight:5},
  like:{ 
      backgroundColor:'black', 
      opacity:.6,
      padding:10, 
      borderRadius:9999,
      marginLeft:5}
  })


