import React, { useContext } from "react";
import { FlatList } from "react-native";
import { SafeArea } from "../../utils/safe-area";
import { CenterInfo } from "../components/center-info";
import styled from "styled-components/native";
import { Spacer } from "../../components/spacer";
import { RestaurantsContext } from "../../services/centers/centers.context";
import { ActivityIndicator, Colors } from "react-native-paper";
import { Search } from "../../components/search.component";


const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;
const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;
export const CenterScreen = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.red800} />
        </LoadingContainer>
      )}
      <Search />
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <Spacer position="bottom" size="large">
              <CenterInfo center={item} />
            </Spacer>
          );
        }}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 16 }}
      />
    </SafeArea>
  );
};
