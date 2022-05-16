import { StyleSheet, TextInput, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import Colors from '../constants/color'
import React from 'react'

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <Ionicons style={styles.icon} name="ios-search" size={20} />
      <TextInput
        placeholderTextColor="rgba(60, 60, 67, 0.6)"
        clearButtonMode="while-editing"
        style={styles.input}
        placeholder="Search"
      />
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.primaryBackgroundColor,
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 10
  },
  icon: {
    color: Colors.textColor
  },
  input: {
    flex: 1,
    fontSize: 17,
    padding: 8
  },
})
