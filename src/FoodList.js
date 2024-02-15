import React from 'react';
import './Foodlist.css'; 
import ViewCartButton from './ViewCartButton'; 

function FoodList({ foods, addToCart, setShowCart, cartItemCount }) {

  const handleAddToCart = (itemName, itemId, itemPrice) => {
    addToCart(itemName, itemId, itemPrice);
    alert(`Added ${itemName} to the cart!`);
  };

  return (
    <div>
      <div className="view-cart-button-container">
        <ViewCartButton onClick={() => setShowCart(true)} cartItemCount={cartItemCount} />
      </div>
      <div className="food-list">
        {foods.map(food => (
          <div key={food.id} className="food-tile">
            <h2>{food.name}</h2>
            <p>Cuisine: {food.cuisine}</p>
            <p>Rating: {food.rating}</p>
            <div className="menu-items">
              {food.menu.map(item => (
                <div key={item.id} className="menu-item">
                  <img src={item.imageUrl} alt={item.name} />
                  <div className="item-details">
                    <h3>{item.name}</h3>
                    <p>Price: ${item.price.toFixed(2)}</p>
                    <button onClick={() => handleAddToCart(item.name, item.id, item.price)}>Add to Cart</button>
                  </div>
                </div>
              ))}
            </div>
            <a href={food.website} target="_blank" rel="noopener noreferrer">Visit Website</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FoodList;
