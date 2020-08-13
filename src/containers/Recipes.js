import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  FlatList,
  ActivityIndicator
} from 'react-native';
import { connect } from 'react-redux';
import { fetchRecipes } from '../redux/actions/recipeActions';
import { Recipe } from '../components/Recipe';
import styled from 'styled-components';

const numOfColumns = 2;
const Recipes = ({ loading, hasErrors, recipes, dispatch }) => {
  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  const extractKey = ({ id }) => id;

  const renderRecipes = ({ item }) => {
    if (loading) {
      return  <ActivityIndicator size="large" color="#00ff00" />
    } else if (hasErrors) {
      return <Text>Unable to display posts.</Text>;
    } else {
      return <Recipe key={item.id} recipe={item} />;
    }
  };

  return (
    <Container>
      <FlatList
        data={recipes}
        renderItem={renderRecipes}
        keyExtractor={extractKey}
        refreshing={true}
        numColumns={numOfColumns}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};

const mapStateToProps = (state) => ({
  loading: state.recipes.loading,
  recipes: state.recipes.recipes,
  hasErrors: state.recipes.hasErrors,
});

export default connect(mapStateToProps)(Recipes);

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: white;
  align-items: center;
  justify-content: center;
`;