import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom'
import configureStore from './store/configureStore';  
import { Provider } from 'react-redux'; 
import { loadProducts } from './actions/productActions'
import Compare from './components/Compare.js'
import ProductsPage from './components/containers/ProductsPage.js'

const store = configureStore();
store.dispatch(loadProducts());

const Ingredients = () => (
  <div>
    <h2>Ingredients</h2>
  </div>
)

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="text">Luminance</h1>
        <Provider store={store}>
          <Router>
            <div className="navbar">
              <div className="links">
                <NavLink exact to="/" activeClassName="active">Home</NavLink> 
                <NavLink to="/products" activeClassName="active">Products</NavLink>
                <NavLink to="/ingredients" activeClassName="active">Ingredients</NavLink>
              </div>
              <hr/>
                <Route exact path="/" component={Compare}/>
                <Route path="/products" component={ProductsPage}/>
                <Route path="/ingredients" component={Ingredients}/>
            </div>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
