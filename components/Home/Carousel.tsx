import React from 'react'
import {Dimensions, View, VirtualizedList} from 'react-native'
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
            ItemSeparatorComponent={() => <View className="mx-2.5"/>}
            keyExtractor={(item) => item.id}
            maxToRenderPerBatch={5}
            renderItem={({item}) => <CarouselItem item={item}/>}
            scrollEnabled
            // snapToAlignment={'center'}
            // snapToInterval={width - 32 * 8 / 5}
            showsHorizontalScrollIndicator={false}
        />
    )
}

export default Carousel
