import {Text, View} from 'react-native'
import React from 'react'
import {TouchableOpacity} from 'react-native-gesture-handler'
import {useNavigation} from '@react-navigation/native'

interface SectionHeadingProps {
    name: string
}

const SectionHeading = ({name}: SectionHeadingProps) => {
    const navigation = useNavigation()
    return (
        <View className="flex flex-row items-center justify-between mx-4 mt-6">
            <Text className="text-2xl font-bold">{name}</Text>
            <TouchableOpacity
                onPress={() =>
                    navigation.navigate('SeeMoreBillboardScreen' as never)
                }
            >
                <Text className="font-medium text-amber-500">See more</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SectionHeading
