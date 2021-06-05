import React from "react";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

const Title = styled.Text`
  padding: 16px;
`;

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
      <Card.Cover key={name} source={{ uri: photos[0] }} style={styles.cover} />

      <Title>{name}</Title>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: { backgroundColor: "white" },
  cover: { padding: 20 },
  title: { padding: 16 },
});
