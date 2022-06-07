import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../constants/color'

interface SectionHeadingProps {
  name: string
}

const SectionHeading = ({ name }: SectionHeadingProps) => {
  return (
    <View style={styles.sectionHeading}>
      <Text style={styles.sectionHeadingName}>{name}</Text>
      <Text style={styles.sectionHeadingSeeMore}>See more</Text>
    </View>
  )
}

export default SectionHeading

const styles = StyleSheet.create({
  sectionHeading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 4
  },
  sectionHeadingSeeMore: {
    color: Colors.primaryColor,
  },
  sectionHeadingName: {
    fontSize: 18,
    fontWeight: '700',
  },
})
