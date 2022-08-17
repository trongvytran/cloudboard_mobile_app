import {
  View,
  Text,
} from 'react-native'
import React from 'react'

const Subscription: React.FC = ({ data }: any) => {
  if (data != undefined) {
    if (data.length == 0) {
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


