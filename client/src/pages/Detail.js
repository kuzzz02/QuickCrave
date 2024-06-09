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
  const {counts, handleIncrease, handleDecrease, calculateTotal, goodsImages} = useCart();

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
              <Image style={{width: 0.312 * width, height: 0.159 * height, marginBottom: 5}} source={{uri: goodsImages[good.id]}} />
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
        disabled={calculateTotal() === 0 }
        style={styles.countCart}
        >
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
    height: 0.2 * height,
    // resizeMode: 'contain',
    zIndex: -1,
  },
  header: {
    backgroundColor: 'white',
    position: 'absolute',
    top: 0.11 * height,
    height: 0.17 * height,
    marginLeft: -0.39 * width,
    zIndex: 0,
    left: '50%', // 左侧边缘位于父容器的50%
    width: 0.78 * width,
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
    marginTop: 0.013 * height,
    fontFamily: 'AlimamaShuHeiTi-Bold',
  },
  detailContainer: {
    flexDirection: 'row',
    // justifyContent: 'space-around',
    marginTop: 0.013 * height,
  },
  box: {
    width: 0.26 * width,
    height: 0.066 * height,
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    borderColor: '#DCDFE6',
    borderRightWidth: 1,
  },
  box1: {
    width: 0.26 * width,
    height: 0.066 * height,
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 0.1 * height,
    justifyContent: 'flex-start',
    marginHorizontal: width * 0.05,
    // backgroundColor: 'red',
    alignItems: 'center',
  },
  foodCategory: {
    width: 0.41 * width,
    height: 0.266 * height,
    margin: 0.013 * height,
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
    marginTop: -0.02 * height,
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
    marginLeft: 0.026 * width,
    flex: 1,
  },
  actionContainer: {
    flexDirection: 'row',
    // marginTop: 10,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginTop: -8,
    height: 0.0465 * height,
    width: 0.417 * width,
    // backgroundColor: 'red',
  },
  countCart: {
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0.02 * height,
    width: width * 0.9,
    marginHorizontal: width * 0.05,
    height: 0.08 * height,
    backgroundColor: '#162D3A',
    borderRadius: 15,
  },
  add: {
    marginTop: 0.016 * height,
  },
  minus: {
    marginTop: 0.016 * height,
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
