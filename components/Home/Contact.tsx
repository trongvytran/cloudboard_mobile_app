import React from 'react'
import {View, Linking, Text, TouchableOpacity} from "react-native";

const makeACall = (telephone: string) => {
    Linking.openURL(`tel:${telephone}`)
        .then(res => console.log('Calling...'))
}
const Contact = () => {
    return (
        <View className={'flex flex-row bg-white p-4'}>
            <View>
                <Text className={'mx-auto py-4 font-bold'}>
                    Tran Trong Vy
                </Text>
            </View>
            <View className={'mx-auto p-4 bg-green-500'}>
                <TouchableOpacity className={' bg-green-500'} onPress={() => {
                    makeACall('+84907604950')
                }}><Text>
                    0907604950
                </Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}
export default Contact
