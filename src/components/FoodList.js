import React, { useState, useEffect } from "react";
import "./Foodlist.css";
import ViewCartButton from "./ViewCartButton";

function FoodList({ addToCart, setShowCart, cartItemCount }) {
  const handleAddToCart = (itemName, itemId, itemPrice) => {
    addToCart(itemName, itemId, itemPrice);
    alert(`Added ${itemName} @ $${itemPrice} to the cart!`);
  };
  const [foods, setFoods] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Fetch data from the provided URL
    fetch("https://mdishidatabase.vercel.app/foods")
      .then((response) => response.json())
      .then((data) => setFoods(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  // Filter foods based on search term
  const filteredFoods = searchTerm
    ? foods.filter(
        (food) =>
          food.name.toLowerCase().includes(searchTerm) ||
          food.menu.some((item) => item.name.toLowerCase().includes(searchTerm))
      )
    : foods;

  return (
    <div>
      <div className="view-cart-button-container">
        <ViewCartButton
          onClick={() => setShowCart(true)}
          cartItemCount={cartItemCount}
        />
      </div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by food or item name"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <div className="food-list">
        {filteredFoods.map((food) => (
          <div key={food.id} className="food-tile">
            <h2>{food.name}</h2>
            <p>Cuisine: {food.cuisine}</p>
            <p>Rating: {food.rating}</p>
            <div className="menu-items">
              {food.menu.map((item) => (
                <div key={item.id} className="menu-item">
                  <img src={item.imageUrl} alt={item.name} />
                  <div className="item-details">
                    <h3>{item.name}</h3>
                    <p>Price: ${item.price.toFixed(2)}</p>
                    <button
                      onClick={() =>
                        handleAddToCart(item.name, item.id, item.price)
                      }
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <a href={food.website} target="_blank" rel="noopener noreferrer">
              Visit Website
            </a>
          </div>
        ))}
        {filteredFoods.length === 0 && <p>No items found</p>}
      </div>
    </div>
  );
}

export default FoodList;
