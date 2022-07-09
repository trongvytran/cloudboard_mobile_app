import React from "react"
import { View, TouchableOpacity, StyleSheet } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons'
import { useNavigation } from "@react-navigation/native"

const DetailBillboardMenu = () => {
    const navigation = useNavigation()
    return  (
        <View style={styles.menuButton}>
            <View>
            <View style={{flex: 1, backgroundColor:'black', opacity: .5, padding:8, borderRadius:9999}}>
                <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
                <Ionicons name="arrow-back-outline" size={24} color="white" />
                </TouchableOpacity>
            </View>
            </View>
          <View style={{flex:0, flexDirection:'row'}}>
          <TouchableOpacity style={{paddingRight:10}}>
            <Ionicons name="share-outline" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={{paddingLeft:10}}>
            <Ionicons name="heart-outline" size={24} color="black" />
          </TouchableOpacity>
          </View>
        </View>
    )
}

export default DetailBillboardMenu

const styles = StyleSheet.create({
  menuButton: {
    position: 'absolute',
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginTop:30,
    marginHorizontal: 10,
  }
})

