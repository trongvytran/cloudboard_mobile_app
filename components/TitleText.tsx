import React from 'react'
import { StyleSheet, Text } from 'react-native'

const TitleText = ({ children }: any) => {
  return <Text style={styles.title}>{children}</Text>
}

export default TitleText

const styles = StyleSheet.create({
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    marginTop: 29,
    width: "auto",
    marginBottom: 14,
    textTransform: 'capitalize'
  },
})
