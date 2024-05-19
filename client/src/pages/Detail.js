import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  Text,
  IconButton,
  Provider as PaperProvider,
  DefaultTheme,
} from 'react-native-paper';
import {useCart} from './CartContext';
import GoodsService from '../services/GoodsService';

const {width, height} = Dimensions.get('window');

const Detail = () => {
  const {counts, handleIncrease, handleDecrease, calculateTotal} = useCart();

  const newTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'green',
      accent: 'red',
      backgroundColor: 'white',
    },
  };

  const renderRating = rating => {
    const filledStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - filledStars - (halfStar ? 1 : 0);
    return (
      <>
        {'★'.repeat(filledStars)}
        {halfStar ? '½' : ''}
        {'☆'.repeat(emptyStars)}
      </>
    );
  };

  const route = useRoute();

  const vendor = route.params.vendor;

  const [index, setIndex] = React.useState(0);

  const [goods, setGoods] = useState([]);

  useEffect(() => {
    const fetchVendorDetails = async () => {
      try {
        const goodsResponse = await GoodsService.getAll();
        const goodsData = goodsResponse.data;
        const goodsArray = Array.isArray(goodsData) ? goodsData : [goodsData];
        setGoods(goodsArray);
      } catch (error) {
        console.error('Error fetching user details: ', error);
      }
    };
    fetchVendorDetails();
  }, []);


  const navigation = useNavigation();

  const handleShoppingPress = vendor => {
    const total = calculateTotal();
    navigation.navigate('ShoppingCart', {goods, counts, total, vendor});
  };

  return (
    <View style={{flex: 1}}>
      <ScrollView style={styles.container}>
        <Image
          style={styles.backgroundImage}
          source={require('../common/detail.png')}
        />
        <View style={styles.header}>
          <Text style={styles.title}>{vendor.name}</Text>
          <View style={styles.detailContainer}>
            <View style={styles.box}>
              <Text>Delivery for</Text>
              <Text>€{vendor.fee}</Text>
            </View>
            <View style={styles.box}>
              <Text>{vendor.time}min</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.itemRate}>
                {renderRating(vendor.quantity)}{' '}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.categoryContainer}>
          {goods.map((good, index) => (
            <View key={good.id} style={styles.foodCategory}>
              <Image style={{width: 120, height: 120, marginBottom: 5}} source={{ uri: `https://8.130.37.157:12581/goods/${good.image}` }} />
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={styles.foodName}>
                {good.name}
              </Text>
              <View style={styles.textBox}>
                <Text
                  numberOfLines={2}
                  ellipsizeMode="tail"
                  style={styles.foodDescription}>
                  {good.description}
                </Text>
              </View>
              <View style={styles.actionContainer}>
                {counts[index] > 0 && (
                  <IconButton
                    icon="minus-circle"
                    size={20}
                    onPress={() => handleDecrease(index)}
                    iconColor={'#06c168'}
                    style={styles.minus}
                  />
                )}
                {counts[index] > 0 ? (
                  <Text styles={styles.text}>{counts[index]}</Text>
                ) : (
                  <Text style={styles.foodPrice}>€{good.price}</Text>
                )}
                <IconButton
                  icon="plus-circle"
                  size={20}
                  onPress={() => handleIncrease(index)}
                  iconColor={'#06c168'}
                  style={styles.add}
                />
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
      <TouchableOpacity
        icon="alpha-q-circle-outline"
        onPress={() => handleShoppingPress(vendor)}
        style={styles.countCart}>
        <Text style={styles.cartText}>Total Cost: €{calculateTotal()}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFEFEF',
    zIndex: -2,
  },
  backgroundImage: {
    width: width,
    height: 150,
    // resizeMode: 'contain',
    zIndex: -1,
  },
  header: {
    backgroundColor: 'white',
    position: 'absolute',
    top: 80,
    height: 130,
    marginLeft: -150,
    zIndex: 0,
    left: '50%', // 左侧边缘位于父容器的50%
    width: 300,
    borderRadius: 15,
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowColor: '#000',
    shadowOffset: {height: 2, width: 0},
    elevation: 3,
  },
  title: {
    fontSize: 26,
    // fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    fontFamily: 'AlimamaShuHeiTi-Bold',
  },
  detailContainer: {
    flexDirection: 'row',
    // justifyContent: 'space-around',
    marginTop: 10,
  },
  box: {
    width: 100,
    height: 50,
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    borderColor: '#DCDFE6',
    borderRightWidth: 1,
  },
  box1: {
    width: 100,
    height: 50,
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 75, // 确保足够空间在header之下开始
    justifyContent: 'flex-start',
    marginHorizontal: width * 0.05,
    // backgroundColor: 'red',
    alignItems: 'center',
  },
  // textBox: {
  //   height: 30,
  //   width: 160,
  //   // backgroundColor: 'red',
  //   // alignItems: 'center',
  //   justifyContent: 'center',
  //   textAlign: 'center',
  // },
  foodCategory: {
    width: 160,
    height: 200,
    margin: 10,
    marginHorizontal: width * 0.015,
    backgroundColor: 'white',
    textAlign: 'center',
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 4,
  },
  foodName: {
    marginTop: -15,
    alignItems: 'center',
    textAlign: 'center',
    fontFamily: 'AlimamaShuHeiTi-Bold',
    fontSize: 18,
  },
  foodDescription: {
    textAlign: 'center',
    fontSize: 14,
  },
  foodPrice: {
    marginTop: 5,
    color: '#06C168',
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 10,
    flex: 1,
  },
  actionContainer: {
    flexDirection: 'row',
    // marginTop: 10,
    alignItems: 'center',
    alignSelf: 'center', // 水平居中
    justifyContent: 'space-between',
    marginTop: -8,
    height: 35,
    width: 160,
    // backgroundColor: 'red',
  },
  countCart: {
    justifyContent: 'center',
    position: 'absolute',
    bottom: 15,
    width: width * 0.9,
    marginHorizontal: width * 0.05,
    height: 60,
    backgroundColor: '#162D3A',
    borderRadius: 15,
  },
  add: {
    marginTop: 12,
  },
  minus: {
    marginTop: 12,
  },
  // text:{
  //   marginTop:15,
  // },
  cartText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default Detail;
