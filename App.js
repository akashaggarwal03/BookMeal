import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { CenterScreen } from "./src/centers/screens/center.screen";
import { Text, View } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CenterInfo } from "./src/centers/components/center-info";
import { SafeArea } from "./src/utils/safe-area";
import Ionicons from "@expo/vector-icons/Ionicons";
const MapTab = () => (
  <SafeArea>
    <Text>Home</Text>
  </SafeArea>
);
const SettingsTab = () => (
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>
);

const TAB_ICON = {
  Centers: "restaurant",
  Map: "map",
  Settings: "settings",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => <Ionicons name={iconName} size={size} color={color} />,
  };
};

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={createScreenOptions}
            tabBarOptions={{
              activeTintColor: "blue",
              inactiveTintColor: "gray",
            }}
          >
            <Tab.Screen name="Centers" component={CenterScreen} />
            <Tab.Screen name="Map" component={MapTab} />
            <Tab.Screen name="Settings" component={SettingsTab} />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>

      <ExpoStatusBar style="auto" />
    </>
  );
}
