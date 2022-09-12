import {StyleSheet, Text, ScrollView, View, TouchableOpacity, Linking, Alert} from 'react-native'
import {CardField, useStripe} from '@stripe/stripe-react-native';
import React, {useCallback, useEffect, useLayoutEffect, useRef, useState} from 'react'
import Colors from '../constants/color'
import {useNavigation} from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import axios from 'axios';
import{ BASE_URL } from "../constants/endpoints";
import {useDispatch, useSelector} from "react-redux";
import {addUserCreditCard} from '../features/userCreditCard'
import {PaymentIcon} from 'react-native-payment-icons'

const PaymentMethodsScreen = () => {
    const navigation = useNavigation()
    const {userLoginInfo} = useSelector((state: any) => state.userLoginInfo)
    const {userCreditCard} = useSelector((state: any) => state.userCreditCard)
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

    // const manage = async () => {
    //     await axios.post(`${baseUrl}/api/transactions/portal`, {
    //             stripeCustomerId
    //         }
    //     )
    //         .then((res) => {
    //             Linking.openURL(res.data.url).catch(err => console.error("Couldn't load page", err));
    //         })
    //
    // }

    const postCreditCard = async () => {
        const paymentMethodId = await getPaymentMethodId();

        if (!paymentMethodId) {
            return Alert.alert('Unable to process payment method.');
        }
        try {
            await axios.post(`${BASE_URL}/api/transactions/credit-cards/${stripeCustomerId}`, {
                    paymentMethodId,
                    stripeCustomerId
                }
            ).then(() => Alert.alert('Payment added successfully!'))
        } catch (e) {
            throw new Error(`Error occured: ${e}`)
        }
    }

    const setDefault = async (paymentMethodId) => {
        await axios.post(`${BASE_URL}/api/transactions/default`, {
                paymentMethodId,
                stripeCustomerId
            }
        ).then(res => {
                console.log(res.data)
            }
        )

    }
    const emptyPaymentMethod = () => {
        return (<View>
            <Text>No Payment Method Found.</Text>
        </View>)
    }

    useEffect(() => {
        const getPaymentMethods = async () => {
            await axios.get(`${BASE_URL}/api/transactions/credit-cards/${stripeCustomerId}`,
            ).then((res) => dispatch(addUserCreditCard(res.data.data)))
        }
        getPaymentMethods().catch(console.error)
    }, [])

    return (
        <ScrollView style={styles.container}>
            <Text className={`mx-4 mt-3 text-lg font-bold`}>Add new methods</Text>
            <View className={`px-4`}>
                <CardField
                    postalCodeEnabled={false}
                    placeholder={{
                        number: '•••• •••• •••• 1234',
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
                />
            </View>
            <View className={'flex flex-row justify-center mx-4 mt-0.5'}>
                <TouchableOpacity className={'px-2 py-3.5 w-full bg-red-600 rounded-lg'}
                                  onPress={() => postCreditCard()}>
                    <Text className={'text-white align-middle text-center font-bold text-lg'}>SUBMIT</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text className={`mx-4 mt-3 text-lg font-bold`}>Existing methods</Text>
                {userCreditCard.map((index, i) => {
                        return (
                            <View className={'mx-4 mt-3 mb-2 p-4'} style={{borderBottomWidth: 0.5, borderBottomColor: 'gray'}} key={i}>
                                <View className={'flex flex-row justify-between'}>
                                    <View className={'flex flex-row mt-2'}>
                                        <PaymentIcon height={30} type={userCreditCard[i].card.brand}></PaymentIcon>
                                        <Text className={'text-lg ml-4 font-semibold'}>•••• ••••
                                            •••• {userCreditCard[i].card.last4}</Text>
                                    </View>
                                    <TouchableOpacity>
                                        <Ionicons className={'items-end'} size={20} color={'gray'} name={'close'}/>
                                    </TouchableOpacity>
                                </View>
                                <View className={'flex justify-center items-end my-2'}>
                                    <Text className={'text-lg'}><Text className={'font-bold'}>Exp.
                                        Date:</Text> {userCreditCard[i].card.exp_month}/{userCreditCard[i].card.exp_year}
                                    </Text>
                                </View>
                                <View className={'items-end'}>
                                    <TouchableOpacity className={'px-1 py-2 mt-2 bg-sky-600 rounded-lg w-1/3'}
                                                      onPress={() => setDefault(userCreditCard[i].id)}>
                                        <Text className={'text-white align-middle text-center font-bold text-md'}>SET
                                            DEFAULT</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )
                    }
                )
                }


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
