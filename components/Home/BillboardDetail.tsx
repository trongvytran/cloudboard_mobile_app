import {
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
} from 'react-native'
import Colors from '../../constants/color'
import DurationBadge from '../UI/DurationBadge'
import React from 'react'
const BillboardDetail = ({ items }: any) => {
  return (
    <View>
      <Image style={styles.image} source={{ uri: items.imageUrl }} />

      <View style={styles.cardBody}>
        <View>
          <Text style={styles.cardName}>{items.address}</Text>
        </View>
        <DurationBadge value={items.duration} />
      </View>
      <View>
        <Text style={styles.cardPrice}>{items.price}</Text>
      </View>
      <Text style={styles.cardDescription}>Description</Text>
      <Text>{items.description}</Text>
      <View style={styles.container}>
        <Text style={styles.sectionHeadingSeeMore}>Read more</Text>
      </View>
      <View style={styles.profileContainer}>
        <Image
          style={styles.profileAvatar}
          source={{ uri: items.user.imageUrl }}
        />
        <View>
          <Text style={styles.profileTitle}>{items.user.name}</Text>
        </View>
      </View>
    </View>
  )
}
export default BillboardDetail

const styles = StyleSheet.create({
  image: {
    width: Dimensions.get('window').width,
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
  cardPrice: {
    color: Colors.primaryColor,
    fontWeight: '600',
    fontSize: 12,
    marginTop: 10,
  },
  cardDescription: {
    paddingTop: 10,
    fontWeight: 'bold',
  },
  sectionHeadingSeeMore: {
    color: Colors.primaryColor,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },
  profileAvatar: {
    borderRadius: 9999,
    height: 46,
    width: 46,
    marginRight: 16,
  },
  profileTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4.5,
  },
})
