import { Text, View, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import Colors from '../../constants/color'
import Ionicons from '@expo/vector-icons/Ionicons'

interface ProfileItemProps {
  title: string
  subtitle: string,
  onPress: () => void
}

const ProfileItem = ({ title, subtitle, onPress }: ProfileItemProps) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      <Ionicons style={styles.icon} name="ios-chevron-forward" size={20} />
    </Pressable>
  )
}

export default ProfileItem

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1.4,
    borderColor: Colors.borderColor,
    paddingBottom: 17,
    paddingTop: 17,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 11,
    color: Colors.textColor,
  },
  icon: {
    color: Colors.textColor,
  },
})
