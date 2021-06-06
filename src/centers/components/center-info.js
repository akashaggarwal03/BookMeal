import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import open from "../../../assets/open";
const Title = styled.Text`
  color: ${(props) => props.theme.colors.ui.error};
  font-size: ${(props) => props.theme.fontSizes.body};
`;

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const Address = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.caption};
`;
const CenterCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const CenterCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
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
    <CenterCard elevation={5}>
      <CenterCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <Address>{address}</Address>
        <View>{isOpennow && <SvgXml xml={open} height={50} width={50} />}</View>
      </Info>
    </CenterCard>
  );
};
