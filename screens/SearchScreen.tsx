import { StyleSheet, TextInput } from 'react-native'
import React from 'react'
import LayoutView from '../components/Views/LayoutView'
import TitleText from '../components/TitleText'
import ContainerView from '../components/Views/ContainerView'
import SearchBar from '../components/SearchBar'

const SearchScreen = () => {
  return (
    <LayoutView>
      <ContainerView>
        <TitleText>Search</TitleText>
        <SearchBar />
      </ContainerView>
    </LayoutView>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
  },
})
