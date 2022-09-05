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
            headerTitleStyle: {fontSize: 18, lineHeight: 28},
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
                    <Ionicons name="add" size={30} color={Colors.primaryColor}/>
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
                        <View className="relatve flex flex-row items-center justify-center align-middle py-3">
                            <Pressable
                                onPress={() => setModalVisible(!modalVisible)}
                                className="absolute left-3"
                            >
                                <Ionicons
                                    name="close"
                                    color={Colors.primaryColor}
                                    size={30}
                                />
                            </Pressable>
                            <View>
                                <Text className="text-lg font-bold text-gray-900">
                                    Add new billboard
                                </Text>
                            </View>
                        </View>
                        <ScrollView>
                            <BillboardInput/>
                        </ScrollView>
                    </SafeAreaView>
                </Modal>
            </ContainerView>
        </ScrollView>
    )
}

export default MyBillboardScreen
