import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Basket } from '../api/basket.js';

// Task component - represents a single todo item
export default class Product extends Component {
  addToBasket() {
    const productDescription = this.props.product.text;
    const quantity = document.getElementById(this.props.product._id).value;
    document.getElementById(this.props.product._id).value = "1";
    const isPresent = Basket.find({productDescription: this.props.product.text}).count()
    if (isPresent === 0) {
      Meteor.call('basket.insert', productDescription, quantity, this.props.product.price);
    } else {
      const basketItem = Basket.find({productDescription: this.props.product.text}).fetch()[0];
      const oldQuantity = parseInt(basketItem.quantity);
      const newQuantity = oldQuantity + parseInt(quantity);
      Meteor.call('basket.updateQuantity', basketItem._id, newQuantity)
    }
  }

  render() {
    return (
      <div className="product-card">
        <div className="product-img" style={{ backgroundImage: `url(${this.props.product.photo_url})` }}>
        </div>
        <div className="product-infos">
          <div className="product-description">
            {this.props.product.text}
          </div>
          <div className="product-price">
            {this.props.product.price}€
          </div>
        </div>
        <div className="basket-info">
          <div className="quantity-infos">
            <label>Quantité</label>
            <input
              id={this.props.product._id}
              type="number"
              ref="textInput"
              defaultValue="1"
            />
          </div>
          <button onClick={this.addToBasket.bind(this)}>
            Ajouter au panier
          </button>
        </div>
      </div>
    );
  }
}
