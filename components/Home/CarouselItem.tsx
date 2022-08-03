import React from 'react-native'
import { View, StyleSheet, Text, Image, Dimensions } from 'react-native'
import Colors from '../../constants/color'

const CarouselItem = ({ item }: any) => {
  return (
    <View
      style={{ width: Dimensions.get('window').width - 32 }}
      className="relative my-4 shadow"
    >
      <Image className="aspect-[8/5] w-full rounded-lg" source={{ uri: item.imageUrl }} />
      <View className="absolute inset-0 rounded-lg bg-gray-900/50"></View>
      <View className="absolute bottom-0 p-5">
        <Text className="mb-2 text-2xl font-bold tracking-tight text-white">{item.name}</Text>
        <Text className="text-sm font-normal text-white">{item.description}</Text>
      </View>
    </View>
  )
}

export default CarouselItem
