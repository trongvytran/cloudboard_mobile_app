import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ContainerView = ({ children }: any) => {
  return <ScrollView style={styles.container}>{children}</ScrollView>
}

export default ContainerView

const styles = StyleSheet.create({
  container: {
    paddingLeft: 16,
    paddingRight: 16,
  },
})
