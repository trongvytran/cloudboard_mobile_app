import { ScrollView, StyleSheet, Text } from 'react-native'
import React from 'react'
import ContainerView from '../components/Views/ContainerView'
import Colors from '../constants/color'

const MyBillboardScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <ContainerView>
        <Text>MyBillboardScreen</Text>
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
