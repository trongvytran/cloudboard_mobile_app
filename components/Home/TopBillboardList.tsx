import React from 'react'
import { FlatList, View } from 'react-native'
import CardListItem from './CardListItem'
const TopBillboardList = ({ data }: any) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      horizontal
      pagingEnabled
      scrollEnabled
      snapToAlignment="center"
      scrollEventThrottle={16}
      decelerationRate={'fast'}
      showsHorizontalScrollIndicator={false}
      ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
      renderItem={({ item }) => <CardListItem item={item} />}
    />
  )
}

export default TopBillboardList
