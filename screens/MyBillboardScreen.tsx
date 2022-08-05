import {
  Modal,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Pressable,
} from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import ContainerView from '../components/Views/ContainerView'
import BillboardInput from '../components/Profile/BillboardInput'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'

const MyBillboardScreen = () => {
  const navigation = useNavigation()
  const [modalVisible, setModalVisible] = useState(false)
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable
          className="mr-2"
          onPress={() => setModalVisible(!modalVisible)}
        >
          <Ionicons name="ios-add" size={30} />
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
              <Text className="font-medium text-gray-900 ">
                Add new billboard
              </Text>
            </View>
            <ScrollView>
              <BillboardInput />
            </ScrollView>
          </SafeAreaView>
        </Modal>
      </ContainerView>
    </ScrollView>
  )
}

export default MyBillboardScreen
