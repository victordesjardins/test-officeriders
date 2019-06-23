import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import { Basket } from '../api/basket.js';
import BasketItem from './BasketItem.js';

class BasketList extends Component {
  renderBasket() {
    return this.props.basket.map((product) => (
      <BasketItem key={product._id} product={product} />
    ));
  }

  render() {
    return (
      <div className="basket">
        {this.renderBasket()}
      </div>
    )
  }
}

export default withTracker(() => {
  return {
    basket: Basket.find({}).fetch(),
  };
})(BasketList);
