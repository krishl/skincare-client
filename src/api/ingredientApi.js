export default class ingredientApi {  
  static getAllIngredients() {
    return fetch('http://localhost:3001/api/v1/ingredients').then(response => {
      return response.json()
    }).catch(error => {
      return error
    });
  }
};