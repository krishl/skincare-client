import React from 'react';  
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';  
import * as productActions from '../../actions/productActions';
import ProductsList from '../ProductsList';
import ProductShow from './ProductShow';
import {StyleSheet, css} from 'aphrodite-jss';

const sheet = StyleSheet.create({
  primary: {
    maxHeight: '500px',
    backgroundColor: 'white',
    opacity: '.8',
    margin: 'auto',
    padding: '20px',
    '&:hover': { opacity: '.95' }
  },
  content: {
    opacity: '1'
  }
})

const ProductsPage = ({ match, products }) =>
  <div className={css(sheet.primary)}>
    <div className={css(sheet.primary)}>
      <ProductsList products={products} />
      <Route path={`${match.url}/:productId`} component={ProductShow}/>
      <Route exact path={match.url} render={() => (
        <h3>Products Index</h3>
    )}/>
    </div>
  </div>

ProductsPage.propTypes = {
  products: PropTypes.array.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    products: state.products
  }
} 

export default connect(mapStateToProps)(ProductsPage); 