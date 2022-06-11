import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, SafeAreaView } from "react-native";
import Home from "./src/screens/Home";

export default function App() {
  return (
    <SafeAreaView>
      <View>
        <Home />
      </View>
      {/* <StatusBar style="auto" /> */}
    </SafeAreaView>
  );
}
