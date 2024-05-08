import React,{ useState } from 'react';
import { StyleSheet, View, TextInput, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, BottomNavigation, Icon, Button, IconButton, Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import { useCart } from './CartContext';


const { width, height } = Dimensions.get('window');

const MusicRoute = () => {

};

const NotificationsRoute = () => {

};

const Detail = () => {

  const { counts, handleIncrease, handleDecrease, calculateTotal } = useCart();

  const newTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'green',  
      accent: 'red',  
      backgroundColor: 'white',
    },
  };  
const foodCategories =[{
  id: 1,
  name: 'Chicken Burger',
  image: require('../common/goods5.png'),
  description: '200 gr chicken + cheese Lettuce + tomato',
  restaurant: 'McDonald\'s',
  price: 10.99,
},
{
  id: 2,
  name: 'Cheese Burger',
  image: require('../common/goods8.png'),
  description: '200 gr chicken + cheese Lettuce + tomato',
  restaurant: 'McDonald\'s',
  price: 11.99,
},
{
  id: 3,
  name: 'Beef Burger',
  image: require('../common/goods7.png'),
  description: '200 gr chicken + cheese Lettuce + tomato',
  restaurant: 'McDonald\'s',
  price: 12.99,
}]; 

const navigation = useNavigation();

const renderRating = (rating) => {
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
    
const Tab = createBottomTabNavigator();

const [searchQuery, setSearchQuery] = React.useState('');

const [selectedCategory, setSelectedCategory] = React.useState('');

const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'music', title: 'Home', focusedIcon: 'home', unfocusedIcon: 'home-outline'},
    { key: 'notifications', title: 'Shopping-Cart', focusedIcon: 'shopping', unfocusedIcon: 'shopping-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    notifications: NotificationsRoute,
  });

const handlePress = (categoryName) => {
    setSelectedCategory(categoryName);
    // Additional logic can be added here for navigation or other purposes
  };


const handleShoppingPress = () => {
  const total = calculateTotal();
  navigation.navigate('ShoppingCart', { foodCategories, counts, total });
}

  return (
    <View style={{flex:1}}>
    <ScrollView style={styles.container}>
      <Image style={styles.backgroundImage} source={require('../common/detail.png')} />
      <View style={styles.header}>
        <Text style={styles.title}>McDonald's</Text>
        <View style={styles.detailContainer}>
            <View style ={styles.box}><Text>{'Delivery \nFor Free'}</Text></View>
            <View style ={styles.box}><Text>20~30min</Text></View>
            {/* <Text style={styles.itemRate}>{renderRating(item.rating)} </Text> */}
        </View>    
        </View>
      <View style={styles.categoryContainer}>
        {foodCategories.map((category, index) => (
          <View key={category.id} style={styles.foodCategory}>
            <Image source={category.image} style={{ width: 120, height: 120, marginBottom: 10 }} />
            <Text style={styles.foodName}>{category.name}</Text>
            <Text style={styles.foodDescription}>{category.description}</Text>
            <View style={styles.actionContainer}>
              {counts[index] > 0 && (
                <IconButton icon="minus-circle" size={20} onPress={() => handleDecrease(index)} iconColor={'#06c168'} style={styles.minus} />
              )}
              {counts[index] > 0 ? (
                <Text>{counts[index]}</Text>
              ) : (
                <Text style={styles.foodPrice}>€{category.price}</Text>
              )}
              <IconButton icon="plus-circle" size={20} onPress={() => handleIncrease(index)} iconColor={'#06c168'} style={styles.add} />
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
    <TouchableOpacity icon="alpha-q-circle-outline" onPress={handleShoppingPress}  style={styles.countCart} >
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
  header:{
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
    shadowOffset: { height: 2, width: 0 }, 
    elevation: 3, 
  },
  title:{
    fontSize: 26,
    // fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    fontFamily:'AlimamaShuHeiTi-Bold',
  },
  detailContainer:{
    flexDirection: 'row',
    // justifyContent: 'space-around',
    marginTop: 10,
  },
  box:{
    width: 100,
    height: 50,
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    borderColor: '#DCDFE6',
    borderRightWidth: 1,
  },
  box1:{
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
  foodCategory: {
    width: 160,
    height: 200,
    margin: 12, 
    backgroundColor: 'white',
    textAlign: 'center',
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 4
  },
  foodName:{
    marginTop: -15,
    alignItems: 'center',
    textAlign: 'center',
    fontFamily:'AlimamaShuHeiTi-Bold',
    fontSize: 18,
  },
  foodDescription:{
    textAlign: 'center',
    fontSize: 14,
  },
  foodPrice:{
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
    marginTop: -8,
    height: 35,
    width: 160,
    // backgroundColor: 'red',
    justifyContent: 'center',
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
  cartText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default Detail;
