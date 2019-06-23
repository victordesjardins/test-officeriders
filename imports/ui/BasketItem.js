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
      <li>
        {this.props.product.productDescription} x {this.props.product.quantity}
        <button onClick={this.deleteThisItem.bind(this)}>
           &times;
         </button>
      </li>
    );
  }
}
