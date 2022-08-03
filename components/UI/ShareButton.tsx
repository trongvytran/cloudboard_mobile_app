import React from 'react'
import { Share, StyleSheet, TouchableOpacity } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'

const ShareButton = (data: any) => {
  const onShare = async () => {
    try {
      const result = await Share.share(
        {
          title: data.value.address,
          message: data.value.description,
          url: 'https://google.com.vn',
        },
        {
          excludedActivityTypes: [],
        }
      )
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message)
    }
  }
  return (
    <TouchableOpacity className="flex items-center justify-center w-12 h-12 mr-2 rounded-full bg-gray-900/60" onPress={() => onShare()}>
      <Ionicons name="share-outline" size={24} color="white" />
    </TouchableOpacity>
  )
}

export default ShareButton
