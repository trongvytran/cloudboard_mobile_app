import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Colors from '../../constants/color'

interface ProfileCardProps {
  name: string
  email: string
  imageSource: string
}

const ProfileCard = ({ name, email, imageSource }: ProfileCardProps) => {
  return (
    <View style={styles.profileContainer}>
      <Image style={styles.profileAvatar} source={{ uri: imageSource }} />
      <View>
        <Text style={styles.profileTitle}>{name}</Text>
        <Text style={styles.profileSubtitle}>{email}</Text>
      </View>
    </View>
  )
}

export default ProfileCard

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },
  profileAvatar: {
    borderRadius: 9999,
    height: 46,
    width: 46,
    marginRight: 16,
  },
  profileTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4.5,
  },
  profileSubtitle: {
    fontSize: 14,
    color: Colors.textColor,
  },
})
