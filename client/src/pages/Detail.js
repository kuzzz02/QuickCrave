import React from 'react';
import { StyleSheet, View, TextInput, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, Searchbar, BottomNavigation, Icon, Button } from 'react-native-paper';



const { width, height } = Dimensions.get('window');

const MusicRoute = () => {

};

const NotificationsRoute = () => {

};

const Detail = () => {

const navigation = useNavigation();

const categories = [
    { key: 'burger', text: '🍔 Burger'},
    { key: 'pizza', text: '🍕 Pizza'},
    { key: 'sandwich', text: '🥪 Sandwich'},
  ];

const items = [
  { id: 1, logo: require('../common/KKFC.png'), name: 'KFC', description: '200 gr chicken + cheese Lettuce + tomato', rating: 4.0},
  { id: 2, logo: require('../common/MC.png'), name: 'McDonald\'s', description: '200 gr meat + Lettuce cheese + onion + tomato', rating: 4.8 },
];

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
        <View style={styles.header}></View>
      
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFEFEF',
  },
  backgroundImage: {
    width: width,
    height: 170,
    // resizeMode: 'contain',
  },
  header:{
    backgroundColor: 'white',
    position: 'absolute',
    top: 30,
    height: 50,
    left: '50%', // 左侧边缘位于父容器的50%
    // transform: [{translateX - 50% }], // 向左移动自身宽度的50%
    width: 260,
    shadowOpacity: 0.2, // 阴影透明度
    shadowRadius: 3, // 阴影半径
    shadowColor: '#000', // 阴影颜色
    shadowOffset: { height: 2, width: 0 }, // 阴影偏移
    elevation: 3, // 安卓阴影
  },
  
});

export default Detail;
