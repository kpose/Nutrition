import { combineReducers } from 'redux';

import recipesReducer from  './recipesReducer';
import nutritionReducer from './nutritionReducer';

const rootReducer = combineReducers({
    recipes: recipesReducer,
    nutrition: nutritionReducer,
});

export default rootReducer