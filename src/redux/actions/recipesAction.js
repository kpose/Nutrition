export const GET_RECIPE = 'GET_RECIPE';
export const GET_RECIPE_SUCCESS = 'GET_RECIPE_SUCCESS';
export const GET_RECIPE_FAILURE = 'GET_RECIPE_FAILURE';

export const getRecipe = () => ({
  type: GET_RECIPE,
});

export const getRecipeSuccess = (recipe) => ({
  type: GET_RECIPE_SUCCESS,
  payload: recipe,
}); 

export const getRecipeFailure = () => ({
  type: GET_RECIPE_FAILURE,
});

export function fetchRecipe(id) {
  return async (dispatch) => {
    dispatch(getRecipe());

    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=bb4ffe1b2bfb4f498ad3fdc01de73ba5`
      );
      const data = await response.json();
      dispatch(getRecipeSuccess(data));
    } catch (error) {
      dispatch(getRecipeFailure());
    }
  };
}
