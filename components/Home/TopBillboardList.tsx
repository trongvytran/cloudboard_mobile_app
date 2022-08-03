import React from 'react'
import { FlatList, View } from 'react-native'
import CardListItem from './CardListItem'
const TopBillboardList = ({ data }: any) => {
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
        renderItem={({ item }) => <CardListItem item={item} />}
      />
    </View>
  )
}

export default TopBillboardList
