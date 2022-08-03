import React from 'react'
import { FlatList, View } from 'react-native'
import SeeMoreBillboardListItem from './SeeMoreBillboardListItem'

const SeeMoreBillboardList = ({ data }: any) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      pagingEnabled
      snapToAlignment="center"
      scrollEventThrottle={16}
      decelerationRate={'fast'}
      showsHorizontalScrollIndicator={false}
      // ItemSeparatorComponent={() => <View style={{ width: 100 }} />}
      renderItem={({ item }) => <SeeMoreBillboardListItem item={item} />}
    />
  )
}

export default SeeMoreBillboardList
