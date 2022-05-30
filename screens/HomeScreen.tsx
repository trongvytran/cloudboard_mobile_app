import React from 'react'
import ContainerView from '../components/Views/ContainerView'
import { StyleSheet, ScrollView, Text, Image, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import Colors from '../constants/color'
import Carousel from '../components/Home/Carousel'
import RecommendationStack from '../components/Home/RecommendationStack'
import TopBillboardStack from '../components/Home/TopBillboardStack'

import data from '../data'
import cardstackdata from '../cardstackdata'


const HomeScreen = ({ navigation }: any) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Ionicons
          style={styles.icon}
          name="ios-search-outline"
          size={30}
          onPress={() => navigation.navigate('Search')}
        />
      ),
    })
  }, [navigation])
  return (
    <ScrollView style={styles.container}>
      <ContainerView>
        <ScrollView>
        <View>
        <Text style={styles.title}>Find Your Billboard</Text>
        <View>
        <Carousel data={data}/>
        </View>
        </View>
        <View style={styles.heading}>
        <Text style={styles.title}>Recommendations</Text>
        <Text style={styles.seeMore}>See more</Text>
        </View>
        <View>
        <RecommendationStack data={cardstackdata}/>
        </View>
        <View style={styles.heading}>
        <Text style={styles.title}>Top Billboards</Text>
        <Text style={styles.seeMore}>See more</Text>
        </View>
        <View>
        <TopBillboardStack data={cardstackdata}/>
        </View>
        </ScrollView>
      </ContainerView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  headerContainer:{
    flex:1,
    paddingTop:17,
    paddingLeft:17,
  },
  heading:{
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center'
  },
  seeMore:{
    color: '#F59E0B',
    paddingRight:10
  },
  logo: {
    flex:1, 
    width:'100%',
    
  },
  container: {
    backgroundColor: Colors.layoutColor,
    overflow:'visible'
  },
  title: {
    fontSize: 18,
    fontWeight: '700'
  },
  icon: {
    color: '#F59E0B',
    paddingRight: 40,
  },
})

export default HomeScreen
