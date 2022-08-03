import { Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native'
import React, { useLayoutEffect, useEffect, useState } from 'react'
import ContainerView from '../components/Views/ContainerView'
import Subscription from '../components/Home/Subscription'
import Colors from '../constants/color'
import axios from 'axios'
import { useSelector } from 'react-redux'
import TitleText from '../components/TitleText'
import LayoutView from '../components/Views/LayoutView'
// const SubscriptionScreen = ({route}) => {
//   const items = route.params.item;
// `http://192.168.1.13:3000/api/users/1`
// `http://192.168.1.13:3000/api/users/email/${userLoginInfo.email}`
const SubscriptionScreen = () => {
  const [data, setData] = useState([])
  const { userLoginInfo } = useSelector((state: any) => state.userLoginInfo)

  useEffect(() => {
    if (userLoginInfo != null) {
      axios
        .get(`http://192.168.1.13:3000/api/users/email/${userLoginInfo.email}`)
        .then((res) => setData(res.data))
    }
  }, [])

  return (
    <LayoutView>
      <ContainerView>
        <TitleText>Subscriptions</TitleText>
        <Subscription data={data.subscriptions} />
      </ContainerView>
    </LayoutView>
  )
}

export default SubscriptionScreen
