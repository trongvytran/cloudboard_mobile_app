import {View} from 'react-native'
import React from 'react'
import BillboardDetail from '../components/Home/BillboardDetail'

const BillboardDetailScreen = ({route}) => {
    const item = route.params.item

    return (
        <View className="bg-white">
            <BillboardDetail item={item}/>
        </View>
    )
}
export default BillboardDetailScreen
