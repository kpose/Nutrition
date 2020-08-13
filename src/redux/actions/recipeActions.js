export const GET_RECIPES = 'GET_RECIPES'
export const GET_RECIPES_SUCCESS = 'GET_RECIPES_SUCCESS'
export const GET_RECIPES_FAILURE = 'GET_RECIPES_FAILURE'


export const getRecipes = () => ({
    type: GET_RECIPES,
});

export const getRecipesSuccess = (recipes) => ({
    type: GET_RECIPES_SUCCESS,
    payload: recipes
});

export const getRecipesFailure = () => ({
    type: GET_RECIPES_FAILURE,
});


export function fetchRecipes() {
    return async dispatch => {
        dispatch(getRecipes())

        try{
            const response = await fetch("https://api.spoonacular.com/recipes/random?number=50&apiKey=bb4ffe1b2bfb4f498ad3fdc01de73ba5")
            const info = await response.json()
            const data = info.recipes
            /* console.log(dat) */

            dispatch(getRecipesSuccess(data))
        } catch (error) {
            dispatch(getRecipesFailure())
        }
    }
}
