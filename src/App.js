import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import FoodList from './FoodList';
import ViewCart from './ViewCart';

function App() {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  const addToCart = (itemName, itemId, itemPrice) => {
    const newItem = { name: itemName, id: itemId, price: itemPrice };
    setCartItems([...cartItems, newItem]);
    console.log(`Added ${itemName} (ID: ${itemId}, Price: ${itemPrice}) to cart`);
  };

  const removeFromCart = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
  };

  const closeCart = () => {
    setShowCart(false);
  };

  const cartItemCount = cartItems.length;

  useEffect(() => {
    // Fetch data from the API
    fetch('https://mdishidatabase.vercel.app/foods')
      .then((response) => response.json())
      .then((data) => {
        setFoods(data);
        setLoading(false);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <h1>Welcome to Our Food App</h1>
      </header>
      <main>
        {!showCart ? (
          <FoodList
            foods={foods}
            addToCart={addToCart}
            setShowCart={setShowCart}
            cartItemCount={cartItemCount}
            loading={loading}
          />
        ) : (
          <ViewCart cartItems={cartItems} closeCart={closeCart} removeFromCart={removeFromCart} />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;

