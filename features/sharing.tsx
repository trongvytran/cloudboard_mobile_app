
import { Share } from "react-native";
const onShare = async () => {

    try {
      const result = await Share.share({
        title: items.address,
        message: items.description,
        // url:,
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

  export default onShare