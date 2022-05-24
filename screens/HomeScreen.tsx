import React from 'react'
import Card from '../components/Card'
import ContainerView from '../components/Views/ContainerView'
import { StyleSheet, ScrollView, Text, Image, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import Colors from '../constants/color'
// import CustomSlider from '../components/Home/CustomSlider'

const HomeScreen = ({ navigation }: any) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <View style={styles.headerContainer}>
      <Image style={styles.logo} source={require('../assets/img/cloudboard.png')}/>
        </View>
      ),
      headerRight: () => (
        <Ionicons
          style={styles.icon}
          name="ios-search-outline"
          size={30}
          onPress={() => navigation.navigate('Search')}
        />
      ),
    })
  }, [navigation])
  return (
    <ScrollView style={styles.container}>
      <ContainerView>
        <Text style={styles.title}>Find Your Billboard</Text>
      </ContainerView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  headerContainer:{
    flex:1, 
    marginVertical:19,
    paddingLeft:17
  },
  logo: {
    flex:1, 
    width:250
  },
  container: {
    backgroundColor: Colors.layoutColor
  },
  title: {
    fontSize: 18,
    fontWeight: '700'
  },
  icon: {
    color: '#F59E0B',
    paddingRight: 16,
  },
})

export default HomeScreen
