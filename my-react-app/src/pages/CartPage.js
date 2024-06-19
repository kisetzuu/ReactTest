import React from 'react';
import Cart from '../components/Cart';
import './CartPage.css';

function CartPage() {
  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      <Cart />
    </div>
  );
}

export default CartPage;
