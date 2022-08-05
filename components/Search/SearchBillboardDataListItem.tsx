import { useNavigation } from '@react-navigation/native'
import React from 'react'
import {
  Pressable,
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
} from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import DurationBadge from '../UI/DurationBadge'

const SearchBillboardDataListItem = ({ item }: any) => {
  const navigation = useNavigation()
  const expensePressHandler = () => {
    navigation.navigate('BillboardDetailScreen', {
      item,
    })
  }
  return (
    <Pressable onPress={expensePressHandler}>
      <View style={styles.card}>
        <View style={styles.cardBody}>
          <Image style={styles.image} source={{ uri: item.imageUrl }} />
          <View style={{ paddingLeft: 10 }}>
            <View>
              <Text style={styles.cardName}>{item.name}</Text>
              <Text style={styles.cardAddress}>{item.address}</Text>
            </View>
            <Text style={styles.cardPrice}>{item.price}</Text>
          </View>
          <DurationBadge value={item.duration} />
        </View>
      </View>
    </Pressable>
  )
}

export default SearchBillboardDataListItem

const styles = StyleSheet.create({
  card: {
    margin: 10,
    borderBottomWidth: 0.25,
    borderColor: 'grey',
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    width: Dimensions.get('window').width / 3,
    aspectRatio: 4 / 3,
    borderRadius: 8,
    marginBottom: 20,
  },
  cardBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
