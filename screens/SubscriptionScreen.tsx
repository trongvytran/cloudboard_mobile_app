import { Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import ContainerView from '../components/Views/ContainerView'
import Subscription from '../components/Home/Subscription'
import Colors from '../constants/color'

// const SubscriptionScreen = ({route}) => {
//   const items = route.params.item;
const SubscriptionScreen = () => {
  return (
    
    <ScrollView style={styles.container}>
      <ContainerView>
        {/* <Subscription items = {items} /> */}
        <Subscription/>
      </ContainerView>
    </ScrollView>
   
  )
}

export default SubscriptionScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.layoutColor,
  },
})