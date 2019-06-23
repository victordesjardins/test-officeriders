import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import { Products } from '../api/products.js';
import Product from './Product.js';

class ProductList extends Component {
  renderProducts() {
    return this.props.products.map((product) => (
      <Product key={product._id} product={product} />
    ));
  }

  render() {
    return (
      <div className="product-list">
        <div className="row">
          {this.renderProducts()}
        </div>
      </div>
    )
  }
}

export default withTracker(() => {
  return {
    products: Products.find({}).fetch(),
  };
})(ProductList);
