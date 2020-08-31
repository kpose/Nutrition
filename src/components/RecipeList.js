import React from "react";
import { StyleSheet, Text, FlatList, ActivityIndicator } from "react-native";
import Recipe from "../components/Recipe";
import styled from "styled-components";

export default function RecipeList({ recipes }) {
  const renderRecipes = ({ item }) => {
    return <Recipe key={item.id} recipe={item} />;
  };
  return (
    <Container>
      <FlatList
        data={recipes}
        renderItem={renderRecipes}
        keyExtractor={(item) => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
}

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: white;
  align-items: center;
  justify-content: center;
`;
