import React, { Component } from 'react';
import ProductList from './ProductList.js';
import BasketList from './Basket.js';

class App extends Component {
  render() {
    return (
      <div className="container">
        <header>
          <div className="banner">
            <h1>Sunny Shop : Toutes ce qu'il vous faut pour l'été</h1>
          </div>
        </header>
        <div className="flex">
          <ProductList />
          <BasketList />
        </div>
      </div>
    );
  }
}

export default App
