import { ScrollView, StyleSheet, Text } from 'react-native'
import React from 'react'
import ContainerView from '../components/Views/ContainerView'
import Colors from '../constants/color'
import BillboardInput from '../components/Profile/BillboardInput'

const MyBillboardScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <ContainerView>
        <BillboardInput>
          
        </BillboardInput>
      </ContainerView>
    </ScrollView>
  )
}

export default MyBillboardScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.layoutColor,
  },
})
