import React from 'react'
import {FlatList, View, VirtualizedList} from 'react-native'
import SeeMoreBillboardListItem from './SeeMoreBillboardListItem'
import CardListItem from "./CardListItem";

const SeeMoreBillboardList = ({data}: any) => {
    const getItem = (data, index) => (data[index])

    return (
        <VirtualizedList
            data={data}
            decelerationRate={'fast'}
            getItemCount={(data) => data.length}
            getItem={getItem}
            keyExtractor={(item) => item.id}
            maxToRenderPerBatch={5}
            renderItem={({item}) => <SeeMoreBillboardListItem item={item}/>}
            snapToAlignment="center"
            scrollEventThrottle={16}
            showsVerticalScrollIndicator={false}

        />
    )
}

export default SeeMoreBillboardList
