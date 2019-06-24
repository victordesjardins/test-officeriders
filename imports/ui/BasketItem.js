import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Basket } from '../api/basket.js';

// Task component - represents a single todo item
export default class Product extends Component {
  deleteThisItem() {
    Meteor.call('basket.remove', this.props.product._id)
  }

  render() {
    return (
      <div className="basket-item">
        {this.props.product.productDescription} x {this.props.product.quantity} : {parseInt(this.props.product.quantity) * this.props.product.price}€
        <button onClick={this.deleteThisItem.bind(this)}>
           &times;
         </button>
      </div>
    );
  }
}
