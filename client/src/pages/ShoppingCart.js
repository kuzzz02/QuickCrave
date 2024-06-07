import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Dimensions,
  TextInput,
  Modal,
  Image,
  Touchable,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Button, IconButton, Icon} from 'react-native-paper';
import {useCart} from './CartContext';
import OrdersService from '../services/OrdersSerivce';

const {width, height} = Dimensions.get('window');

const ShoppingCart = () => {
  const {goods, counts, handleIncrease, handleDecrease, images} = useCart();

  const man = [
    {id: '1', phoneNumber: '1314', location: 'H244, SCNU', name: 'Hong Cao'},
  ];

  const [manState, setManState] = useState(man);

  const [modalVisible, setModalVisible] = useState(false);

  const [newLocation, setNewLocation] = useState('');

  const navigation = useNavigation();

  // const handleOrderPress = () => {
  //   const total = calculateTotal();
  //   navigation.navigate('Pay', {total});
  // };

  const handleOrderPress = async () => {
    const total = calculateTotal();
    const orderData = {
      vendorId: vendor.id, 
      items: goods.filter((_, index) => counts[index] > 0).map((item, index) => ({
        itemId: item.id,
        name: item.name,
        quantity: counts[index],
        price: item.price,
        total: item.price * counts[index]
      })),
      total: total,
      deliveryLocation: manState[0].location, 
    };
  
    console.log('Order data to send:', orderData);
  
    try {
      const response = await OrdersService.create(orderData);
      console.log('Order placed successfully:', response);
      navigation.navigate('Pay', {total,vendor});
      // Optionally reset the cart or show a success message
    } catch (error) {
      console.error('Failed to place order:', error);
    }
  };

  const calculateTotal = () => {
    let total = vendor.fee;
    counts.forEach((count, index) => {
      total += count * goods[index].price;
    });
    return total;
  };

  const handleSaveLocation = () => {
    const updatedMan = { ...manState[0], location: newLocation };
    setManState([updatedMan]); 
    setModalVisible(false); 
  };

  const route = useRoute();

  const vendor = route.params.vendor;

  return (
    <View style={styles.container}>
      <ScrollView>
        {goods.map((item, index) => {
          if (counts[index] > 0) {
            return (
              <View style={styles.productContainer}>
                <Image
                  source={{uri: images[item.id]}}
                  style={styles.foodImage}></Image>
                <View key={item.id} style={styles.item}>
                  <Text
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    style={styles.foodName}>
                    {item.name}
                  </Text>
                  <Text style={styles.foodRestaurant}>{vendor.name}</Text>
                  <Text style={styles.foodPrice}>€{item.price}</Text>
                  <Text style></Text>
                </View>
                <View style={styles.buttonBox}>
                  <IconButton
                    icon="minus-circle"
                    size={0.078 * width}
                    onPress={() => handleDecrease(index)}
                    iconColor={'#06c168'}
                    style={styles.minus}
                  />
                  <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                    {counts[index]}
                  </Text>
                  <IconButton
                    icon="plus-circle"
                    size={0.078 * width}
                    onPress={() => handleIncrease(index)}
                    iconColor={'#06c168'}
                    style={styles.add}
                  />
                </View>
              </View>
            );
          }
        })}
        <View style={styles.locationContainer}>
          {manState.map(item => (
            <View
              key={item.id}
              style={{height: 0.133 * height, width: 0.729 * width}}>
              <Text style={styles.locationTitle}>Deliver To</Text>
              {/* <Icon source="map-marker" style={{marginLeft:100}} color="yellow"size={40}/> */}
              <Text
                style={{
                  marginTop: 0.013 * height,
                  color: 'black',
                  fontFamily: 'AlimamaShuHeiTi-Bold',
                  fontSize: 24,
                  marginLeft: 0.052 * width,
                }}>
                {item.location}
              </Text>
            </View>
          ))}
          <View style={{marginLeft: 0.026 * width}}>
            <Text
              style={styles.editLink}
              onPress={() => {
                setModalVisible(true);
                setNewLocation(man[0].location); // initialize the new location
              }}>
              Edit
            </Text>
          </View>
        </View>
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput
              style={styles.modalText}
              onChangeText={setNewLocation}
              value={newLocation}
              placeholder="Enter new address"
            />
            <Button
        style={styles.savebutton}
        labelStyle={{fontSize: 16}}
        buttonColor="#06c168"
        mode="contained"
        onPress={handleSaveLocation}>
        Save address
      </Button>
          </View>
        </View>
      </Modal>
      <View style={styles.totalContainer}>
        <View style={styles.left}>
          <Text style={styles.total}>Sub-Total: </Text>
          <Text style={styles.total}>Delivery Charge: </Text>
          <Text style={styles.total1}>Total: </Text>
        </View>
        <View style={styles.right}>
          <Text style={styles.money}>€{calculateTotal() - vendor.fee}</Text>
          <Text style={styles.money}>€{vendor.fee}</Text>
          <Text style={styles.money1}>€{calculateTotal()}</Text>
        </View>
        <Button
          style={styles.button}
          labelStyle={{fontSize: 16}}
          buttonColor="white"
          onPress={handleOrderPress}
          mode="contained">
          <Text
            style={{
              color: '#06c168',
              fontSize: 18,
              fontFamily: 'AlimamaShuHeiTi-Bold',
            }}>
            Place My Order
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
    // backgroundColor: 'green',
  },
  item: {
    width: 0.377 * width,
  },
  productContainer: {
    flexDirection: 'row',
    marginTop: 0.024 * height,
    flex: 1,
    zIndex: -1,
    width: width * 0.9,
    height: 0.135 * height,
    backgroundColor: 'white',
    textAlign: 'center',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 4,
  },
  foodName: {
    fontSize: 20,
    fontFamily: 'AlimamaShuHeiTi-Bold',
    color: 'black',
    marginTop: 0.013 * height,
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
  foodImage: {
    width: 0.234 * width,
    height: 0.12 * height,
    borderRadius: 8,
  },
  buttonBox: {
    flex: 1,
    flexDirection: 'row',
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  total: {
    fontSize: 18,
    marginTop: 0.02 * height,
    marginLeft: 0.078 * width,
    fontFamily: 'AlimamaShuHeiTi-Bold',
    color: 'white',
  },
  total1: {
    fontSize: 24,
    marginTop: 0.02 * height,
    marginLeft: 0.078 * width,
    color: 'white',
    fontFamily: 'AlimamaShuHeiTi-Bold',
  },
  money: {
    fontSize: 18,
    fontFamily: 'AlimamaShuHeiTi-Bold',
    marginTop: 0.02 * height,
    marginLeft: 0.247 * width,
    color: 'white',
  },
  money1: {
    fontSize: 24,
    fontFamily: 'AlimamaShuHeiTi-Bold',
    marginTop: 0.02 * height,
    marginLeft: 0.234 * width,
    color: 'white',
  },
  locationContainer: {
    flexDirection: 'row',
    marginTop: 0.0239 * height,
    flex: 1,
    // zIndex: -1,
    width: width * 0.9,
    height: 0.133 * height,
    backgroundColor: 'white',
    textAlign: 'center',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 4,
  },
  locationTitle: {
    fontFamily: 'AlimamaShuHeiTi-Bold',
    fontSize: 20,
    marginTop: 0.013 * height,
    marginLeft: 0.052 * width,
  },
  editLink: {
    color: '#06c168',
    fontSize: 20,
    fontFamily: 'AlimamaShuHeiTi-Bold',
    marginTop: 0.013 * height,
    marginRight: 0.052 * width,
  },
  totalContainer: {
    flexDirection: 'row',
    width: width * 0.9,
    height: 0.239 * height,
    position: 'absolute',
    bottom: 0.013 * height,
    zIndex: 2,
    backgroundColor: '#06c168',
    // textAlign: 'center',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 4,
    justifyContent: 'center',
  },
  left: {
    height: 0.239 * height,
    width: width * 0.5,
  },
  right: {
    height: 0.239 * height,
    width: width * 0.45,
  },
  button: {
    position: 'absolute',
    bottom: 0.012 * height,
    width: width * 0.85,
    borderRadius: 12,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  savebutton: {
    borderRadius: 12,
  },
});

export default ShoppingCart;
