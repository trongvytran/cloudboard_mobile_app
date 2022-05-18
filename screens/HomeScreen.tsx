import React from 'react'
import LayoutView from '../components/Views/LayoutView'
import TitleText from '../components/TitleText'
import Card from '../components/Card'
import ContainerView from '../components/Views/ContainerView'
import { View, Image, StyleSheet, Button } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'

const HomeScreen = ({navigation}: any) => {
  return (
    <LayoutView>
      <ContainerView>
      <View style={styles.menu}>
      <Image
        style={styles.logo}
        source={require('../assets/img/cloudboard.png')}
        resizeMode="contain"
      />
      {/* <Button onPress={() => navigation.navigate('Search')}>Click</Button> */}
      <Ionicons
        style={styles.icon}
        name="ios-search"
        size={40}
        onPress={() => navigation.navigate('Search')}
      />
      </View>
      </ContainerView>
      <ContainerView>
        <TitleText>Find Your Billboard</TitleText>
        <Card />
        <Card />
        <Card />
      </ContainerView>
    </LayoutView>
  )
}

// const HeaderBar = ({navigation} : any) => {
//   return (
//     <View style={styles.menu}>
//       <Image
//         style={styles.logo}
//         source={require('../assets/img/cloudboard.png')}
//         resizeMode="contain"
//       />
//       <Ionicons
//         style={styles.icon}
//         name="ios-search"
//         size={40}
//         onPress={() => navigation.navigate('Search')}
//       />
//     </View>
//   )
// }

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 16,
    paddingRight: 16,
  },
  logo: {
    flex: 1,
    height: 20,
    maxWidth: 500,
    alignSelf: 'center',
  },
  icon: {
    color: '#F59E0B',
    alignSelf: 'center',
  },
})


export default HomeScreen
