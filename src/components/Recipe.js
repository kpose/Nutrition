import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import styled from "styled-components";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);

let screenWidthh = screenWidth / 2;

function Recipe({ recipe }) {
  const navigation = useNavigation();
  return (
    <Container>
      <TouchableOpacity
        onPress={() => navigation.navigate("RecipeDetailsScreen", { recipe })}
      >
        <Cover>
          <Image source={{ uri: recipe.image }} />
        </Cover>
      </TouchableOpacity>

      <Content>
        <Title>{recipe.title}</Title>
      </Content>

      <Contents>
        <Feather name="clock" size={16} color="green" />

        <PriceCaption>{recipe.readyInMinutes} mins</PriceCaption>
      </Contents>

    </Container>
  );
}

export default Recipe;

const Container = styled.View`
  background: #fff;
  height: 250px;
  width: 180px;
  border-radius: 14px;
  margin: 10px;
  margin-top: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
`;

const Cover = styled.View`
  width: 100%;
  height: 150px;
  border-radius: 14px;
  overflow: hidden;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
`;

const Content = styled.View`
  padding-top: 10px;
  flex-direction: column;
  align-items: center;
  height: 60px;
`;

const Contents = styled.View`
  flex-direction: row;

  align-items: center;
  justify-content: center;
`;

const Title = styled.Text`
  color: #3c4560;
  font-size: 16px;
  font-weight: 800;
`;

const PriceCaption = styled.Text`
  color: #b8b3c3;
  font-size: 15px;
  font-weight: 600;
  margin-top: 4px;
`;
