import React, {useEffect, useState} from 'react'
import ContainerView from '../components/Views/ContainerView'
import Subscriptions from '../components/Home/Subscriptions'
import axios from 'axios'
import {useSelector} from 'react-redux'
import TitleText from '../components/TitleText'
import LayoutView from '../components/Views/LayoutView'
import BaseUrl from '../constants/baseUrl'
import {Alert, Animated, ImageBackground, Text, TouchableOpacity, View, Image} from "react-native";
import baseUrl from "../constants/baseUrl";
import Ionicons from "@expo/vector-icons/Ionicons";
import {LinearGradient} from "expo-linear-gradient";
import Colors from "../constants/color";
import {useStripe} from "@stripe/stripe-react-native";

const SubscriptionsScreen = () => {
    const [data, setData] = useState([])
    const stripe = useStripe()
    const {userLoginInfo} = useSelector((state: any) => state.userLoginInfo)

    const AnimatedImageBackground =
        Animated.createAnimatedComponent(LinearGradient)


    useEffect(() => {
        if (userLoginInfo !== null) {
            axios
                .get(`${BaseUrl}/api/subscriptions/get-sub/${userLoginInfo.stripeCustomerId}`, {
                    headers: {Authorization: `Bearer ${userLoginInfo}`},
                })
                .then((res) => {
                    setData(res.data)
                    console.log(data);
                })
        } else {
            Alert.alert('No user logged in!')
        }
    }, [])

    return (
        <AnimatedImageBackground className={'h-screen'} source={require('../assets/img/cloudboard_background.png')}
                                 resizeMode={'cover'} colors={['rgba(255, 138, 0, 1)', Colors.primaryColor]}
                                 start={[0.4, 0.2]}
                                 end={[0.5, 1]}
        >
            <View className={'my-10 px-4'}>
                <View className={'py-24'}>
                    <Text className={'font-bold text-white text-3xl text-center'}>Let Cloudboard</Text>
                    <Text className={'font-bold text-white text-3xl text-center'}> <Text className={'italic underline'}>Scale
                        Up</Text> Your Place!</Text>
                </View>
                <View>
                    <TouchableOpacity className={' flex flex-row bg-white rounded-lg py-6 my-3 shadow'}>
                        <View className={'flex'}>
                            <View className={'flex flex-row'}>
                                <View className={'ml-5 mr-3 my-3'}>
                                    <Ionicons name={'add-circle'} size={32} color={'orange'}></Ionicons>
                                </View>
                                <View>
                                    <View className={'flex flex-row'}>
                                        <Text className={'font-bold text-3xl'}>Plus</Text>
                                    </View>
                                    <Text className={'text-xl'}>$4.99/month</Text>
                                </View>
                            </View>
                            <View className={'ml-5 mt-2'}>
                                <View className={'mt-2'}>
                                    <Text className={'italic font-semibold'}>
                                        What includes?
                                    </Text>

                                    <View className={'flex flex-row my-1 ml-2'}>
                                        <Ionicons name={'checkmark'} size={14}/>
                                        <Text className={'ml-1 italic'}>20 billboard posts</Text>
                                    </View>
                                    <View className={'flex flex-row ml-2'}>
                                        <Ionicons name={'checkmark'} size={14}/>
                                        <Text className={'ml-1 italic'}>30-day plan</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity className={' flex flex-row bg-white rounded-lg py-6 mt-2 shadow'}>
                        <View className={'flex'}>
                            <View className={'flex flex-row'}>
                                <View className={'ml-5 mr-3 my-3'}>
                                    <Ionicons name={'star'} size={32} color={'orange'}></Ionicons>
                                </View>
                                <View>
                                    <Text className={'font-bold text-3xl'}>Premium</Text>
                                    <Text className={'text-xl'}>$9.99/month</Text>
                                </View>
                            </View>
                            <View className={'ml-5 mt-2'}>
                                <View className={'mt-2'}>
                                    <Text className={'italic font-semibold'}>
                                        What includes?
                                    </Text>
                                    <View className={'flex flex-row my-1 ml-2 '}>
                                        <Ionicons name={'checkmark'} size={14}/>
                                        <Text className={'ml-1 italic'}>40 billboard posts</Text>
                                    </View>
                                    <View className={'flex flex-row ml-2 italic'}>
                                        <Ionicons name={'checkmark'} size={14}/>
                                        <Text className={'ml-1 italic'}>60-day plan</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </AnimatedImageBackground>
    )
}

export default SubscriptionsScreen
