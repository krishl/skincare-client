import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProductsList = ({ products }) => {  
  const renderProducts = products.map(product => 
    <Link key={product.id} to={`/products/${product.id}`}>{product.name}</Link>
  );
  return (
    <div>
      {renderProducts}
    </div>
  );
};

ProductsList.propTypes = {  
  products: PropTypes.array.isRequired
};

export default ProductsList;