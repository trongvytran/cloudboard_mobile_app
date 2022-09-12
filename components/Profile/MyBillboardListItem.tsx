import {View, Text, Image, Pressable, StyleSheet} from "react-native";
import DurationBadge from "../UI/DurationBadge";
import React from "react";
import {useNavigation} from "@react-navigation/native";
import Colors from "../../constants/color";

const MyBillboardListItem = ({item}: any) => {
    const navigation = useNavigation()
    const returnPress = () => {
        navigation.goBack()
    }
    return(
        <Pressable onPress={() => returnPress()}>
            <View className="flex flex-col px-4 py-3.5" style={{borderBottomWidth: 0.5, borderColor: '#D8D8D8'}}>
                <View className={"flex flex-row"}>
                    <View>
                        <Image style={styles.image} source={{uri: item.imageUrl}}></Image>
                    </View>
                    <View>
                        <View className="flex mt-4 ml-4">
                            <Text style={styles.cardName}>{item.name}</Text>
                            <Text style={styles.cardAddress}>{item.address}</Text>
                            <Text style={styles.cardPrice}>{item.price}</Text>
                            <View className="flex w-24 mt-2">
                                <DurationBadge value={item.duration}/>
                            </View>
                        </View>
                    </View>

                </View>

            </View>
        </Pressable>
    )
}

export default MyBillboardListItem


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
        marginVertical: 10,
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
