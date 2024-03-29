import React, {useLayoutEffect} from 'react'
import {View, Linking, Text, TouchableOpacity} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import {useNavigation} from "@react-navigation/native";
import Colors from "../../constants/color";

const Contact = ({item}: any) => {
    const navigation = useNavigation()

    useLayoutEffect(() => {
            navigation.setOptions({
                headerLeft: () =>
                    <TouchableOpacity
                        className="ml-3"
                        onPress={() => navigation.goBack()}
                    >
                        <Ionicons name="arrow-back-outline" size={30} color={Colors.primaryColor}/>
                    </TouchableOpacity>

            })
        }
    )
    const makeACall = (telephone: string) => {
        Linking.openURL(`tel:${telephone}`)
            .then(res => console.log('Calling...'))
    }

    const sendAnEmail = (email: string) => {
        Linking.openURL(`mailto:${email}`)
            .then(res => console.log('Opening...'))
    }
    return (
        <View>
            <View>
                <Text className={'font-bold mt-2 ml-4 text-lg'}>Phone</Text>
            </View>
            <View className={'flex flex-row justify-center items-center my-2'}>
                {/*<View className={'flex mx-4 justify-center items-center'}>*/}
                {/*    <Text className={'font-bold text-lg p-4'}>*/}
                {/*        Tran Trong Vy*/}
                {/*    </Text>*/}
                {/*</View>*/}
                <View className={'p-4 mx-4 bg-green-500 rounded-xl'}>
                    <TouchableOpacity
                        className={'flex flex-row align-middle justify-center items-center bg-green-500'}
                        onPress={() => {
                            makeACall(item.user.phoneNumber)
                        }}>
                        <Ionicons name={'call'} color={'white'} size={24}/>
                        <Text className={'font-bold text-white align-middle ml-2 text-lg'}>
                            {item.user.phoneNumber}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <Text className={'font-bold mt-2 ml-4 text-lg'}>Email</Text>
            </View>
            <View className={'flex flex-row justify-center items-center my-2'}>
                {/*<View className={'flex mx-4 justify-center items-center'}>*/}
                {/*    <Text className={'font-bold text-lg p-4'}>*/}
                {/*        Tran Trong Vy*/}
                {/*    </Text>*/}
                {/*</View>*/}
                <View className={'px-4 py-5 mx-4 bg-blue-500 rounded-xl'}>
                    <TouchableOpacity
                        className={'flex flex-row align-middle justify-center items-center'}
                        onPress={() => {
                            sendAnEmail(item.user.email)
                        }}>
                        <Ionicons name={'mail'} color={'white'} size={24}/>
                        <Text className={'font-bold text-white align-middle ml-2 text-lg'}>
                            {item.user.email}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
export default Contact
