import {StyleSheet, Text, ScrollView, View} from 'react-native'
import {CardField, CardForm, useStripe} from '@stripe/stripe-react-native';
import React, {useState} from 'react'
import ContainerView from '../components/Views/ContainerView'
import Colors from '../constants/color'

const PaymentMethodScreen = () => {
    const [cardDetails, setCardDetails] = useState('')
    const {confirmPayment} = useStripe();
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
                    onCardChange={(cardDetails) => {
                        setCardDetails(cardDetails)
                    }}
                    onFocus={(focusedField) => {
                        console.log('focusField', focusedField);
                    }}
                />
            </View>
            <Text className={`mx-4 mt-3 text-lg font-bold`}>Existing methods</Text>
            
        </ScrollView>
    )
}

export default PaymentMethodScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.layoutColor,
    },
})
