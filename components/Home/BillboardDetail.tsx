import {View, Text, Image, TouchableOpacity, Alert, ScrollView} from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import MapView, {Marker} from 'react-native-maps'
import DurationBadge from '../UI/DurationBadge'
import React, {useLayoutEffect} from 'react'
import ReadMore from 'react-native-read-more-text'
import {useNavigation} from '@react-navigation/native'
import ShareButton from '../UI/ShareButton'
import {useSelector} from 'react-redux'
import baseUrl from "../../constants/baseUrl";
import axios from "axios";
import moment from "moment";
const BillboardDetail = ({item}: any) => {
    const navigation = useNavigation()
    const {userLoginInfo} = useSelector((state: any) => state.userLoginInfo)

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <TouchableOpacity
                    className="flex items-center justify-center w-12 h-12 mt-4 ml-4 rounded-full bg-gray-900/60"
                    onPress={() => navigation.navigate('HomeScreen' as never)}
                >
                    <Ionicons name="arrow-back-outline" size={24} color="white"/>
                </TouchableOpacity>
            ),
            headerRight: () => (
                <View className="flex flex-row items-center mt-4 mr-4">
                    <ShareButton value={item}/>
                    {/* <LikeButton value={item} /> */}
                </View>
            ),

        })
    }, [navigation])

    const handleContact = () => {
        if (!userLoginInfo) {
            Alert.alert(
                'Warning',
                'You need to login to display contact information. Continue?',
                [
                    {
                        text: 'Cancel',
                        style: 'cancel',
                    },
                    {
                        text: 'OK',
                        onPress: () => {
                            navigation.navigate('My Profile' as never, {screen: 'ProfileScreen'} as never)
                        },
                    },
                ]
            )
        } else navigation.navigate('ContactScreen' as never)
    }

    const handleSubscribe = async () => {
        if (!userLoginInfo) {
            Alert.alert(
                'Warning',
                'You need to login to subscribe. Continue?',
                [
                    {
                        text: 'Cancel',
                        style: 'cancel',
                    },
                    {
                        text: 'OK',
                        onPress: () => {
                            navigation.navigate('My Profile' as never, {screen: 'ProfileScreen'} as never)
                        },
                    },
                ]
            )
        } else 
            {            const periodStart =  new Date()
                const msdiff = item.duration.replace(" months", '');
                const periodEnd = moment(periodStart).add(msdiff, 'month');
            await axios.post(`${baseUrl}/api/subscriptions`,
            {
                "name": item.name,
                "status": "active",
                "periodStart": periodStart,
                "periodEnd": periodEnd,
            })
            .then((res) => {
                console.log(res)
            })
        }
    }
    const Subscribe = () => {
        const stripeCustomerId = 'cus_MLom7df9sRBBTG'
        axios.post(`http://192.168.1.9:3000/api/subscriptions/subscribe`, {
            stripeCustomerId
        }
      
        )
        .then((res) => {
            console.log(res)
        })
      };
    return (
        <ScrollView>
            <Image className="w-full aspect-[4/3]" source={{uri: item.imageUrl}}/>
            <View className="p-4">
                <View className="flex flex-row items-center justify-between mb-2">
                    <Text className="text-xl font-bold tracking-tight text-gray-900">
                        {item.name}
                    </Text>
                    <DurationBadge value={item.duration}/>
                </View>
                <Text className="mb-2 text-gray-700">{item.address}</Text>
                <Text className="text-lg font-medium text-amber-500">{item.price}</Text>
                <Text className="my-2 text-lg font-bold">Description</Text>
                <ReadMore
                    numberOfLines={2}
                    renderTruncatedFooter={_renderTruncatedFooter}
                    renderRevealedFooter={_renderRevealedFooter}
                >
                    {item.description}
                </ReadMore>
                {/*<TouchableOpacity*/}
                {/*    className={'py-4 flex justify-center items-center bg-cloudboard-orange w-full rounded-lg mt-4 mb-2'}*/}
                {/*    onPress={() => handleSubscribe()}*/}
                {/*>*/}
                {/*    <Text className={'text-white font-bold'}>SUBSCRIBE</Text>*/}
                {/*</TouchableOpacity>*/}
                <View className="flex flex-row items-center justify-between mt-2 mb-6">
                    <View className="flex flex-row items-center">
                        <Image
                            className="w-10 h-10 rounded-full"
                            source={{uri: item.user.imageUrl}}
                        />
                        <Text className="ml-3 font-medium">{item.user.name}</Text>
                    </View>
                    <TouchableOpacity
                        onPress={handleContact}
                        className="px-4 py-2 font-medium border-2 rounded-lg border-amber-500"
                    >
                        <Text className="font-medium text-amber-500">CONTACT</Text>
                    </TouchableOpacity>
                </View>
                <View className="w-full aspect-[4/3] rounded-lg shadow">
                    <MapView
                        region={{
                            latitude: item.lat,
                            longitude: item.long,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                        className="w-full h-full rounded-lg"
                    >
                        <Marker coordinate={{latitude: item.lat, longitude: item.long}}/>
                    </MapView>
                    {/* <TouchableOpacity
                         onPress={Subscribe}
                        >
                        <Text >
                            Subscribe
                        </Text>
                        </TouchableOpacity> */}
                </View>
            </View>
        </ScrollView>
    )
}

const _renderTruncatedFooter = (handlePress) => {
    return (
        <View className="items-center justify-center pt-4">
            <Text className="text-amber-500" onPress={handlePress}>
                Read more
            </Text>
        </View>
    )
}

const _renderRevealedFooter = (handlePress) => {
    return (
        <View className="items-center justify-center pt-4">
            <Text className="text-amber-500" onPress={handlePress}>
                Close
            </Text>
        </View>
    )
}

export default BillboardDetail
