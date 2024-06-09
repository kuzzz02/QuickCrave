import React from 'react';
import {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, View, Text, Dimensions, Alert} from 'react-native';
import {Button, IconButton, Icon} from 'react-native-paper';
import OrdersService from '../services/OrdersSerivce';
import {useCart} from './CartContext';
import alipay from '../middleware/alipay';
import { NativeModules } from 'react-native';
import UserService from '../services/UserService';

const {width, height} = Dimensions.get('window');

const Pay = ({ route }) => {
  const { total } = route.params;
  const { vendor } = route.params;
  const navigation = useNavigation();
  const { goods, counts, name } = useCart();
  const [user, setUser] = useState({});

  useEffect(() => {
    if (name) {
      UserService.getByName(name)
        .then(response => {
          setUser(response.data);
        })
        .catch(error => {
          console.error('Failed to fetch user details', error);
          setUser({});
        });
    }
  }, [name]);

  const createOrder = async (paymentType) => {
    const today = new Date().toISOString().split('T')[0];
    const random_OrderID = generateRandomString(16);

    const selectedGoods = goods.filter((item, index) => counts[index] > 0);

    const goodsIdsCounts = selectedGoods.map((item, index) => `${item.id}:${counts[goods.indexOf(item)]}`).join(',');

    const goodsIds = goods.map((item, index) =>{});
    console.log(goodsIds);

    const order = await OrdersService.create({
      orders_id: random_OrderID,
      goods_id: goodsIdsCounts,
      user_id: user.id,
      vendor_id: vendor.id,
      delivery_id: 1111, 
      state: 'Ordered',
      date: today,
      address: user.address,
      phone: user.phone,
      payment: paymentType,
      total: total}
    )
    .then(response => {
      orderIFO = response.config.data;
      // console.log("111",orderIFO)
      alipay.pay(orderIFO)
      .then(res => {
        console.log(res.data)
        NativeModules.Alipay.pay(res.data)
        .then(response => {
          setTimeout(() => {
            navigation.navigate('Track', { vendor });
          }, 1000);
        })
      })
      .catch(error => {
        console.log('Failed to place order:', error);
      });
    })
    .catch(error =>{
      console.log('Failed to place order:', error);
      Alert.alert('Order error', 'Failed to place the order, please try again');
    });
  };

  const handleWechatPayPress = () => {
    createOrder('WechatPay');
  };

  const handleAliPayPress = () => {
    createOrder('AliPay');
  };

  function generateRandomString(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const digits = '0123456789';
    for (let i = 0; i < length; i++) {
      const charactersPool = Math.random() < 0.9 ? digits : characters;
      result += charactersPool.charAt(Math.floor(Math.random() * charactersPool.length));
    }
    return result;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>You have to pay</Text>
        <Text style={styles.text2}>€{total}</Text>
        <Button
          style={styles.button1}
          onPress={handleAliPayPress}
          labelStyle={{fontSize: 16}}
          mode="contained">
          <Text
            style={{
              fontFamily: 'AlimamaShuHeiTi-Bold',
              fontSize: 22,
              lineHeight: 0.053 * height,
            }}>
            Alipay
          </Text>
        </Button>
        <Button
          //   icon={source={require('../common/alipay.png')}}
          style={styles.button2}
          labelStyle={{fontSize: 16}}
          onPress={handleWechatPayPress}
          mode="contained">
          <Text
            style={{
              fontFamily: 'AlimamaShuHeiTi-Bold',
              fontSize: 22,
              lineHeight: 0.053 * height,
            }}>
            Wechat
          </Text>
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: width * 0.05,
  },
  header: {
    alignSelf: 'center',
    width: width * 0.8,
    height: height * 0.2,
    marginTop: height * 0.2,
  },
  text: {
    textAlign: 'center',
    fontFamily: 'AlimamaShuHeiTi-Bold',
    fontSize: 30,
    lineHeight: 0.053 * height,
    color: 'black',
  },
  text2: {
    textAlign: 'center',
    marginTop: 0.026 * height,
    fontFamily: 'AlimamaShuHeiTi-Bold',
    fontSize: 38,
    color: 'black',
  },
  button1: {
    marginTop: 0.065 * height,
    backgroundColor: '#5296E1',
    borderRadius: 35,
    height: 0.117 * height,
    justifyContent: 'center',
  },
  button2: {
    marginTop: 0.026 * height,
    backgroundColor: '#31C72C',
    borderRadius: 35,
    height: 0.117 * height,
    justifyContent: 'center',
  },
});

export default Pay;
