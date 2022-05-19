import React from 'react'
import Card from '../components/Card'
import ContainerView from '../components/Views/ContainerView'
import { StyleSheet, ScrollView, Text } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import Colors from '../constants/color'

const HomeScreen = ({ navigation }: any) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
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
        <Card />
        <Card />
        <Card />
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
