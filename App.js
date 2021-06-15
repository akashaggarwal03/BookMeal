import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { CenterScreen } from "./src/centers/screens/center.screen";
import { Text, View } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeArea } from "./src/utils/safe-area";
import Ionicons from "@expo/vector-icons/Ionicons";
import { RestaurantsContextProvider } from "./src/services/centers/centers.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { MapScreen } from "./src/components/Map/map.screen";

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
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <NavigationContainer>
              <Tab.Navigator
                screenOptions={createScreenOptions}
                tabBarOptions={{
                  activeTintColor: "blue",
                  inactiveTintColor: "gray",
                }}
              >
                <Tab.Screen name="Centers" component={CenterScreen} />
                <Tab.Screen name="Map" component={MapScreen} />
              </Tab.Navigator>
            </NavigationContainer>
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </ThemeProvider>

      <ExpoStatusBar style="auto" />
    </>
  );
}
