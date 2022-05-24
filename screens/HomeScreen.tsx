import React from 'react'
import Card from '../components/Card'
import ContainerView from '../components/Views/ContainerView'
import { StyleSheet, ScrollView, Text, Image } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import Colors from '../constants/color'
// import CustomSlider from '../components/Home/CustomSlider'
import data from '../data'

const HomeScreen = ({ navigation }: any) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (<Image style={{flex:1, maxWidth:1000}} source={require('../assets/img/cloudboard.png')}/>),
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
        <CustomSlider data={data} />
      </ContainerView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
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
