import { ScrollView } from 'react-native'
import React from 'react'
import BillboardDetail from '../components/Home/BillboardDetail'

const BillboardDetailScreen = ({ route }) => {
  const item = route.params.item

  return (
    <ScrollView className="bg-white">
      <BillboardDetail item={item} />
    </ScrollView>
  )
}
export default BillboardDetailScreen
