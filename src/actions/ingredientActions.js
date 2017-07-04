import * as types from './actionTypes';  
import ingredientApi from '../api/ingredientApi';

export function loadIngredientsSuccess(ingredients) {  
  return {type: types.LOAD_INGREDIENTS_SUCCESS, ingredients};
}

export function loadIngredients() {  
  return function(dispatch) {
    return ingredientApi.getAllIngredients().then(ingredients => {
      dispatch(loadIngredientsSuccess(ingredients));
    }).catch(error => {
      throw(error);
    });
  };
}