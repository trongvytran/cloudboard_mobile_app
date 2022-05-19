import { StyleSheet, Text, ScrollView } from 'react-native'
import React from 'react'
import ContainerView from '../components/Views/ContainerView'
import Colors from '../constants/color'

const PaymentMethodScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <ContainerView>
        <Text>PaymentMethodScreen</Text>
      </ContainerView>
    </ScrollView>
  )
}

export default PaymentMethodScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.layoutColor,
  },
})
