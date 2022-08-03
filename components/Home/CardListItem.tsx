import React, {useEffect,useState} from 'react'
import {
  Pressable,
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
} from 'react-native'
import axios from 'axios'
import Colors from '../../constants/color'
import DurationBadge from '../UI/DurationBadge'
import { useNavigation } from '@react-navigation/native'
const CardListItem = ({ item }: any) => {
  const [view, setView] = useState(0);
  const navigation = useNavigation()
  const expensePressHandler= async () => {
    navigation.navigate('BillboardDetailScreen', {
      item,
    })
    const viewed = view + 1
    await axios
    .patch(`http://192.168.1.12:3000/api/billboards/${item.id}`, {
      view:viewed
    })
  }
  useEffect(() => {    
    setView(item.view)
  })
  return (
    <Pressable onPress={expensePressHandler}>
      <View style={styles.card}>
        <Image style={styles.image} source={{ uri: item.imageUrl }} />
        <View style={styles.cardBody}>
          <View>
            <Text style={styles.cardName}>{item.name}</Text>
            <Text style={styles.cardAddress}>{item.address}</Text>
          </View>
          <DurationBadge value={item.duration} />
        </View>
        <Text style={styles.cardPrice}>{item.price}</Text>
      </View>
    </Pressable>
  )
}
export default CardListItem

const styles = StyleSheet.create({
  card: {
    marginVertical: 16,
  },
  image: {
    width: Dimensions.get('window').width / 1.5,
    aspectRatio: 4 / 3,
    borderRadius: 8,
  },
  cardBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
  },
  cardName: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  cardAddress: {
    color: 'grey',
    fontSize: 12,
    marginTop: 4,
  },
  cardPrice: {
    color: Colors.primaryColor,
    fontWeight: '600',
    fontSize: 12,
    marginTop: 10,
  },
})
