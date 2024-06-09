import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {useCart} from './CartContext';

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

const {width, height} = Dimensions.get('window');

const Main = () => {
  const navigation = useNavigation();

  const { vendors, vendorsImages } = useCart(); 

  const categories = [
    {key: 'burger', text: '🍔 Burger'},
    {key: 'pizza', text: '🍕 Pizza'},
    {key: 'sandwich', text: '🥪 Sandwich'},
  ];

  const [filteredVendors, setFilteredVendors] = useState(vendors);



  useEffect(() => {
    setFilteredVendors(vendors);
  }, [vendors]);

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
    if (selectedCategory === categoryKey) {
      setSelectedCategory('');
      setFilteredVendors(vendors);
    } else {
      setSelectedCategory(categoryKey);
      const filtered = vendors.filter(
        vendor => vendor.category === categoryKey,
      );
      setFilteredVendors(filtered);
    }
  };

  const handleSearch = query => {
    setSearchQuery(query);
    if (query.trim() === '') {
      setFilteredVendors(vendors); 
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
        <Icon source="map-marker" color="#06C168" size={0.057 * width} />
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
            <Image style={styles.logo} source={{uri: vendorsImages[vendor.id]}} />
            
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
    marginTop: 0.026 * height,
    marginHorizontal: width * 0.04,
    // backgroundColor: 'red',
    fontSize: 20,
    fontWeight: 'bold',
  },
  header: {
    flexDirection: 'row', 
    alignItems: 'center', 
    marginHorizontal: width * 0.05,
    marginTop: 0.02 * height,
  },
  imageD: {
    marginLeft: 0.04 * width,
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
    marginVertical: 0.013 * height,
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
    marginVertical: 0.013 * height,
    marginLeft: width * 0.05,
    height: 0.07 * height,
  },
  category: {
    height: 0.066 * height,
    width: 0.39 * width,
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
    justifyContent: 'space-between',
  },
  item: {
    width: 0.43*width,
    height: 0.3*height,
    marginTop: 0.013 * height,
    marginHorizontal: 2,
    backgroundColor: 'white',
    borderRadius: 8,
    margin: 0.025 * width,
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
    width: 0.23 * width,
    height: 0.11 * height,
    marginTop: 0.04 * height,
  },
  details: {
    marginTop: 0.013 * height,
    // flex: 1,
  },
  itemName: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 0.013 * height,
    marginLeft: 0.026 * width,
  },
  itemDescription: {
    color: '#666',
    marginLeft: 0.026 * width,
    marginRight: 0.024 * width,
  },
  itemRate: {
    color: 'green',
    fontWeight: 'bold',
    marginTop: 5,
    marginLeft: 0.026 * width,
    fontSize: 18,
  },
  navBar: {
    // flexDirection: 'row',
    // flex: 1,
    position: 'absolute',
    bottom: 0,
    height: 0.1 * height,
    left: 0,
    right: 0,
    marginTop: 5,
  },
  navButton: {
    alignItems: 'center',
  },
});

export default Main;