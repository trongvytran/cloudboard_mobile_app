import React from 'react';
import { Share, View, Button } from 'react-native';

  const onShare = async () => {
    try {
      const result = await Share.share({
        title: 'Billboard Title',
        message: 'Billboard Description',
        url: 'https://google.com.vn/',
        
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
  }

export default onShare;