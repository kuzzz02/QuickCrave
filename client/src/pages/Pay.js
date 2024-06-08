import React from 'react';
import {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, View, Text, Dimensions, Alert} from 'react-native';
import {Button, IconButton, Icon} from 'react-native-paper';
import OrdersService from '../services/OrdersSerivce';
import {useCart} from './CartContext';
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
    const response = await OrdersService.create(
      goods[0].id,
      user.id,
      vendor.id,
      1111, 
      'Ordered',
      today,
      user.address,
      user.phone,
      paymentType,
      total
    )
    .then(response => {
      return response;
    })

    if (response.data) {
      Alert.alert('Success', 'Order placed successfully');
      navigation.navigate('Track', { vendor });
    } else {
      Alert.alert('Error', 'Failed to place the order');
    }
  };

  const handleWechatPayPress = () => {
    createOrder('WechatPay');
  };

  const handleAliPayPress = () => {
    createOrder('AliPay');
  };

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
