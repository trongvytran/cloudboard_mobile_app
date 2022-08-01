import { Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native'
import React, { useLayoutEffect, useEffect, useState } from 'react'
import ContainerView from '../components/Views/ContainerView'
import Subscription from '../components/Home/Subscription'
import Colors from '../constants/color'
import axios from 'axios'
import { useSelector } from 'react-redux'
// const SubscriptionScreen = ({route}) => {
//   const items = route.params.item;
// `http://192.168.1.13:3000/api/users/1`
// `http://192.168.1.13:3000/api/users/email/${userLoginInfo.email}`
const SubscriptionScreen = () => {
  const [data, setData] = useState([])
  const { userLoginInfo } = useSelector((state: any) => state.userLoginInfo)

    useEffect(() => {
      if(userLoginInfo!=null){    
      axios
        .get(`http://192.168.1.12:3000/api/users/email/${userLoginInfo.email}`)
        .then((res) => setData(res.data))
      }
    }, [])


  return (
    
    <ScrollView style={styles.container}>
      <ContainerView>
        {/* <Subscription items = {items} /> */}
        <Subscription data={data.subscriptions}/>
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