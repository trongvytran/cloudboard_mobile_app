import React, { useEffect, useState } from 'react'
import { StyleSheet, ScrollView, Text, View, TextInput } from 'react-native'
import Colors from '../constants/color'
import Ionicons from '@expo/vector-icons/Ionicons'
import SearchBillboardDataListItem from '../components/Search/SearchBillboardDataListItem'
import baseUrl from "../constants/baseUrl";

const SearchScreen = () => {
  const [data, setData] = useState([])
  const [result, setResult] = useState([])

  useEffect(() => {
    fetch(`${baseUrl}/api/billboards`).then(async (res) =>
      setData(await res.json())
    )
  }, [])

  const searchInit = (text: any) => {
    if (text) {
      const filterData = data.filter((item) => {
        const dataItem = item.name ? item.name.toLowerCase() : ''.toLowerCase()
        const searchedText = text.toLowerCase()

        return dataItem.indexOf(searchedText) > -1
      })
      setResult(filterData)
    } else {
      return <Text>Nothing is found!</Text>
    }
  }
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>Search</Text>
        <View style={styles.searchBarContainer}>
          <Ionicons style={styles.searchIcon} name="ios-search" size={20} />
          <TextInput
            placeholderTextColor="rgba(60, 60, 67, 0.6)"
            clearButtonMode="while-editing"
            style={styles.searchInput}
            onChangeText={(text) => searchInit(text)}
            placeholder="Search"
          />
        </View>
      </View>
      <ScrollView style={styles.container}>
        {result.map((item) =>
          item ? (
            <SearchBillboardDataListItem key={item.id} item={item} />
          ) : (
            <Text>Nothing is found!</Text>
          )
        )}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.layoutColor,
    overflow: 'visible',
    paddingBottom: 10,
  },
  searchResults: {
    height: '100%',
    backgroundColor: Colors.layoutColor,
    overflow: 'visible',
  },

  title: {
    marginLeft: 10,
    fontSize: 36,
    fontWeight: 'bold',
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.primaryBackgroundColor,
    marginTop: 10,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  searchIcon: {
    color: Colors.textColor,
  },
  searchInput: {
    flex: 1,
    fontSize: 17,
    padding: 8,
  },
})

export default SearchScreen
