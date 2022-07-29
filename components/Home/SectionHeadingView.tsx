import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../constants/color'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

interface SectionHeadingProps {
  name: string
}

const SectionHeading = ({ name }: SectionHeadingProps) => {
  const navigation = useNavigation()
  return (
    <View style={styles.sectionHeading}>
      <Text style={styles.sectionHeadingName}>{name}</Text>
      <TouchableOpacity onPress={() => navigation.navigate('SeeMoreBillboardListScreen')}>
        <Text style={styles.sectionHeadingSeeMore}>See more</Text> 
      </TouchableOpacity>
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
