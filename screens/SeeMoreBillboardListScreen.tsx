import {
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Share,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import ContainerView from '../components/Views/ContainerView'
import Colors from '../constants/color'
import SeeMoreBillboardList from '../components/Home/SeeMoreBillboardList'
import SeeMoreBillboardListItem from '../components/Home/SeeMoreBillboardListItem'
import axios from 'axios'
import Ionicons from '@expo/vector-icons/Ionicons'

const SeeMoreBillboardListScreen = ({ navigation }) => {
  const [data, setData] = useState([])

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'All Billboards',
      headerStyle: {
        shadowColor: 'transparent',
      },
      headerLeft: () => (
        <View>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons
              name="arrow-back-outline"
              size={32}
              style={{ marginLeft: 5 }}
              color={Colors.primaryColor}
            ></Ionicons>
          </TouchableOpacity>
        </View>
      ),
    })
  })

  useEffect(() => {
    axios
      .get('http://192.168.1.13:3000/api/billboards')
      .then((res) => setData(res.data))
  }, [])

  return (
    <ScrollView style={styles.container}>
      {data.map((item) => (
        <SeeMoreBillboardListItem key={item.id} item={item} />
      ))}
    </ScrollView>
  )
}
export default SeeMoreBillboardListScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.layoutColor,
  },
})
