import {
    View,
    StyleSheet,
    Text,
    Image,
    Dimensions,
    TouchableOpacity,
    FlatList
  } from 'react-native'
  import MapView from 'react-native-maps';
  import Colors from '../../constants/color'
  import React from 'react'
import CardListItem from './CardListItem';
  
  const Subscription = ({data}: any) => {
    if(data !== undefined){
    if ( data.length == 0) {
      return (  
        <View>
        <Text style={{fontWeight:'100', flex:1, justifyContent:'center', alignContent:'center', margin:90}}>You have no subscription yet</Text>
     </View>
      )
    } else {
      return (  
        <View>
        <Text style={{fontWeight:'100', flex:1, justifyContent:'center', alignContent:'center', margin:90}}>You have subscription </Text>
     </View>
      )
    }
  }
  else{
    return (  
      <View>
      <Text style={{fontWeight:'100', flex:1, justifyContent:'center', alignContent:'center', margin:90}}>You have no subscription yet</Text>
     </View>
    )
  }
  }
  export default Subscription
  
  const styles = StyleSheet.create({
    image: {
      marginHorizontal:-10,
      marginTop:-20,
      height: Dimensions.get('screen').height/3,
    },
    cardBody: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingTop: 10,
    },
    cardName: {
      fontSize: 14,
      fontWeight: 'bold',
    },
    cardPrice: {
      color: Colors.primaryColor,
      fontWeight: '600',
      fontSize: 12,
      marginTop: 10,
    },
    cardDescription: {
      paddingVertical: 10,
      fontWeight: 'bold',
    },
    sectionHeadingSeeMore: {
      paddingTop: 10,
      color: Colors.primaryColor,
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    profileContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 14,
    },
    profileAvatar: {
      borderRadius: 9999,
      height: 46,
      width: 46,
      marginRight: 16,
    },
    profileTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 4.5,
    },
    map: {
      height: Dimensions.get('screen').height/3,
      borderRadius: 8,
    },
    mapTitle: {
      fontWeight: 'bold',
      paddingBottom:10,
      marginBottom: 4.5,
    },
    menuButton: {
      flex:1,
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      margin: 10,
      color:'black',
      borderRadius:9999,
    }
  })
  