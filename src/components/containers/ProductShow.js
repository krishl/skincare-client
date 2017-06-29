import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const ProductShow = ({ product }) => {
  return (
    <div>
      <h3>Name: {product.name}</h3>
      Product: {product.brand}
    </div>
  );
}

ProductShow.propTypes = {  
  product: PropTypes.object.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  const product = state.products.find(product => product.id === ownProps.match.params.productId)
  
  if (product) {
    return { product }
  } else {
    return { product: {} }
  }
}

export default connect(mapStateToProps)(ProductShow);