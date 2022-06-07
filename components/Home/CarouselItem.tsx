import React from 'react-native'
import { View, StyleSheet, Text, Image, Dimensions } from 'react-native'
import Colors from '../../constants/color'

const CarouselItem = ({ item }: any) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: item.imageUrl }} />
      <View style={styles.body}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 16
  },
  body: {
    position: 'absolute',
    bottom: 10,
    margin: 10,
    left: 5,
  },
  image: {
    width: Dimensions.get('window').width - 16,
    aspectRatio: 8 / 5,
    borderRadius: 10,
  },
  name: {
    color: Colors.layoutColor,
    fontSize: 22,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  description: {
    color: Colors.layoutColor,
    fontSize: 12,
  },
})

export default CarouselItem
