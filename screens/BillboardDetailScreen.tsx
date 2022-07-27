import { StyleSheet, ScrollView, Share, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import ContainerView from '../components/Views/ContainerView'
import Colors from '../constants/color'
import BillboardDetail from '../components/Home/BillboardDetail'
import { useDispatch, useSelector } from 'react-redux'
import { addBillboardShareInfo } from '../features/shareBillboardInfo'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'

const BillboardDetailScreen = ({ route }) => {
  const items = route.params.item

  return (
    <ScrollView style={styles.container}>
      <ContainerView>
        <BillboardDetail items={items} />
      </ContainerView>
    </ScrollView>
  )
}
export default BillboardDetailScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.layoutColor,
  },
})


