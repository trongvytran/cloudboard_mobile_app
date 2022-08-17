import { View, FlatList } from 'react-native'
import CarouselItem from '../Home/CarouselItem'
import React from 'react'

const Carousel: React.FC = ({ data }: any) => {
  return (
    <View className="px-4">
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        horizontal
        scrollEnabled
        snapToAlignment="center"
        scrollEventThrottle={16}
        decelerationRate={'fast'}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View className="w-6" />}
        renderItem={({ item: item }) => {
          return <CarouselItem item={item} />
        }}
      />
    </View>
  )
}

export default Carousel
