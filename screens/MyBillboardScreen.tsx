import {
    Modal,
    SafeAreaView,
    ScrollView,
    Text,
    View,
    Pressable, TouchableOpacity,
} from 'react-native'
import React, {useLayoutEffect, useState} from 'react'
import ContainerView from '../components/Views/ContainerView'
import BillboardInput from '../components/Profile/BillboardInput'
import Ionicons from '@expo/vector-icons/Ionicons'
import {useNavigation} from '@react-navigation/native'
import Colors from "../constants/color";

const MyBillboardScreen = () => {
    const navigation = useNavigation()
    const [modalVisible, setModalVisible] = useState(false)
    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: 'My Billboards',
            headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons
                        name="ios-arrow-back-outline"
                        size={30}
                        color={Colors.primaryColor}
                        style={{marginLeft: 10, marginRight: 10}}
                    />
                </TouchableOpacity>
            ),
            headerRight: () => (
                <Pressable
                    className="mr-2"
                    onPress={() => setModalVisible(!modalVisible)}
                >
                    <Ionicons name="ios-add" size={30} color={Colors.primaryColor}/>
                </Pressable>
            ),
        })
    }, [navigation])
    return (
        <ScrollView className="bg-white">
            <ContainerView>
                <Modal
                    className="flex-1 bg-white"
                    animationType="slide"
                    visible={modalVisible}
                >
                    <SafeAreaView>
                        <View className="relative flex flex-row items-center justify-center py-3">
                            <Pressable
                                onPress={() => setModalVisible(!modalVisible)}
                                className="absolute left-3 top-1"
                            >
                                <Ionicons
                                    className="text-gray-900"
                                    name="ios-close"
                                    size={30}
                                />
                            </Pressable>
                            <Text className="font-large text-gray-900">
                                Add new billboard
                            </Text>
                        </View>
                        <ScrollView className={`px-4`}>
                            <BillboardInput/>
                        </ScrollView>
                    </SafeAreaView>
                </Modal>
            </ContainerView>
        </ScrollView>
    )
}

export default MyBillboardScreen
