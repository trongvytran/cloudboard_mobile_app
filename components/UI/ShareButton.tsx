import React from 'react'
import { Share, StyleSheet, TouchableOpacity } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'

const ShareButton = (data: any) => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        title: data.value.address,
        message: data.value.description,
        url:'https://google.com.vn'
      },
      {
        excludedActivityTypes: [

        ]
      });
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
      alert(error.message);
    }
  };
  return (
    <TouchableOpacity style={styles.share} onPress={() => onShare()}>
              <Ionicons name="share-outline" size={24} color="white"/>
    </TouchableOpacity>
  );
};

export default ShareButton;

const styles = StyleSheet.create({
    share: {
        marginLeft: 15,
        backgroundColor: 'black',
        opacity: 0.6,
        padding: 10,
        borderRadius: 9999,
        marginRight: 5,
      }
})