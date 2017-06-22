import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Compare from './components/Compare.js'

const UserProducts = () => (
  <div>
    <h2>My Products</h2>
  </div>
)

const UserIngredients = () => (
  <div>
    <h2>My Ingredients</h2>
  </div>
)

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="text">Luminance</h1>
        <Router>
          <div class="navbar">
            <div id="links">
              <Link to="/">Compare</Link> 
              <Link to="/users/:userId/products">My Products</Link>
              <Link to="/users/:userId/ingredients">My Ingredients</Link>
            </div>
            <hr/>
              <Route exact path="/" component={Compare}/>
              <Route path="/users/:userId/products" component={UserProducts}/>
              <Route path="/users/:userId/ingredients" component={UserIngredients}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
