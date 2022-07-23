import React, { useLayoutEffect, useEffect, useState } from 'react'
import ContainerView from '../components/Views/ContainerView'
import { StyleSheet, ScrollView, Text, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import Colors from '../constants/color'
import Carousel from '../components/Home/Carousel'
import RecommendationList from '../components/Home/RecommendationList'
import TopBillboardList from '../components/Home/TopBillboardList'
import SectionHeadingView from '../components/Home/SectionHeadingView'
import axios from 'axios'

const HomeScreen = ({ navigation }: any) => {
  const [data, setData] = useState([])
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Ionicons
          style={styles.icon}
          name="ios-search-outline"
          size={28}
          onPress={() => navigation.navigate('Search')}
        />
      ),
    })
  }, [navigation])
  useEffect(() => {
    axios
      .get('http://localhost:3000/api/billboards')
      .then((res) => setData(res.data))
  }, [])
  return (
    <ScrollView style={styles.container}>
      <ContainerView>
        <View>
          <Text style={styles.title}>Find Your Billboard</Text>
          <View>
            <Carousel data={data} />
          </View>
        </View>
        <SectionHeadingView name="Recommendations" />
        <RecommendationList data={data} />
        <SectionHeadingView name="Top Billboards" />
        <TopBillboardList data={data} />
      </ContainerView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.layoutColor,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
  },
  icon: {
    color: Colors.primaryColor,
    paddingRight: 40,
    marginTop: 10,
  },
})

export default HomeScreen
