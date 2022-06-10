import { StyleSheet, ScrollView} from 'react-native'
import React from 'react'
import ContainerView from '../components/Views/ContainerView'
import Colors from '../constants/color'
import BillboardDetail from '../components/Home/BillboardDetail'
const BillboardDetailScreen = ({ route }) => {   
    const items = route.params.item;
    return (
    <ScrollView style={styles.container}>
      <ContainerView>
      <BillboardDetail items={items}/>
      </ContainerView>
    </ScrollView>
  )
}

export default BillboardDetailScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.layoutColor,
  },
})