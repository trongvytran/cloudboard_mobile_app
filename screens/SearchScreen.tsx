import React from 'react'
import { StyleSheet, ScrollView, Text } from 'react-native'
import TitleText from '../components/TitleText'
import SearchBar from '../components/SearchBar'
import Colors from '../constants/color'

const SearchScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Search</Text>
      <SearchBar />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.layoutColor,
    overflow: 'visible',
  },
  title:{
    marginLeft:10,
    fontSize:36,
    fontWeight:'bold'
  }
})

export default SearchScreen
