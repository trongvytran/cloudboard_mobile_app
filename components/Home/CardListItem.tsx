import React, {useEffect,useState} from 'react'
import {
  Pressable,
  View,
  Text,
  Image,
} from 'react-native'
import axios from 'axios'
import DurationBadge from '../UI/DurationBadge'
import { useNavigation } from '@react-navigation/native'
const CardListItem = ({ item }: any) => {
  const [view, setView] = useState(0);
  const navigation = useNavigation()
  const expensePressHandler= async () => {
    navigation.navigate('BillboardDetailScreen', {
      item,
    })
    const viewed = view + 1
    await axios
    .patch(`http://192.168.1.12:3000/api/billboards/${item.id}`, {
      view:viewed
    })
  }
  useEffect(() => {    
    setView(item.view)
  })
  return (
    <Pressable onPress={expensePressHandler}>
      <View className="my-4 bg-white rounded-lg shadow w-72">
        <Image
          className="rounded-t-lg aspect-[4/3] w-full"
          source={{ uri: item.imageUrl }}
        />
        <View className="p-5">
          <View className="flex flex-row items-center justify-between mb-2">
            <Text className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              {item.name}
            </Text>
            <DurationBadge value={item.duration} />
          </View>
          <Text className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {item.address}
          </Text>
          <Text className="font-medium text-amber-500">{item.price}</Text>
        </View>
      </View>
    </Pressable>
  )
}
export default CardListItem
