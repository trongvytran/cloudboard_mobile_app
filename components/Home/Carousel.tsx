import React from 'react'
import {View, VirtualizedList} from 'react-native'
import CarouselItem from '../Home/CarouselItem'

const Carousel = ({data}: any) => {
    const getItem = (data, index) => (data[index])

    return (
        <VirtualizedList
            className={'px-4'}
            data={data}
            decelerationRate={'fast'}
            getItemCount={(data) => data.length}
            getItem={getItem}
            horizontal
            //@ts-ignore
            ItemSeparatorComponent={() => <View className="w-5"/>}
            keyExtractor={(item) => item.id}
            maxToRenderPerBatch={5}
            renderItem={({item}) => <CarouselItem item={item}/>}
            scrollEnabled
            snapToAlignment={'center'}
            showsHorizontalScrollIndicator={false}
        />
    )
}

export default Carousel
