import React, { useState, useEffect } from 'react';

const SearchBar = () => {
  const [foods, setFoods] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredFoods = searchTerm ? foods.filter(food =>
    food.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    food.menu.some(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
  ) : foods;

  return (
    <div>
      <input
        type="text"
        placeholder="Search by food or item name"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <ul>
        {filteredFoods.map(food => (
          <li key={food.id}>
            <h3>{food.name}</h3>
            <p>{food.cuisine}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
