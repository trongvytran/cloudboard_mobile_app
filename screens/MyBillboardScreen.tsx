import {
    Modal,
    SafeAreaView,
    ScrollView,
    Text,
    View,
    Pressable, TouchableOpacity,
} from 'react-native'
import {useSelector} from 'react-redux'
import React, {useEffect, useLayoutEffect, useState} from 'react'
import ContainerView from '../components/Views/ContainerView'
import BillboardInput from '../components/Profile/BillboardInput'
import Ionicons from '@expo/vector-icons/Ionicons'
import {useNavigation} from '@react-navigation/native'
import Colors from "../constants/color";
import MyBillboardList from "../components/Profile/MyBillboardList";
import {BASE_URL} from "../constants/endpoints";
import axios from "axios";

const MyBillboardScreen = () => {
    const navigation = useNavigation()
    const [userBillboards, setUserBillboards] = useState([])
    const [modalVisible, setModalVisible] = useState(false)
    const {userLoginInfo} = useSelector((state: any) => state.userLoginInfo)
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

    const getUserBillboards = async () => {
        const {data} = await axios.get(`${BASE_URL}/api/users/${userLoginInfo.id}`)
        setUserBillboards(data.billboards)
    }

    useEffect(() => {
        getUserBillboards()
    }, [])
    return (
        <View className="bg-white h-screen">
            <ContainerView>
                <Modal
                    className="flex-1 bg-white"
                    animationType="slide"
                    visible={modalVisible}
                >
                    <SafeAreaView>
                        <View className="flex flex-row items-center justify-center py-3 align-middle relatve">
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
                            <BillboardInput handleClose={() => setModalVisible(!modalVisible)}/>
                        </ScrollView>
                    </SafeAreaView>
                </Modal>
            </ContainerView>
            {userBillboards?<Text className={'mx-auto top-1/3 text-gray-400 text-lg'}>You have no billboards</Text>:<MyBillboardList data={userBillboards}/>}
        </View>
    )
}

export default MyBillboardScreen
