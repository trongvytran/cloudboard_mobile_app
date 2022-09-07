import React, {useEffect, useState} from 'react'
import ContainerView from '../components/Views/ContainerView'
import Subscription from '../components/Home/Subscription'
import axios from 'axios'
import {useSelector} from 'react-redux'
import TitleText from '../components/TitleText'
import LayoutView from '../components/Views/LayoutView'
import BaseUrl from '../constants/baseUrl'
import {Alert, Text, TouchableOpacity} from "react-native";
import baseUrl from "../constants/baseUrl";

const SubscriptionScreen = () => {


    const handleSubscribe = async () => {
        // if (!userLoginInfo) {
        //     Alert.alert(
        //         'Warning',
        //         'You need to login to subscribe. Continue?',
        //         [
        //             {
        //                 text: 'Cancel',
        //                 style: 'cancel',
        //             },
        //             {
        //                 text: 'OK',
        //                 onPress: () => {
        //                     navigation.navigate('My Profile' as never, {screen: 'ProfileScreen'} as never)
        //                 },
        //             },
        //         ]
        //     )
        // } else
            await axios.post(`${baseUrl}/api/subscriptions`,
            {
                "name": "basic",
                "status": "active"
            })
        // try{
        // await axios.post(`${baseUrl}/api/subscriptions/subscribe`,
        //     {
        //         userLoginInfo
        //     })}
        //     catch (e){
        //     throw new (e)
        // }
        // }
    }

const [data, setData] = useState([])
const {userLoginInfo} = useSelector((state: any) => state.userLoginInfo)
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
        } else{
            Alert.alert('No user logged in!')
        }
    }, [])
    return (
        <LayoutView>
            <ContainerView>
                <TitleText>Subscriptions</TitleText>
                {/*<Subscription data={data}/>*/}
                <TouchableOpacity
                    className={'py-4 flex justify-center items-center bg-cloudboard-orange w-full rounded-lg mt-4 mb-2'}
                    onPress={() => handleSubscribe()}
                >
                    <Text className={'text-white font-bold'}>SUBSCRIBE</Text>
                </TouchableOpacity>
            </ContainerView>
        </LayoutView>
    )
}

export default SubscriptionScreen
