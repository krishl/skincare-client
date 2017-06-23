import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import configureStore from './store/configureStore';  
import { Provider } from 'react-redux'; 
import { loadProducts } from './actions/productActions'
import Compare from './components/Compare.js'


const store = configureStore();
store.dispatch(loadProducts());

const Products = () => (
  <div>
    <h2>Products</h2>
  </div>
)

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
            <div class="navbar">
              <div id="links">
                <Link to="/">Home</Link> 
                <Link to="/products">Products</Link>
                <Link to="/ingredients">Ingredients</Link>
              </div>
              <hr/>
                <Route exact path="/" component={Compare}/>
                <Route path="/products" component={Products}/>
                <Route path="/ingredients" component={Ingredients}/>
            </div>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
