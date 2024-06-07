import React, {createContext, useContext, useState} from 'react';
import {useEffect} from 'react';
import GoodsService from '../services/GoodsService';
import ImageService from '../services/ImageService';
import VendorService from '../services/VendorService';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({children}) => {
  const [goods, setGoods] = useState([]);
  const [counts, setCounts] = useState([]);
  const [images, setImages] = useState({});
  const [vendors, setVendor] = useState({});

  useEffect(() => {
    const fetchVendorDetails = async () => {
      try {
        const goodsResponse = await GoodsService.getAll();
        const goodsData = goodsResponse.data;
        const goodsArray = Array.isArray(goodsData) ? goodsData : [goodsData];
        setGoods(goodsArray);
        setCounts(new Array(goodsData.length).fill(0));

        goodsArray.forEach(async (good) => {
          const imageSrc = await ImageService.getGoodsImage(good.image); 
          setImages(prevImages => ({
            ...prevImages,
            [good.id]: imageSrc
          }));
        });

      

      } catch (error) {
        console.error('Error fetching user details: ', error);
      }
    };

    fetchVendorDetails();
  }, []);

  
 

  const handleIncrease = index => {
    const newCounts = [...counts];
    newCounts[index] += 1;
    setCounts(newCounts);
  };

  const handleDecrease = index => {
    const newCounts = [...counts];
    if (newCounts[index] > 0) {
      newCounts[index] -= 1;
    }
    setCounts(newCounts);
  };

  const calculateTotal = () => {
    let total = 0;
    counts.forEach((count, index) => {
      total += count * Number(goods[index].price);
    });
    return total;
  };




  return (
    <CartContext.Provider
      value={{
        goods,
        counts,
        images,
        vendors,
        handleIncrease,
        handleDecrease,
        setCounts,
        calculateTotal,
      }}>
      {children}
    </CartContext.Provider>
  );
};
