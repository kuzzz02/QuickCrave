import React,{ useState } from 'react';
import { StyleSheet, View, TextInput, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, Searchbar, BottomNavigation, Icon, Button, IconButton, Provider as PaperProvider, DefaultTheme } from 'react-native-paper';



const { width, height } = Dimensions.get('window');

const MusicRoute = () => {

};

const NotificationsRoute = () => {

};

const Detail = () => {

  const newTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'green',  // 更改主要颜色为绿色
      accent: 'red',  // 更改次要颜色为红色
      backgroundColor: 'white',
    },
  };  

const navigation = useNavigation();

const [counts, setCounts] = useState(new Array(foodCategories.length).fill(0));

const categories = [
    { key: 'burger', text: '🍔 Burger'},
    { key: 'pizza', text: '🍕 Pizza'},
    { key: 'sandwich', text: '🥪 Sandwich'},
  ];

const items = [
  { id: 1, logo: require('../common/KKFC.png'), name: 'KFC', description: '200 gr chicken + cheese Lettuce + tomato', rating: 4.0,length:0},
  { id: 2, logo: require('../common/MC.png'), name: 'McDonald\'s', description: '200 gr meat + Lettuce cheese + onion + tomato', rating: 4.8,length:0 },
];

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
const foodCategories =[{
    id: 1,
    name: 'Chicken Burger',
    image: require('../common/goods5.png'),
    description: '200 gr chicken + cheese Lettuce + tomato',
    price: 10.99,
  },
  {
    id: 2,
    name: 'Cheese Burger',
    image: require('../common/goods8.png'),
    description: '200 gr chicken + cheese Lettuce + tomato',
    price: 11.99,
  },
  {
    id: 3,
    name: 'Beef Burger',
    image: require('../common/goods7.png'),
    description: '200 gr chicken + cheese Lettuce + tomato',
    price: 12.99,
}]; 

  const handleDetailPress = () => {
    navigation.navigate('Detail');
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
  return (
    <ScrollView style={styles.container}>
        <Image style={styles.backgroundImage} source={require('../common/detail.png')}></Image>
        <View style={styles.header}>
        <Text style={styles.title}>McDonald's</Text>
        <View style={styles.detailContainer}>
            <View style ={styles.box}><Text>{'Delivery \nFor Free'}</Text></View>
            <View style ={styles.box}><Text>20~30min</Text></View>
            {/* <Text style={styles.itemRate}>{renderRating(item.rating)} </Text> */}
        </View>    
        </View>
        <View style={styles.categoryContainer} >
    {foodCategories.map(category =>(
        <View key={category.id} style={styles.foodCategory}>
        <Image source={category.image} style={{top:-10, width: 120, height: 120}}/>
        <View style={styles.details}>
              <Text style={styles.foodName}>{category.name}</Text>
              <Text style={styles.foodDescription}>{category.description}</Text>
              <View style={{flexDirection:'row', height:35, width:160, justifyContent: 'space-between'}}>
              <Text style={styles.foodPrice}>€{category.price} </Text>
              <IconButton icon="plus-circle" size={30} onPress={handleDetailPress} iconColor={'#06c168'} style={styles.add}/>
              </View>
            </View>
        </View>
    ))}
      </View>
    </ScrollView>
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
    shadowOpacity: 0.2, // 阴影透明度
    shadowRadius: 3, // 阴影半径
    shadowColor: '#000', // 阴影颜色
    shadowOffset: { height: 2, width: 0 }, // 阴影偏移
    elevation: 3, // 安卓阴影
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
    margin: 12, // 确保左对齐且有垂直间隔
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
    marginTop: -13,
    alignItems: 'center',
    textAlign: 'center',
    fontFamily:'AlimamaShuHeiTi-Bold',
    fontSize: 18,
  },
  foodDescription:{
    marginTop: 5,
    textAlign: 'center',
    fontSize: 14,
  },
  foodPrice:{
    marginTop: 5,
    color: '#06C168',
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 10,
  },
  add:{
    marginTop: -5,
    // justifyContent: 'flex-end',
  }
});

export default Detail;
