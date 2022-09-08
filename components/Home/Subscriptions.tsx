import {
    View,
    Text,
} from 'react-native'
import React from 'react'

const Subscriptions = ({data}: any) => {
    if (data.message !== "Customer not subscribed") {
        return (
            <View>
                <Text
                    style={{
                        fontWeight: '100',
                        flex: 1,
                        justifyContent: 'center',
                        alignContent: 'center',
                        margin: 90,
                    }}
                >
                    You have subscription
                </Text>
            </View>
        )
    } else {
        return (
            <View>
                <Text
                    style={{
                        fontWeight: '100',
                        flex: 1,
                        justifyContent: 'center',
                        alignContent: 'center',
                        margin: 90,
                    }}
                >
                    You have no subscription yet
                </Text>
            </View>
        )
    }
}
export default Subscriptions


