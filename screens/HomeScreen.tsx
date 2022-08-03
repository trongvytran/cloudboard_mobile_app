import React, { useLayoutEffect } from 'react'
import { StyleSheet, ScrollView, Text, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import Colors from '../constants/color'
import Carousel from '../components/Home/Carousel'
import RecommendationList from '../components/Home/RecommendationList'
import TopBillboardList from '../components/Home/TopBillboardList'
import SectionHeadingView from '../components/Home/SectionHeadingView'
import LogoTitle from '../components/LogoTitle'
import useBillboards from '../hooks/useBillboards'

const HomeScreen = ({ navigation }: any) => {
  const { status, data, error } = useBillboards()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: (props) => <LogoTitle {...props} />,
      headerStyle: {
        shadowColor: 'transparent',
      },
      headerTitle: '',
      headerRight: () => (
        <Ionicons
          style={styles.icon}
          name="ios-search-outline"
          size={32}
          onPress={() => navigation.navigate('Search')}
        />
      ),
    })
  }, [navigation])
  return (
    <ScrollView className="bg-white">
      <View className="py-4">
        {status === 'loading' ? (
          <Text>Loading</Text>
        ) : status === 'error' ? (
          <Text>Error: {(error as Error).message}</Text>
        ) : (
          <>
            <Text className="mx-4 text-lg font-bold">Find Your Billboard</Text>
            <Carousel data={data} />
            <SectionHeadingView name="Recommendations" />
            <RecommendationList data={data} />
            <SectionHeadingView name="Top Billboards" />
            <TopBillboardList data={[...data].sort((a, b) => b.view - a.view) && [...data].sort((a, b) => b.like.length - a.like.length)} />
          </>
        )}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  icon: {
    color: Colors.primaryColor,
    paddingRight: 12,
  },
})

export default HomeScreen
