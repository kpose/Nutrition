import React, { useState, useEffect } from "react";
import { StyleSheet, Text, FlatList, ActivityIndicator } from "react-native";
import { connect } from "react-redux";
import { fetchRecipes } from "../redux/actions/recipeActions";
import RecipeList from "../components/RecipeList";
import Loading from "../components/Loading";
import Recipe from "../components/Recipe";
import styled from "styled-components";

const numOfColumns = 2;
const Home = () => {
  const url = `https://api.spoonacular.com/recipes/random?number=50&apiKey=bb4ffe1b2bfb4f498ad3fdc01de73ba5`;
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRecipes = async () => {
    const recipeData = await fetch(url);
    const { recipes } = await recipeData.json();
    setRecipes(recipes);
    setLoading(false);
  };
  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <Container>
      {loading ? <Loading></Loading> : <RecipeList recipes={recipes} />}
    </Container>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: white;
  align-items: center;
  justify-content: center;
`;
