import {
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import Colors from '../constants/color'
import SeeMoreBillboardListItem from '../components/Home/SeeMoreBillboardListItem'
import axios from 'axios'
import Ionicons from '@expo/vector-icons/Ionicons'
import{ BASE_URL } from "../constants/endpoints";

const SeeMoreBillboardScreen = ({ navigation }) => {
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
      .get(`${BASE_URL}/api/billboards`)
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
export default SeeMoreBillboardScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.layoutColor,
  },
})
