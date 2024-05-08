import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [foodCategories, setFoodCategories] = useState([
    { id: 1, name: 'Chicken Burger', image: require('../common/goods5.png'), description: '200 gr chicken + cheese Lettuce + tomato', restaurant: 'McDonald\'s', price: 10.99 },
    { id: 2, name: 'Cheese Burger', image: require('../common/goods8.png'), description: '200 gr chicken + cheese Lettuce + tomato', restaurant: 'McDonald\'s', price: 11.99 },
    { id: 3, name: 'Beef Burger', image: require('../common/goods7.png'), description: '200 gr chicken + cheese Lettuce + tomato', restaurant: 'McDonald\'s', price: 12.99 }
  ]);
  const [counts, setCounts] = useState(new Array(3).fill(0));

  const handleIncrease = (index) => {
    const newCounts = [...counts];
    newCounts[index] += 1;
    setCounts(newCounts);
  };

const handleDecrease = (index) => {
    const newCounts = [...counts];
    if (newCounts[index] > 0) {
      newCounts[index] -= 1;
    }
    setCounts(newCounts);
  };

const calculateTotal = () => {
    let total = 0;
    counts.forEach((count, index) => {
        total += count * foodCategories[index].price;
    });
    return total;
    };

  return (
    <CartContext.Provider value={{ foodCategories, counts, handleIncrease, handleDecrease, setCounts, calculateTotal }}>
      {children}
    </CartContext.Provider>
  );
};