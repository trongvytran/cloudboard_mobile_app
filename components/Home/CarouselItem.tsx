import {useNavigation} from '@react-navigation/native'
import React from 'react'
import {View, Text, Image, Dimensions, Pressable} from 'react-native'

const CarouselItem = ({item}: any) => {
    const navigation = useNavigation()
    const expensePressHandler = async () => {
        navigation.navigate(
            'BillboardDetailScreen' as never,
            {
                item,
            } as never
        )
    }
    return (
        <Pressable
            style={{width: Dimensions.get('window').width - 32}}
            className="relative my-4 shadow"
            onPress={() => expensePressHandler()}
        >
            <Image
                className="aspect-[8/5] w-full rounded-lg"
                source={{uri: item.imageUrl}}
            />
            <View className="absolute inset-0 rounded-lg bg-gray-900/50"></View>
            <View className="absolute bottom-0 p-5">
                <Text className="mb-2 text-2xl font-bold tracking-tight text-white">
                    {item.name}
                </Text>
                <Text numberOfLines={3} className="text-sm font-normal text-white">
                    {item.description}
                </Text>
            </View>
        </Pressable>
    )
}

export default CarouselItem
