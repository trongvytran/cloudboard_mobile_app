import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  Animated,
} from 'react-native'
import CardStackItem from './CardStackItem'

const { width, height } = Dimensions.get('window')

const TopBillboardStack = ({ data }: any) => {
  const [dataList, setDataList] = useState(data)

  useEffect(() => setDataList(data))

  if (data && data.length) {
    return (
      <View>
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
          renderItem={({ item: item }) => {
            return <CardStackItem item={item} />
          }}
        />
      </View>
    )
  }
  console.log("Card Stack's Error Occured!")
  return null
}

export default TopBillboardStack
