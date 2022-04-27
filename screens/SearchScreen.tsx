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