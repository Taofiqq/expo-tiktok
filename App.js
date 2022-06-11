import React, { useState, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Button,
  TouchableWithoutFeedback,
  SafeAreaView,
} from "react-native";
import { Video, AVPlaybackStatus } from "expo-av";
import video from "./assets/vid.mov";

const { width, height } = Dimensions.get("window");
export default function App() {
  const [status, setStatus] = useState({});
  const [paused, setPaused] = useState(true);
  const vid = useRef(null);

  // console.log(status.isPlaying);
  const onPausePlay = () => {
    setPaused(!paused);
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <p>tiktok</p>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    width: width,
    height: height - 45,
  },
  video: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  button: {},
});
