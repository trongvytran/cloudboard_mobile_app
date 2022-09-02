import React from 'react'
import {View, FlatList, VirtualizedList} from 'react-native'
import CarouselItem from '../Home/CarouselItem'
import SeeMoreBillboardListItem from "./SeeMoreBillboardListItem";

const Carousel = ({data}: any) => {
    const getItem = (data, index) => (data[index])

    return (
        <VirtualizedList
            data={data}
            className={'px-4'}
            getItemCount={(data) => data.length}
            getItem={getItem}
            horizontal
            scrollEnabled
            snapToAlignment={'center'}
            keyExtractor={(item) => item.id}
            decelerationRate={'fast'}
            showsHorizontalScrollIndicator={false}
            //@ts-ignore
            ItemSeparatorComponent={() => <View className="w-5"/>}
            renderItem={({item}) => <CarouselItem item={item}/>}
        />
    )
}

export default Carousel
