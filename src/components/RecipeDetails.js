import React from 'react';
import { StyleSheet, Text, View, Button,TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';



function RecipeDetails({ recipe }) {
  //const navigation = useNavigation();
  return (
    <Container>
    <Image source={{ uri: recipe.image }} />
       <Title>{recipe.title}</Title>
       <PriceCaption>{recipe.summary}</PriceCaption>
       
        
    </Container>
  );
};

export default RecipeDetails;

const Container = styled.View`
  flex: 1;
  background: #fff;
  align-items: center;
  justify-content: center;

`;

const Cover = styled.View`
  width: 100%;
  height: 120px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  overflow: hidden;
`;

const Image = styled.Image`
  width: 70%;
  height: 70%;
`;

const Content = styled.View`
  padding-top: 10px;
  flex-direction: column;
  align-items: center;
  height: 60px;
`;

const Title = styled.Text`
  color: #3c4560;
  font-size: 18px;
  font-weight: 600;
  align-items: center;
  justify-content: center;
`;

const PriceCaption = styled.Text`
  color: #b8b3c3;
  font-size: 15px;
  font-weight: 600;
  margin-top: 4px;
`;
