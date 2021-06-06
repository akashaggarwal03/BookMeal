import React from "react";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import { CenterInfo } from "../components/center-info";
import styled from "styled-components/native";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
`;
const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;
const CenterinfoContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;

export const CenterScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar />
    </SearchContainer>
    <CenterinfoContainer>
      <CenterInfo />
    </CenterinfoContainer>
  </SafeArea>
);
