import React from 'react';

function ViewCart({ cartItems, closeCart, removeFromCart }) {
  const itemsWithPrices = cartItems.filter(item => item.price && typeof item.price === 'number');

  const totalPrice = itemsWithPrices.reduce((total, item) => total + item.price, 0);

  const handleRemove = (itemId) => {
    removeFromCart(itemId);
  };

  return (
    <div>
      <h2>Cart Items</h2>
      <ul>
        {itemsWithPrices.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price.toFixed(2)}
            <button onClick={() => handleRemove(item.id)}>X</button>
          </li>
        ))}
      </ul>
      <p>Total Price: ${totalPrice.toFixed(2)}</p>
      <button onClick={closeCart}>Close Cart</button>
    </div>
  );
}

export default ViewCart;
