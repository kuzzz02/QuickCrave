import React, {createContext, useContext, useState} from 'react';
import {useEffect} from 'react';
import GoodsService from '../services/GoodsService';
import ImageService from '../services/ImageService';
import VendorService from '../services/VendorService';
import OrdersService from '../services/OrdersService';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({children}) => {
  const [goods, setGoods] = useState([]);
  const [counts, setCounts] = useState([]);
  const [goodsImages, setGoodsImages] = useState({});
  const [vendorsImages, setVendorsImages] = useState({});
  const [vendors, setVendors] = useState({});
  const [name, setName] = useState("");
  const [orderDetails, setOrderDetails] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [vendor, setVendor] = useState(null); 

  useEffect(() => {
    // Existing useEffect code for fetching vendor details and order details

    // Add your new useEffect here
    if (name) {
      VendorService.getByName(name)
        .then(response => {
          const vendorId = response.data.id;
          setVendor(response.data);
          const relevantOrders = orderDetails.filter(order => order.vendor_id === vendorId);
          setFilteredOrders(relevantOrders);
        })
        .catch(error => {
          console.error('Error fetching vendor details:', error);
          setVendor(null);
        });
    }
  }, [name, orderDetails]);

  useEffect(() => {
    const fetchVendorDetails = async () => {
      try {
        const goodsResponse = await GoodsService.getAll();
        const goodsData = goodsResponse.data;
        const goodsArray = Array.isArray(goodsData) ? goodsData : [goodsData];
        setGoods(goodsArray);
        setCounts(new Array(goodsData.length).fill(0));
  
        const goodsImagesPromises = goodsArray.map(async (good) => {
          const imageSrc = await ImageService.getGoodsImage(good.image);
          return { id: good.id, imageSrc };
        });
  
        const vendorResponse = await VendorService.getAll();
        const vendorData = vendorResponse.data;
        const vendorsArray = Array.isArray(vendorData) ? vendorData : [vendorData];
        setVendors(vendorsArray);
  
        const vendorImagesPromises = vendorsArray.map(async (vendor) => {
          const imageSrc = await ImageService.getVendorImage(vendor.portrait);
          return { id: vendor.id, imageSrc };
        });
  
        // Resolve all promises and update state once
        const goodsImages = await Promise.all(goodsImagesPromises);
        const vendorImages = await Promise.all(vendorImagesPromises);
  
        setGoodsImages(prevImages => ({
          ...prevImages,
          ...goodsImages.reduce((acc, { id, imageSrc }) => ({ ...acc, [id]: imageSrc }), {})
        }));
  
        setVendorsImages(prevImages => ({
          ...prevImages,
          ...vendorImages.reduce((acc, { id, imageSrc }) => ({ ...acc, [id]: imageSrc }), {})
        }));
  
      } catch (error) {
        console.error('Error fetching vendor details: ', error);
      }
    };

    

    
  
    const fetchOrderDetails = async () => {
      try {
        const ordersResponse = await OrdersService.getAll(); 
        const ordersData = ordersResponse.data;
        const ordersArray = Array.isArray(ordersData) ? ordersData : [ordersData];
        setOrderDetails(ordersArray);
        console.log('ordersArray:', ordersArray);
      } catch (error) {
        console.error('Error fetching order details:', error);
      }
    };
  
    // Call both fetch functions
    fetchVendorDetails();
    fetchOrderDetails();
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
        orderDetails,
        filteredOrders,
        setFilteredOrders,
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
