import React from 'react'
import {
    Pressable,
    View,
    StyleSheet,
    Text,
    Image,
    Dimensions,
} from 'react-native'
import Colors from '../../constants/color'
import DurationBadge from '../UI/DurationBadge'
import {useNavigation} from '@react-navigation/native'

const SeeMoreBillboardListItem = ({item}: any) => {
    const navigation = useNavigation()
    const expensePressHandler = () => {
        navigation.navigate('BillboardDetailScreen' as never, {
            item,
        } as never)
    }
    return (
        <Pressable onPress={expensePressHandler}>
            <View className={`flex flex-row border-b px-4 pt-3.5 pb-3.5`}>
                <View className={`flex`}>
                    <Image style={styles.image} source={{uri: item.imageUrl}}></Image>
                </View>
                <View className={`flex mt-4 ml-4`}>
                    <View>
                        <Text style={styles.cardName}>{item.name}</Text>
                        <Text style={styles.cardAddress}>{item.address}</Text>
                        <Text style={styles.cardPrice}>{item.price}</Text>
                    </View>
                    <View className={`pt-2 w-1/2 text-center`}>
                        <DurationBadge value={item.duration}/>
                    </View>
                </View>
            </View>
        </Pressable>
    )
}
export default SeeMoreBillboardListItem

const styles = StyleSheet.create({
  card: {
    margin: 10,
    borderBottomWidth: 0.25,
    borderColor: 'grey',
    flex:1,
    flexDirection: 'column'
  },
  image: {
    width: Dimensions.get('window').width / 3,
    aspectRatio: 4 / 3,
    borderRadius: 8,
    marginBottom:20
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
