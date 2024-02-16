import React from 'react';


function ViewCartButton({ onClick, cartItemCount }) {
  return (
    <div className="view-cart-button-container">
      <button
        onClick={onClick}
        className="view-cart-button"
        aria-label="View Cart"
      >
        View Cart {cartItemCount > 0 && `(${cartItemCount})`}
      </button>
    </div>
  );
}

export default ViewCartButton;