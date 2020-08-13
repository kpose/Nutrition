import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import styled from 'styled-components';
import { Button } from 'react-native-elements';


const RecipeDetailsScreen = ({route}) => { 
  const {recipe} = route.params;
  return (
    <View style={styles.container}>
    <Cover>
        <Image source={{ uri: recipe.image }} />
      </Cover>
      <Title>{recipe.title}</Title>
    {}
    <Text>{recipe.summary}</Text>
    <Button
  title="VIEW INGREDIENTS"
  type="solid"
/>
    </View>
  );
};
 



export default RecipeDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  image: {
    
  }
});


const Cover = styled.View`
  width: 100%;
  height: 300px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  border-bottom-right-radius: 14px;
  border-bottom-left-radius: 14px;
  overflow: hidden;
  background-color: red;
  
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
`;

const Title = styled.Text`
  color: #3c4560;
  font-size: 28px;
  font-weight: 900;
  margin-top: 15px;
  margin-bottom: 30px;
  padding: 15px;
`;
