import {
    View,
    Text,
} from 'react-native'
import React from 'react'

const Subscription = ({data}: any) => {
    if (data !== undefined) {
        if (data.status !== '404' ) {
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
                    <View>

                    </View>
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
                        You have subscription
                    </Text>
                </View>
            )
        }
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
                    Log in to view subscription
                </Text>
            </View>
        )
    }
}
export default Subscription


