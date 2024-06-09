import React, {useState, useEffect} from 'react';
import {View, ScrollView, StyleSheet, Image, Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  Avatar,
  Button,
  Card,
  TouchableOpacity,
  Text,
  Title,
  Paragraph,
  Icon,
  IconButton,
  BottomNavigation,
} from 'react-native-paper';
import BottomNav from './BottomNav';
import {useCart} from './CartContext';
import VendorService from '../services/VendorService';
import GoodsService from '../services/GoodsService';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />;

const {width, height} = Dimensions.get('window');

const OrderDetail = () => {

  const {orderDetails, goodsImages} = useCart();


  const navigation = useNavigation();

  const [vendors, setVendors] = useState([]);

  const [goods, setGoods] = useState([]);

  useEffect(() => {
    if (orderDetails.vendor_id) {
      VendorService.getById(orderDetails.vendor_id)
        .then(response => {
          setVendors(response.data);
        })
        .catch(error => {
          console.error('获取用户详情失败', error);
          setVendors({}); 
        });
    }
  }, [orderDetails.vendor_id]);

  useEffect(() => {
    if (orderDetails.goods_id) {
      GoodsService.getById(orderDetails.goods_id)
        .then(response => {
          setGoods(response.data);
        })
        .catch(error => {
          console.error('获取用户详情失败', error);
          setGoods({}); 
        });
    }
  }, [orderDetails.goods_id]);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.ScrollView}>
      {orderDetails.map((order, index) => (
        <TouchableOpacity key={order.id} onPress={() => navigation.navigate('OrderDetail', { orderId: order.id })}>
          <Card style={styles.card}>
            <Card.Title title={`Order #${order.id}`} subtitle={`Total: €${order.total}`} />
            <Card.Content>
              <Text>Date: {order.date}</Text>
              <Text>Address: {order.address}</Text>
              {/* 其他你想展示的订单信息 */}
            </Card.Content>
          </Card>
        </TouchableOpacity>
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
  ScrollView: {
    flex: 1,
    // marginBottom: 160,
    // backgroundColor: 'red',
  },
  title: {
    marginTop: 0.026 * height,
    marginHorizontal: width * 0.01,
    fontSize: 20,
    fontWeight: 'bold',
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
