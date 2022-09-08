import {StyleSheet, Text, ScrollView, View, TouchableOpacity, Linking, Alert} from 'react-native'
import {CardField, useStripe} from '@stripe/stripe-react-native';
import React, {useEffect, useLayoutEffect, useRef, useState} from 'react'
import Colors from '../constants/color'
import {useNavigation} from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import axios from 'axios';
import baseUrl from "../constants/baseUrl";
import {useDispatch, useSelector} from "react-redux";
import {addUserCreditCard} from '../features/userCreditCard'

const PaymentMethodsScreen = () => {
    const navigation = useNavigation()
    const {userLoginInfo} = useSelector((state: any) => state.userLoginInfo)
    const stripe = useStripe();
    const stripeCustomerId = userLoginInfo.stripeCustomerId
    const dispatch = useDispatch()

    useLayoutEffect(() =>
        navigation.setOptions({
            headerTitle: 'Payment Information',
            headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons
                        name="ios-arrow-back-outline"
                        size={30}
                        color={Colors.primaryColor}
                        style={{marginLeft: 10, marginRight: 10}}
                    />
                </TouchableOpacity>
            ),
        })
    )

    useEffect(() => {
    })

    const getPaymentMethodId = async () => {
        const stripeResponse = await stripe?.createPaymentMethod({
            type: 'Card',
        });
        const {error, paymentMethod} = stripeResponse;
        if (error || !paymentMethod) {
            return console.error('Error occurred!');
        }
        return paymentMethod.id
    }

   

    const manage = async () => {
        await axios.post(`${baseUrl}/api/transactions/portal`, {
                stripeCustomerId
            }
        )
            .then((res) => {
                Linking.openURL(res.data.url).catch(err => console.error("Couldn't load page", err));
            })

    }
    const postCreditCard = async () => {
        const paymentMethodId = await getPaymentMethodId();

        if (!paymentMethodId) {
            return Alert.alert('Unable to process payment method.');
        }
        try {
            await axios.post(`${baseUrl}/api/transactions/credit-cards`, {
                    paymentMethodId,
                    stripeCustomerId
                }
            ).then(() => Alert.alert('Payment added successfully!'))
        } catch (e) {
            throw new Error(`Error occured: ${e}`)
        }
    }

    const setDefault = async (paymentMethodId) => {
        await axios.post(`${baseUrl}/api/transactions/default`, {
            paymentMethodId,
            stripeCustomerId
            
        }
        ).then(res =>{console.log(res.data)}
        )

    }

    const getPaymentMethods = async () => {
        const stripeCustomerId = userLoginInfo.stripeCustomerId
        await axios.get(`${baseUrl}/api/transactions/credit-cards/${stripeCustomerId}`,
        ).then((res) => setUserCreditCards(res.data.data))
    }


    const [cardDetails, setCardDetails] = useState([])
    const [userCreditCard, setUserCreditCards] = useState([])

    useEffect(() => {
        getPaymentMethods()
   
    })

    return (
        <ScrollView style={styles.container}>
            <Text className={`mx-4 mt-3 text-lg font-bold`}>Add new methods</Text>
            <View className={`px-4`}>
                <CardField
                    postalCodeEnabled={false}
                    placeholder={{
                        number: '1234 5678 9764 9999',
                    }}
                    cardStyle={{
                        backgroundColor: '#FFFFFF',
                        borderColor: '#000000',
                        borderWidth: 1,
                        textColor: '#000000',
                        textErrorColor: '#f81111'
                    }}
                    style={{
                        width: '100%',
                        height: 50,
                        marginVertical: 10,
                    }}
                    onCardChange={
                        setCardDetails
                    }
                />
            </View>
            <View className={'flex flex-row justify-center mx-5 mt-0.5'}>
                <TouchableOpacity className={'px-2 py-3.5 w-1/2 mr-2 bg-blue-600 rounded-lg'}
                                  onPress={() => manage()}>
                    <Text className={'text-white align-middle text-center font-bold text-lg'}>MANAGE</Text>
                </TouchableOpacity>
                <TouchableOpacity className={'px-2 py-3.5 w-1/2 bg-red-600 rounded-lg'}
                                  onPress={() => postCreditCard()}>
                    <Text className={'text-white align-middle text-center font-bold text-lg'}>SUBMIT</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text className={`mx-4 mt-3 text-lg font-bold`}>Existing methods</Text>

                        {userCreditCard.map(( index,i) => {
                        return (
                    <>
                    <Text>Card {i+1}</Text>
                    <Text>Brand: {userCreditCard[i].card.brand}</Text>
                    <Text>Last 4: {userCreditCard[i].card.last4}</Text>
                    <Text>Expire Month : {userCreditCard[i].card.exp_month}</Text>
                    <Text>Expire Year : {userCreditCard[i].card.exp_year}</Text>
                    <Text>Expire Year : {userCreditCard[i].id}</Text>
                    <TouchableOpacity className={'px-2 py-3.5 w-1/2 bg-red-600 rounded-lg'}
                                  onPress={() => setDefault(userCreditCard[i].id)}>
                    <Text className={'text-white align-middle text-center font-bold text-lg'}>Set as default</Text>
                    </TouchableOpacity>

                    </>
                    //     <CardField  key={i}
                    //     postalCodeEnabled={false}
                    //     placeholder={{
                    //         number: '**** **** **** ****  '+ userCreditCard[i].card.last4,
                    //         expiration:""+userCreditCard[i].card.exp_month + "/" + userCreditCard[i].card.exp_year
                    //     }}
                    //     cardStyle={{
                    //         backgroundColor: '#FFFFFF',
                    //         borderColor: '#000000',
                    //         borderWidth: 1,
                    //         textColor: '#000000',
                    //         textErrorColor: '#f81111'
                    //     }}
                    //     style={{
                    //         width: '100%',
                    //         height: 50,
                    //         marginVertical: 10,
                    //     }}
                    // />
                        )
                       }
                        )}



                {/*<Text className={'mx-auto text-gray-400 my-10'}>{cardDetails}</Text>*/}
            </View>
        </ScrollView>
    )
}

export default PaymentMethodsScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.layoutColor,
    },
})
