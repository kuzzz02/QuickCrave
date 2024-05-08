import React from 'react';
import { StyleSheet, View, Text, ScrollView, Dimensions, Image } from 'react-native';
import { Button, IconButton } from 'react-native-paper';


const { width,height } = Dimensions.get('window');

const ShoppingCart = ({ route }) => {
  const { foodCategories, counts } = route.params;

  const calculateTotal = () => {
    let total = foodCategories.reduce((total, item, index) => {
      return total + (item.price * counts[index]);
    }, 0);
    return total; 
  };

  const handleIncrease = (index) => {
    const newCounts = [...counts];
    newCounts[index] += 1;
    setCounts(newCounts);
  };
  
  const handleDecrease = (index) => {
    const newCounts = [...counts];
    if (newCounts[index] > 0) {
      newCounts[index] -= 1;
    }
    setCounts(newCounts);
  };

  return (
    <ScrollView style={styles.container}>
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
            <Text>{counts[index]}</Text>
            <IconButton icon="plus-circle" size={30} onPress={() => handleIncrease(index)} iconColor={'#06c168'} style={styles.add} />
            </View>
            </View>
          );
        }
      })}
      <View style={styles.totalContainer}>
        <Text style={styles.total}>Total Amount: ${calculateTotal()}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
container: {
    flex: 1,
    marginHorizontal: width * 0.05,
  },
item: {
    // padding: 10,
    // backgroundColor: 'red',
  },
productContainer: {
    flexDirection: 'row',
    marginTop: 18,
    flex: 1,
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
totalContainer: {
    marginTop: 20,
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
  }
});

export default ShoppingCart;
