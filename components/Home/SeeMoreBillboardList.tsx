import React from 'react'
import {FlatList, View, VirtualizedList} from 'react-native'
import SeeMoreBillboardListItem from './SeeMoreBillboardListItem'
import CardListItem from "./CardListItem";

const SeeMoreBillboardList = ({data}: any) => {
    const getItem = (data, index) => (data[index])

    return (
        <VirtualizedList
            data={data}
            getItemCount={(data) => data.length}
            getItem={getItem}
            keyExtractor={(item) => item.id}
            snapToAlignment="center"
            scrollEventThrottle={16}
            decelerationRate={'fast'}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => <SeeMoreBillboardListItem item={item}/>}
        />
    )
}

export default SeeMoreBillboardList
