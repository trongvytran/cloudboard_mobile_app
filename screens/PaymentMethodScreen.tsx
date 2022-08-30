import {StyleSheet, Text, ScrollView, View, TouchableOpacity} from 'react-native'
import {CardField, CardForm, useStripe} from '@stripe/stripe-react-native';
import React, {useState} from 'react'
import ContainerView from '../components/Views/ContainerView'
import Colors from '../constants/color'

const PaymentMethodScreen = () => {
    const [cardDetails, setCardDetails] = useState('')
    const secretKey = 'sk_test_51LcObsCml2Mz1p9rLENL5bDoJVbiHxmoxLLVFLqrJQp4kvzw6qZfvdIjLPYwf6PE0U8u70WTEAZ993qvf0bcMtCr00WaaKVaiA'
    const {confirmPayment} = useStripe()
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
                    onCardChange={() => {
                        setCardDetails(cardDetails)
                    }}
                    onFocus={(focusedField) => {
                        console.log('focusField', focusedField);
                    }}
                />
            </View>
            <View className={'px-4 mt-0.5'}>
                <TouchableOpacity className={'px-1.5 py-2.5 bg-red-600 rounded-lg'}
                                  onPress={() => confirmPayment(secretKey)}>
                    <Text className={'text-white align-middle text-center font-bold text-lg'}>SUBMIT</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text className={`mx-4 mt-3 text-lg font-bold`}>Existing methods</Text>
                <Text className={'mx-auto text-gray-400 my-10'}>Work In Progress..</Text>
            </View>
        </ScrollView>
    )
}

export default PaymentMethodScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.layoutColor,
    },
})
