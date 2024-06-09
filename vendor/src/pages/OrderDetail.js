import React, { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet, Image, Dimensions, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  Icon,
  IconButton,
  BottomNavigation,
} from 'react-native-paper';
import BottomNav from './BottomNav';
import { useCart } from './CartContext';
import VendorService from '../services/VendorService';
import GoodsService from '../services/GoodsService';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />;
const { width, height } = Dimensions.get('window');

const OrderDetail = () => {
  const navigation = useNavigation();

  const { name, filteredOrders } = useCart(); 
  const [vendor, setVendor] = useState([]);

  useEffect(() => {
    if (name) {
      VendorService.getByName(name)
        .then(response => {
          const vendorId = response.data.id;
          setVendor(response.data);
        })
        .catch(error => {
          console.error('Error fetching vendor details:', error);
          setVendor(null);
        });
    }
  }, [name]);

  return (
    <View style={styles.container}>
      <View style={styles.tt}>
      <Text style={styles.title}>
        {vendor.name}
      </Text>
      <Text style={styles.title1}>
        <Icon source="map-marker" color="#06C168" size={0.057 * width} />
        {vendor.address}
      </Text>
      </View>
      <ScrollView style={styles.scrollView}>
        {filteredOrders.map(order => (
          <Card key={order.id} style={{ margin: 8, elevation: 4 }}>
            <Card.Content>
              <Title style={styles.t1}>Order #{order.id}</Title>
              <Paragraph>Date: {order.date}</Paragraph>
              <Paragraph>Total: €{order.total}</Paragraph>
              <Paragraph>Address: {order.address}</Paragraph>
              <Paragraph>Payment: {order.payment}</Paragraph>
              <Paragraph>State: {order.state}</Paragraph>
              <Paragraph>Phone: {order.phone}</Paragraph>
            </Card.Content>
          </Card>
        ))}
      </ScrollView>
      <BottomNav />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 0.05 * width,
  },
  scrollView: {
    marginBottom: 70,
    flex: 1,
  },
  tt:{
    height: 0.15 * height,
   },
  title: {
    marginTop: 0.03 * height,
    marginLeft: 0.02 * width,
    fontSize: 22,
    color: 'black',
    fontFamily: 'AlimamaShuHeiTi-Bold',
  },
  title1: {
    marginLeft: 0.02 * width,
    marginTop: 0.01 * height,
    fontSize: 22,
    color: 'black',
    fontFamily: 'AlimamaShuHeiTi-Bold',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: width * 0.04,
    marginTop: 0.02 * height,
  },
  imageD: {
    marginTop: -0.05 * height,
  },
  subtitle: {
    fontSize: 25,
    fontFamily: 'AlimamaShuHeiTi-Bold',
  },
  orderCard: {
    marginTop: -0.02 * height,
  },
  orderCard1: {
    marginTop: 0.01 * height,
    flexDirection: 'row',
    marginTop: 0.024 * height,
    width: width * 0.9,
    height: 0.185 * height,
  },
  item: {
    width: 0.377 * width,
    marginLeft: 0.02 * width,
  },
  t1: {
    fontSize: 20,
    fontFamily: 'AlimamaShuHeiTi-Bold',
    color: 'black',
  },
  date: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  foodName: {
    fontSize: 20,
    fontFamily: 'AlimamaShuHeiTi-Bold',
    color: 'black',
    // marginTop: 0.013 * height,
  },
  date1: {
    position: 'absolute',
    left: 120,
    fontSize: 15,
    fontFamily: 'AlimamaShuHeiTi-Bold',
    color: 'black',
    // marginTop: 0.013 * height,
    marginLeft: 0.04 * width,
  },
  foodRestaurant: {
    fontSize: 18,
    fontFamily: 'AlimamaShuHeiTi-Bold',
    color: '#C5C5C5',
    marginTop: 0.013 * height,
  },
  foodPrice: {
    fontSize: 20,
    fontFamily: 'AlimamaShuHeiTi-Bold',
    color: '#06c168',
    marginTop: 0.013 * height,
  },
  foodAddress: {
    fontSize: 20,
    fontFamily: 'AlimamaShuHeiTi-Bold',
    color: '#06c168',
    marginTop: 0.013 * height,
  },
  foodImage: {
    width: 0.234 * width,
    height: 0.12 * height,
    marginLeft: 0.02 * width,
    borderRadius: 8,
  },
  bottom: {
    position: 'absolute',
    right: 0,
    left: -width * 0.05,
    flexDirection: 'row',
    bottom: 0,
    height: 70,
    width: width,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconButton1: {
    marginLeft: 0.05 * width,
    color: '#06C168',
  },
  iconButton2: {
    marginRight: 0.05 * width,
  },
});

export default OrderDetail;
