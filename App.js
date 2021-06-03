import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { CenterScreen } from "./src/centers/screens/center.screen";

export default function App() {
  return (
    <>
      <CenterScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}
