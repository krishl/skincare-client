import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import configureStore from './store/configureStore';  
import { Provider } from 'react-redux'; 
import { loadProducts } from './actions/productActions'
import NavBar from './components/NavBar.js';
import Compare from './components/Compare.js';
import ProductsPage from './components/containers/ProductsPage.js';
import ProductShow from './components/containers/ProductShow.js';

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
              <NavBar />
              <hr/>
                <Route exact path="/" component={Compare}/>
                <Route path="/products" component={ProductsPage}/>
                  <Route path="/products/:id" component={ProductShow}/>
                <Route path="/ingredients" component={Ingredients}/>
            </div>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
