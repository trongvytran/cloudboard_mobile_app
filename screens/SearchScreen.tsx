import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import TitleText from '../components/TitleText'
import SearchBar from '../components/SearchBar'
import Colors from '../constants/color'

const SearchScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <TitleText>Search</TitleText>
      <SearchBar />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.layoutColor,
    overflow: 'visible',
  },
})

export default SearchScreen
