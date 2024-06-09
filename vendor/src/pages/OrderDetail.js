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
  const [goodsName, setGoodsName] = useState([]);
  const [goodsNames, setGoodsNames] = useState({});

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

  useEffect(() => {
    if (filteredOrders && filteredOrders.length > 0) {
      filteredOrders.forEach((order) => {
        order.goods_id.split(',').forEach(item => {
          const [id, quantity] = item.split(':');
          // 获取每个商品的详细信息
          GoodsService.getById(id)
            .then(response => {
              // 更新商品名称映射
              setGoodsNames(prevNames => ({ ...prevNames, [id]: response.data.name }));
            })
            .catch(error => {
              console.error(`Failed to fetch details for Goods ID: ${id}`, error);
            });
        });
      });
    }
  }, [filteredOrders]);
  





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
          {order.goods_id.split(',').map((item, index) => {
            const [id, count] = item.split(':');
            return (
              <React.Fragment key={index}>
                <Paragraph>
                  <Text style={styles.label}>Goods_ID: </Text>
                  <Text style={styles.content}>{id}</Text>
                </Paragraph>
                <Paragraph>
                  <Text style={styles.label}>Goods_Name: </Text>
                  <Text style={styles.content}>{goodsNames[id] || 'Loading...'}</Text>
                </Paragraph>
                <Paragraph>
                  <Text style={styles.label}>Count: </Text>
                  <Text style={styles.content}>{count}</Text>
                </Paragraph>
              </React.Fragment>
            );
          })}
          <Paragraph>
            <Text style={styles.label}>Date: </Text>
            <Text style={styles.content}>{order.date}</Text>
          </Paragraph>
          <Paragraph>
            <Text style={styles.label}>Total Pay: </Text>
            <Text style={styles.content}>€{order.total}</Text>
          </Paragraph>
          <Paragraph>
            <Text style={styles.label}>User Address: </Text>
            <Text style={styles.content}>{order.address}</Text>
          </Paragraph>
          <Paragraph>
            <Text style={styles.label}>Payment: </Text>
            <Text style={styles.content}>{order.payment}</Text>
          </Paragraph>
          <Paragraph>
            <Text style={styles.label}>Order State: </Text>
            <Text style={styles.content}>{order.state}</Text>
          </Paragraph>
          <Paragraph>
            <Text style={styles.label}>User Phone Number: </Text>
            <Text style={styles.content}>{order.phone}</Text>
          </Paragraph>
        </Card.Content>
      </Card>
      ))}
      </ScrollView>
      <BottomNav/>
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
  label: {
    fontFamily: 'AlimamaShuHeiTi-Bold',
    fontSize: 16,
  },
  content: {
    fontSize: 16,
    color: 'black',
    marginBottom: 4,
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
