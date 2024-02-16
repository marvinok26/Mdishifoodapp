import React from 'react';

function ViewCartButton({ onClick, cartItemCount }) {
  return (
    <div className="view-cart-button-container">
      <button onClick={onClick} className="view-cart-button">
        View Cart {cartItemCount > 0 && `(${cartItemCount})`}
      </button>
    </div>
  );
}

export default ViewCartButton;
