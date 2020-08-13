import * as actions from '../actions/recipesAction';

const initialState = {
  loading: true,
  hasErrors: false,
  recipe: {},
};

export default function recipeReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_RECIPE:
      return {
        ...state,
        loading: true,
        hasErrors: false,
      };
    case actions.GET_RECIPE_SUCCESS:
      return {
        recipe: action.payload,
        loading: false,
        hasErrors: false,
      };

    case actions.GET_RECIPE_FAILURE:
      return {
        ...state,
        loading: false,
        hasErrors: true,
      };

    default:
      return state;
  }
}
