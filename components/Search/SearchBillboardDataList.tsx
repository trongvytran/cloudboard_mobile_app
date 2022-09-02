import {FlatList, VirtualizedList} from 'react-native'
import React from 'react'
import SearchBillboardDataListItem from './SearchBillboardDataListItem'

const SearchBillboardDataList = ({data}: any) => {
    const getItem = (data, index) => data[index]
    return (
        <VirtualizedList
            data={data}
            maxToRenderPerBatch={5}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => <SearchBillboardDataListItem item={item}/>}
            getItem={getItem}
            getItemCount={(data) => data.length}
        />
    )
}

export default SearchBillboardDataList
