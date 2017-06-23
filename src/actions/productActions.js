import productApi from '../api/productApi';

export function loadProducts() {  
  return function(dispatch) {
    return productApi.getAllPRoducts().then(products => {
      dispatch(loadProductsSuccess(products));
    }).catch(error => {
      throw(error);
    });
  };
}