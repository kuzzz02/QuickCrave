import * as React from 'react';
import {View, ScrollView, StyleSheet, Image, Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  Avatar,
  Button,
  Card,
  Text,
  Title,
  Paragraph,
  Icon,
  IconButton,
  BottomNavigation,
} from 'react-native-paper';
import BottomNav from './BottomNav';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />;

const {width, height} = Dimensions.get('window');

const OrderDetail = () => {
  const navigation = useNavigation();
  const handleInformationPress = () => {
    navigation.navigate('Information');
  };
  return (
    <View style={styles.container}>
      <ScrollView style={styles.ScrollView}>
        <Text style={styles.title}>
          <Icon source="map-marker" color="#06C168" size={0.057 * width} />
          Restaurant Name
        </Text>
        <View style={styles.header}>
          <Text style={styles.subtitle}>
            Manage your Orders{'\n'} with QuickCrave{'\n'}
          </Text>
          <Image
            source={require('../common/delivery_staff.png')}
            style={styles.imageD}
          />
        </View>
        <Card style={styles.orderCard} mode="contained">
          <Card.Title
            title="Order Details"
            subtitle="Restaurant Name"
            left={LeftContent}
            style={styles.cardTitle}
          />
          <View style={styles.orderCard1}>
            <Image
              source={require('../common/70.jpg')}
              style={styles.foodImage}></Image>
            <View style={styles.item}>
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={styles.foodName}>
                11111111111111111
              </Text>
              <Text style={styles.foodRestaurant}>11</Text>
              <Text style={styles.foodPrice}>€111</Text>
              <Text style></Text>
            </View>
          </View>
        </Card>
      </ScrollView>
      <BottomNav />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 0.05 * width,
  },
  ScrollView: {
    flex: 1,
    // marginBottom: 160,
    // backgroundColor: 'red',
  },
  title: {
    marginTop: 0.026 * height,
    marginHorizontal: width * 0.01,
    fontSize: 20,
    fontWeight: 'bold',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: width * 0.04,
    marginTop: 0.02 * height,
  },
  imageD: {
    marginTop: -0.05 * height,
  },
  subtitle: {
    fontSize: 25,
    fontFamily: 'AlimamaShuHeiTi-Bold',
  },
  orderCard: {
    marginTop: -0.02 * height,
  },
  orderCard1: {
    marginTop: 0.01 * height,
    flexDirection: 'row',
    marginTop: 0.024 * height,
    width: width * 0.9,
    height: 0.135 * height,
  },
  item: {
    width: 0.377 * width,
    marginLeft: 0.02 * width,
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
    marginLeft: 0.02 * width,
    borderRadius: 8,
  },
  bottom: {
    position: 'absolute',
    right: 0,
    left: -width * 0.05,
    flexDirection: 'row',
    bottom: 0,
    height: 70,
    width: width,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconButton1: {
    marginLeft: 0.05 * width,
    color: '#06C168',
  },
  iconButton2: {
    marginRight: 0.05 * width,
  },
});

export default OrderDetail;
