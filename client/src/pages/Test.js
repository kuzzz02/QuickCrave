import React, {useState, useEffect} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import axios from 'axios';
import VendorService from '../services/VendorService';
import {get} from 'react-native/Libraries/TurboModule/TurboModuleRegistry';

const Test = () => {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const fetchVendorDetails = async () => {
      try {
        const response = await VendorService.getAll();
        console.log(Array.isArray(response.data));
        if (typeof response.data === 'string') {
          // 如果response.data是字符串，尝试手动解析
          setUserDetails(JSON.parse(response.data));
        } else {
          console.log('response.data:', response.data);
          // 正常情况，直接使用解析后的JSON对象
          // setUserDetails(response.data);
        }
      } catch (error) {
        console.error('Error when calling VendorService.getByName:', error);
        setUserDetails(null);
      }
    };
    fetchVendorDetails();
  }, []); // 依赖于 name，当 name 改变时重新执行 useEffect

  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>Email:</Text>
      <Text style={styles.text}>Phone: {userDetails.name}</Text>
      <Text style={styles.text}>Address: {userDetails.address}</Text>
      <Text style={styles.text}>State: {userDetails.state}</Text>
      <Text style={styles.text}>Date: {userDetails.date}</Text>
      <Text style={styles.text}>Description: {userDetails.description}</Text>
      <Text style={styles.text}>Category: {userDetails.category}</Text>
      <Text style={styles.text}>Time: {userDetails.time} minutes</Text>
      <Text style={styles.text}>Fee: ${userDetails.fee}</Text>
      <Text style={styles.text}>Quantity: {userDetails.quantity}</Text> */}
      {/* <Image
        source={{uri: `http://your-image-url/${userDetails.portrait}`}}
        style={styles.image}
      />
      <Image
        source={{uri: `http://your-image-url/${userDetails.image}`}}
        style={styles.image}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  text: {
    marginVertical: 5,
    fontSize: 16,
  },
  image: {
    width: 100,
    height: 100,
    marginVertical: 10,
  },
});

export default Test;
