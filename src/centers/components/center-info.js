import React from "react";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

export const CenterInfo = ({ center = {} }) => {
  const {
    name = "ABC",
    icon,
    photos = ["https://picsum.photos/700"],
    address = "Some street",
    isOpennow = true,
    rating = 4,
  } = center;

  return (
    <Card elevation={5} style={styles.card}>
      <Card.Cover key={name} source={{ uri: photos[0] }} style={styles.cover}/>

      <Text style={styles.title}>{name}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: { backgroundColor: "white" },
  cover: { padding: 20, backgroundColor: "white" },
  title: { padding: 16 },
});
