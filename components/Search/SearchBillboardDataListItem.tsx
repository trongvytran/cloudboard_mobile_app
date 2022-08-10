import {useNavigation} from '@react-navigation/native'
import React from 'react'
import {
    Pressable,
    View,
    StyleSheet,
    Text,
    Image
} from 'react-native'

import Colors from '../../constants/color'
import DurationBadge from '../UI/DurationBadge'

const SearchBillboardDataListItem = ({item}: any) => {
    const navigation = useNavigation()
    const expensePressHandler = () => {
        navigation.navigate('BillboardDetailScreen', {
            item,
        })
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

export default SearchBillboardDataListItem

const styles = StyleSheet.create({
    card: {
        margin: 10, //m-10
        borderBottomWidth: 0.25,
        borderColor: 'grey',
        flex: 1, //flex
        flexDirection: 'column', //flex-col
    },
    image: {
        aspectRatio: 4 / 3,
        width: 150,
        borderRadius: 8,
        marginVertical: 10
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
