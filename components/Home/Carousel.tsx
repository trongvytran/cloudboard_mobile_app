import React, {useState, useEffect} from 'react'
import {View, FlatList, Pressable} from 'react-native'
import CarouselItem from '../Home/CarouselItem'

const Carousel = ({data}: any) => {
    return (
        <View className="px-4">
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                horizontal
                scrollEnabled
                snapToAlignment="center"
                scrollEventThrottle={1}
                decelerationRate={'fast'}
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={() => <View className="w-4"/>}
                renderItem={({item: item}) => {
                    return <CarouselItem item={item}/>
                }}
            />
        </View>
    )
}

export default Carousel
