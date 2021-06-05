import React from "react";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import { CenterInfo } from "../components/center-info";

export const CenterScreen = () => (
  <SafeAreaView style={styles.container}>
    <View styles={styles.search}>
      <Searchbar placeholder="Search Places" />
    </View>

    <View style={styles.list}>
      <CenterInfo />
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  list: {
    flex: 1,
    backgroundColor: "blue",
    padding: 16,
  },
  search: {
    padding: 16,
  },
});
