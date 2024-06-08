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
  const [goodsImages, setGoodsImages] = useState({});
  const [vendorsImages, setVendorsImages] = useState({});
  const [vendors, setVendors] = useState({});
  const [name, setName] = useState("");

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
          setGoodsImages(prevImages => ({
            ...prevImages,
            [good.id]: imageSrc
          }));
        });

        const vendorsResponse = await VendorService.getAll();
        const vendorsData = vendorsResponse.data;
        const vendorsArray = Array.isArray(vendorsData) ? vendorsData : [vendorsData];
        setVendors(vendorsArray);

        vendorsArray.forEach(async (vendor) => {
          const imageSrc = await ImageService.getVendorImage(vendor.portrait);
          setVendorsImages(prevImages => ({
            ...prevImages,
            [vendor.id]: imageSrc
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
        goodsImages,
        vendorsImages,
        vendors,
        name,
        handleIncrease,
        setName,
        handleDecrease,
        setCounts,
        calculateTotal,
      }}>
      {children}
    </CartContext.Provider>
  );
};
