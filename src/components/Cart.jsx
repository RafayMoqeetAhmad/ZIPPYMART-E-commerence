
import React from 'react';

function Cart({ cart, setCart, setView }) {
  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? <p>Your cart is empty.</p> : (
        cart.map(item => (
          <div key={item.id} className="cart-item">
            <p>{item.name} - ${item.price}</p>
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </div>
        ))
      )}
      <p className="total">Total: ${total}</p>
      <button onClick={() => setView('checkout')} disabled={cart.length === 0}>Proceed to Checkout</button>
    </div>
  );
}

export default Cart;