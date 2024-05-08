import React from 'react';
import { StyleSheet, View, Text, ScrollView, Dimensions, Image } from 'react-native';
import { Button, IconButton, Icon } from 'react-native-paper';
import { useCart } from './CartContext';


const { width,height } = Dimensions.get('window');


const ShoppingCart = ({ route }) => {
    const { foodCategories, counts, handleIncrease, handleDecrease } = useCart();

const man = [
    { phoneNumber: '1314', location: 'H244, SCNU', name: 'Hong Cao'},
    ];

  const calculateTotal = () => {
    let total = foodCategories.reduce((total, item, index) => {
      return total + (item.price * counts[index]);
    }, 0);
    return total; 
  };

  return (
    <View style={styles.container}>
    <ScrollView>
      {foodCategories.map((item, index) => {
        if (counts[index] > 0) {
          return (
            <View style = {styles.productContainer}>
            <Image source={item.image} style={styles.foodImage}></Image>
            <View key={item.id} style={styles.item}>
                <Text style={styles.foodName}>{item.name}</Text>
                <Text style={styles.foodRestaurant}>{item.restaurant}</Text>
                <Text style={styles.foodPrice}>€{item.price}</Text>

              {/* <Text style={styles.foodName}>{item.name} - {counts[index]} x ${item.price}</Text> */}
              {/* <Text>Subtotal: ${(counts[index] * item.price)}</Text> */}
                <Text style></Text>
            </View>
            <View style={styles.buttonBox}>
            <IconButton icon="minus-circle" size={30} onPress={() => handleDecrease(index)} iconColor={'#06c168'} style={styles.minus} />
            <Text style={{fontSize:20, fontWeight:"bold"}}>{counts[index]}</Text>
            <IconButton icon="plus-circle" size={30} onPress={() => handleIncrease(index)} iconColor={'#06c168'} style={styles.add} />
            </View>
            </View>
          );
        }
      })}
      <View style = {styles.locationContainer}>
        {man.map((item) => (
        <View style={{ height:100, width:280}}>
        <Text style={styles.locationTitle}>Deliver To</Text>
        {/* <Icon source="map-marker" style={{marginLeft:100}} color="yellow"size={40}/> */}
        <Text style={{marginTop:10, color:"black", fontFamily:'AlimamaShuHeiTi-Bold', fontSize:24, marginLeft:20}}>{item.location}</Text>
        </View>
        ))}
        <View style={{marginLeft:30}}>
        <Text style={styles.editLink}>Edit</Text>
        </View>
      </View>
      
    </ScrollView>
    <View style={styles.totalContainer}>
        <View style={styles.left}>
        <Text style={styles.total}>Sub-Total: </Text>
        <Text style={styles.total}>Delivery Charge: </Text>
        <Text style={styles.total1}>Total: </Text>
        </View>
        <View style={styles.right}>
        <Text style={styles.money}>€{calculateTotal()}</Text>
        <Text style={styles.money}>€{calculateTotal()}</Text>
        <Text style={styles.money1}>€{calculateTotal()}</Text>
        </View>
        <Button style={styles.button} labelStyle={{ fontSize: 16 }} buttonColor='white' mode="contained"><Text style={{color:'#06c168', fontSize:18, fontFamily:'AlimamaShuHeiTi-Bold'}}>Place My Order</Text></Button>
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
    // padding: 10,
    // backgroundColor: 'red',
  },
productContainer: {
    flexDirection: 'row',
    marginTop: 18,
    flex: 1,
    zIndex: -1,
    width: width * 0.9,
    height: 100,
    backgroundColor: 'white',
    textAlign: 'center',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 4
  },
foodName: {
    fontSize: 18,
    fontFamily: 'AlimamaShuHeiTi-Bold',
    color: 'black',
    marginTop: 10,
},
foodRestaurant: {
    fontSize: 18,
    fontFamily: 'AlimamaShuHeiTi-Bold',
    color: '#C5C5C5',
    marginTop: 10,
},
foodPrice: {
    fontSize: 20,
    fontFamily: 'AlimamaShuHeiTi-Bold',
    color: '#06c168',
    marginTop: 10,
},
foodImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
},
buttonBox:{
    flex: 1,
    flexDirection: 'row',
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
},
  total: {
    fontSize: 18,
    marginTop: 15,
    marginLeft: 30,
    fontFamily: 'AlimamaShuHeiTi-Bold',
    color: 'white',
  },
  total1: {
    fontSize: 24,
    marginTop: 15,
    marginLeft: 30,
    color: 'white',
    fontFamily: 'AlimamaShuHeiTi-Bold',
  },
 money: {
    fontSize: 18,
    fontFamily: 'AlimamaShuHeiTi-Bold',
    marginTop: 15,
    marginLeft: 95,
    color: 'white',
  },
  money1: {
    fontSize: 24,
    fontFamily: 'AlimamaShuHeiTi-Bold',
    marginTop: 15,
    marginLeft: 90,
    color: 'white',
  },
  locationContainer:{
    flexDirection: 'row',
    marginTop: 18,
    flex: 1,
    // zIndex: -1,
    width: width * 0.9,
    height: 100,
    backgroundColor: 'white',
    textAlign: 'center',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 4
  },
  locationTitle:{
    fontFamily: 'AlimamaShuHeiTi-Bold',
    fontSize: 20,
    marginTop: 10,
    marginLeft: 20,
  },
  editLink:{
    color: '#06c168',
    fontSize: 20,
    fontFamily: 'AlimamaShuHeiTi-Bold',
    marginTop: 10,
  },
  totalContainer: {
    flexDirection: 'row',
    width: width * 0.9,
    height: 180,
    position: 'absolute',
    bottom: 10,
    zIndex: 2,
    backgroundColor: '#06c168',
    // textAlign: 'center',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 4,
    justifyContent: 'center',
  },
  left:{
    height: 180,
    width: width * 0.45,
  },
  right:{
    height: 180,
    width: width * 0.45,
  },
  button:{
    position: 'absolute',
    bottom: 8,
    width: width * 0.85,
    borderRadius: 12,
  }
});

export default ShoppingCart;
