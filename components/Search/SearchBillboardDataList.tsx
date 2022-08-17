import { FlatList } from 'react-native'
import React from 'react'
import SearchBillboardDataListItem from './SearchBillboardDataListItem'

const SearchBillboardDataList = ({ data }: any) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <SearchBillboardDataListItem item={item} />}
    />
  )
}

export default SearchBillboardDataList
