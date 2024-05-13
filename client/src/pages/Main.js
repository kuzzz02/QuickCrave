import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  Text,
  Searchbar,
  BottomNavigation,
  Icon,
  Button,
} from 'react-native-paper';

const {width, height} = Dimensions.get('window');

const MusicRoute = () => {};

const NotificationsRoute = () => {};

const Main = () => {
  const navigation = useNavigation();

  const categories = [
    {key: 'burger', text: '🍔 Burger'},
    {key: 'pizza', text: '🍕 Pizza'},
    {key: 'sandwich', text: '🥪 Sandwich'},
  ];

  const items = [
    {
      id: 1,
      logo: require('../common/KKFC.png'),
      name: 'KFC',
      description: '200 gr chicken + cheese Lettuce + tomato',
      rating: 4.0,
    },
    {
      id: 2,
      logo: require('../common/MC.png'),
      name: "McDonald's",
      description: '200 gr meat + Lettuce cheese + onion + tomato',
      rating: 4.8,
    },
  ];

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

  const handleDetailPress = () => {
    navigation.navigate('Detail');
  };

  const Tab = createBottomTabNavigator();

  const [searchQuery, setSearchQuery] = React.useState('');

  const [selectedCategory, setSelectedCategory] = React.useState('');

  const [index, setIndex] = React.useState(0);
  // const [routes] = React.useState([
  //   {
  //     key: 'music',
  //     title: 'Home',
  //     focusedIcon: 'home',
  //     unfocusedIcon: 'home-outline',
  //   },
  //   {
  //     key: 'notifications',
  //     title: 'Shopping-Cart',
  //     focusedIcon: 'shopping',
  //     unfocusedIcon: 'shopping-outline',
  //   },
  // ]);

  // const renderScene = BottomNavigation.SceneMap({
  //   music: MusicRoute,
  //   notifications: NotificationsRoute,
  // });

  const handlePress = categoryName => {
    setSelectedCategory(categoryName);
    // Additional logic can be added here for navigation or other purposes
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        <Icon source="map-marker" color="#06C168" size={22} />
        SCNU, CN
      </Text>
      <View style={styles.header}>
        <Text style={styles.subtitle}>
          Order Your Food{'\n'}
          <Text style={styles.subtitle}>Fast and Free</Text>
        </Text>
        <Image
          source={require('../common/delivery_staff.png')}
          style={styles.imageD}
        />
      </View>
      {/* //TODO:change this search bar into normal */}
      <Searchbar
        style={styles.searchBar}
        placeholder="Search For Food"
        onChangeText={setSearchQuery}
        value={searchQuery}
      />
      <Text style={styles.categoryTitle}>Categories:</Text>
      <View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categoryContainer}>
          {categories.map(category => (
            <TouchableOpacity
              key={category.key}
              style={[
                styles.category,
                selectedCategory === category.key ? styles.selected : null,
              ]}
              onPress={() => handlePress(category.key)}>
              <Text
                style={[
                  styles.categoryText,
                  selectedCategory === category.key ? styles.selectedT : null,
                ]}>
                {category.text}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <View style={styles.itemContainer}>
        {items.map(item => (
          <TouchableOpacity
            key={item.id}
            style={styles.item}
            onPress={handleDetailPress}>
            <Image source={item.logo} style={styles.logo} />
            <View style={styles.details}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemDescription}>{item.description}</Text>
              <Text style={styles.itemRate}>{renderRating(item.rating)} </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.navBar}>
        <BottomNavigation
          barStyle={{backgroundColor: 'white'}}
          navigationState={{index, routes}}
          onIndexChange={setIndex}
          // renderScene={renderScene}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    marginTop: 20,
    marginHorizontal: width * 0.04,
    // backgroundColor: 'red',
    fontSize: 20,
    fontWeight: 'bold',
  },
  header: {
    flexDirection: 'row', // 水平排列
    alignItems: 'center', // 垂直居中
    marginHorizontal: width * 0.05,
    marginTop: 15,
  },
  imageD: {
    marginLeft: 20,
  },
  subtitle: {
    // paddingHorizontal: 10,
    fontSize: 32,
    fontFamily: 'AlimamaShuHeiTi-Bold',
    // width: '50%',
    // backgroundColor: 'red',
  },
  location: {
    fontWeight: 'bold',
  },
  searchBar: {
    marginHorizontal: width * 0.05,
    marginVertical: 10,
    borderRadius: 10,
    // height: 40,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 8,
    width: '70%',
  },
  categoryTitle: {
    marginHorizontal: width * 0.05,
    // marginVertical: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  categoryContainer: {
    marginVertical: 10,
    marginLeft: width * 0.05,
    height: 50,
  },
  category: {
    height: 50,
    width: 150,
    borderRadius: 10,
    textAlign: 'center',
    justifyContent: 'center',
    marginHorizontal: 3,
    borderWidth: 1,
    borderColor: '#06C168',
  },
  selected: {
    backgroundColor: '#06C168',
    fontcolor: 'white',
  },
  selectedT: {
    color: 'white',
  },
  categoryText: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    height: 200,
    marginHorizontal: width * 0.05,
    justifyContent: 'center',
    // padding: 10,
    // backgroundColor: 'red',
  },
  item: {
    width: 170,
    height: 230,
    marginHorizontal: 10,
    backgroundColor: 'white',
    borderRadius: 8,
    // padding: 10,
    // justifyContent: 'center',
    // textAlign: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 4,
  },
  logo: {
    // resizeMode: 'center',
    width: 90,
    height: 80,
    marginTop: 30,
    marginRight: 10,
  },
  details: {
    // flex: 1,
  },
  itemName: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 10,
  },
  itemDescription: {
    color: '#666',
  },
  itemRate: {
    color: 'green',
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 5,
    fontSize: 18,
  },
  navBar: {
    // flexDirection: 'row',
    // flex: 1,
    position: 'absolute',
    bottom: 0,
    height: 70,
    left: 0,
    right: 0,
    // justifyContent: 'space-around',
    // paddingVertical: 10,
    // borderTopWidth: 1,
    // borderTopColor: '#eee',
    // marginBottom: 10,
    marginTop: 5,
    backgroundColor: 'red',
  },
  navButton: {
    alignItems: 'center',
  },
});

export default Main;
