import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { GameScreen } from "./src/pages/GameScreen";
import { globalStyles } from "../Truco-Contador/src/global/style";
import { requestTrackingPermissionsAsync } from "expo-tracking-transparency";

export default function App() {
  useEffect(() => {
    (async () => {
      await requestTrackingPermissionsAsync();
    })();
  }, []);

  return (
    <View style={globalStyles.container}>
      <GameScreen />
      <StatusBar style="auto" />
    </View>
  );
}
