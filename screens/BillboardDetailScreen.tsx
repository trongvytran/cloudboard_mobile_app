import { StyleSheet, ScrollView, Share} from 'react-native'
import React from 'react'
import ContainerView from '../components/Views/ContainerView'
import Colors from '../constants/color'
import BillboardDetail from '../components/Home/BillboardDetail'
const BillboardDetailScreen = ({ route }) => {   
    const items = route.params.item;
    const onShare = async () => {
      try {
        const result = await Share.share({
          title: items.address,
          message: items.description,
          // url:,
        });
        if (result.action === Share.sharedAction) {
          if (result.activityType) {
            // shared with activity type of result.activityType
          } else {
            // shared
          }
        } else if (result.action === Share.dismissedAction) {
          // dismissed
        }
      } catch (error) {
        alert(error.message);
      }
    };
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