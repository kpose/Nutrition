import * as actions from '../actions/recipeActions'

export const initialState = {
    recipes: [],
    loading: false,
    hasErrors: false,
}

export default function recipeReducer( state=initialState, action ) {
    switch (action.type) {
        case actions.GET_RECIPES:
            return {
                ...state,
                loading: true
            }
        case actions.GET_RECIPES_SUCCESS:
            return {
                recipes: action.payload,
                loading: false,
                hasErrors: false
            }
        case actions.GET_RECIPES_FAILURE:
            return {
                ...state,
                loading: false,
                hasErrors: true
            }
        default:
            return state
    }
}