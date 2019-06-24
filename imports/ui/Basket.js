import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import { Basket } from '../api/basket.js';
import BasketItem from './BasketItem.js';

class BasketList extends Component {
  basketPrice() {
    let sum = 0
    Basket.find({}).forEach((basket) => {
      sum = sum + basket.price * parseInt(basket.quantity)
    })
    return sum
  }

  renderBasket() {
    if (Basket.find({}).count() === 0) {
      return <p>Votre panier est vide</p>
    } else {
      return this.props.basket.map((product) => (
        <BasketItem key={product._id} product={product} />
      ));
    }
  }

  render() {
    return (
      <div className="basket">
        <h3>Mon panier</h3>
        <div className="basket-content">
          {this.renderBasket()}
        </div>
        <div className="total-price">
          <strong>TOTAL : {this.basketPrice()}€</strong>
        </div>
      </div>
    )
  }
}

export default withTracker(() => {
  return {
    basket: Basket.find({}).fetch(),
  };
})(BasketList);
