import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
// import { Buffer } from 'buffer';
import axios from 'axios';

import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
  Alert,
} from 'react-native';
import {
  Text,
  Searchbar,
  BottomNavigation,
  Icon,
  Button,
} from 'react-native-paper';
import VendorService from '../services/VendorService';
import ImageService from '../services/ImageService';

const {width, height} = Dimensions.get('window');

const Main = () => {
  const navigation = useNavigation();

  const categories = [
    {key: 'burger', text: '🍔 Burger'},
    {key: 'pizza', text: '🍕 Pizza'},
    {key: 'sandwich', text: '🥪 Sandwich'},
  ];

  const [vendors, setVendors] = useState([]);

  const [filteredVendors, setFilteredVendors] = useState([]);

  const [images, setImages] = useState({});

  const placeholderImage = require('../common/qu.png');

  useEffect(() => {
    const fetchVendorDetails = async () => {
      try {
        const response = await VendorService.getAll();
        const data = response.data;
        const vendorsArray = Array.isArray(data) ? data : [data];
        setVendors(vendorsArray);
        setFilteredVendors(vendorsArray);
        vendorsArray.forEach(async vendor => {
          const imageSrc = await ImageService.getVendorImage(vendor.portrait);
          setImages(prevImages => ({
            ...prevImages,
            [vendor.id]: imageSrc,
          }));
        });
      } catch (error) {
        console.error('Error fetching user details: ', error);
      }
    };
    fetchVendorDetails();
  }, []);

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

  const handleDetailPress = vendor => {
    navigation.navigate('Detail', {vendor});
  };

  const [searchQuery, setSearchQuery] = React.useState('');

  const [selectedCategory, setSelectedCategory] = React.useState('');

  const handlePress = categoryKey => {
    setSelectedCategory(categoryKey);
    if (categoryKey === '') {
      setFilteredVendors(vendors); // 显示所有商家
    } else {
      const filtered = vendors.filter(
        vendor => vendor.category === categoryKey,
      );
      setFilteredVendors(filtered);
    }
  };

  const handleSearch = query => {
    setSearchQuery(query);
    if (query.trim() === '') {
      setFilteredVendors(vendors); // 如果搜索框为空，则显示所有商家
    } else {
      const filtered = vendors.filter(vendor =>
        vendor.name.toLowerCase().includes(query.toLowerCase()),
      );
      setFilteredVendors(filtered);
    }
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
        onChangeText={handleSearch}
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

      <ScrollView contentContainerStyle={styles.itemContainer}>
        {filteredVendors.map(vendor => (
          <TouchableOpacity
            key={vendor.id}
            style={styles.item}
            onPress={() => handleDetailPress(vendor)}>
            <View style={styles.imageBox}>
              {images[vendor.id] ? (
                <Image style={styles.logo} source={{uri: images[vendor.id]}} />
              ) : (
                <Image style={styles.logo} source={placeholderImage} />
              )}
            </View>
            <View style={styles.details}>
              <Text style={styles.itemName}>{vendor.name}</Text>
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={styles.itemDescription}>
                {vendor.description}
              </Text>
              <Text style={styles.itemRate}>
                {renderRating(vendor.quantity)}{' '}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
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
    flexWrap: 'wrap',
    width: width * 0.9,
    marginHorizontal: width * 0.05,
    // justifyContent: 'center',
    justifyContent: 'space-between',
    // padding: 10,
  },
  item: {
    width: 165,
    height: 220,
    marginTop: 10,
    marginHorizontal: 2,
    backgroundColor: 'white',
    borderRadius: 8,
    margin: 10,
    // padding: 10,
    // justifyContent: 'center',
    // textAlign: 'center',
    // alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 4,
  },
  imageBox: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
  logo: {
    resizeMode: 'center',
    width: 90,
    height: 80,
    marginTop: 30,
    marginRight: 10,
  },
  details: {
    marginTop: 10,
    // flex: 1,
  },
  itemName: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 10,
    marginLeft: 10,
  },
  itemDescription: {
    color: '#666',
    marginLeft: 10,
    marginRight: 8,
  },
  itemRate: {
    color: 'green',
    fontWeight: 'bold',
    marginTop: 5,
    marginLeft: 10,
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
    // backgroundColor: 'red',
  },
  navButton: {
    alignItems: 'center',
  },
});

export default Main;
