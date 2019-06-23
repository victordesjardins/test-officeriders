import React, { Component } from 'react';
import ProductList from './ProductList.js';
import BasketList from './Basket.js';

class App extends Component {
  render() {
    return (
      <div className="container">
        <header>
          <h1>SUNSTREAM</h1>
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
