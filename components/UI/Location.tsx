import React, { useState, useCallback, useRef } from "react";
import { Button, View, Alert, Platform } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

import { WebView } from 'react-native-webview';
function Location({ data }: any) {
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);
  console.log(data)
  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);
  return Platform.OS === "web" ? (
    <iframe src={data} height={'100%'} width={'100%'} />
  ) : (
    <View style={{ flex: 1 }}>
      <WebView
        source={{ uri: data }}
        style={{marginTop: 22, flex: 1}}
      />
    </View>
  )
}

export default Location;


