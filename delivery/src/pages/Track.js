import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  Dimensions,
  Touchable,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Avatar} from 'react-native-paper';
import {DefaultTheme, Button, Icon} from 'react-native-paper';
import {TouchableOpacity} from 'react-native-gesture-handler';
import VendorService from '../services/VendorService';
import MapView,{Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import http from '../http';

const {width, height} = Dimensions.get('window');

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#81b29a',
    accent: '#f44336',
  },
};

const Track = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const {vendorAddress, userAddress} = route.params;

  useEffect(() => {
    fetchRoute(); 
  }, []);


  
  const [region, setRegion] = useState();
  const [origin, setOrigin] = useState();
  const [destination, setDestination] = useState();
  const GOOGLE_MAPS_APIKEY = 'AIzaSyB0TgrPgGkxlk2awYA5Wqkk0f2n6rlM_6s';

  async function fetchRoute () {
   const _origin = await getPosition(vendorAddress)
   const _destination = await getPosition(userAddress)
    setRegion({
      ..._origin,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
    setOrigin(_origin)
    setDestination(_destination)
  }
  async function getPosition(address){
  const res = await http.get(`https://maps.google.com/maps/api/geocode/json?address=${encodeURI(address)}&key=${GOOGLE_MAPS_APIKEY}`)
  const data = res.data;
  if(!data.status === 'OK'){
    return {
      latitude:0,
      longitude:0,
    }
  }
  const location = data.results[0].geometry.location;
  return {
    latitude: location.lat,
    longitude: location.lng,
  }
  }
  return (
    <View style={styles.container}>
      {origin && destination && (
        <MapView
          style={{flex: 1}}
          initialCamera={{center: origin, zoom: 14, pitch: 90, heading: 0}}>
          <MapViewDirections
            origin={origin}
            mode="WALKING"
            strokeWidth={5}
            strokeColor="hotpink"
            destination={destination}
            apikey={GOOGLE_MAPS_APIKEY}
          />

          <Marker key={'start'} coordinate={origin} title={'Start'} />
          <Marker key={'end'} coordinate={destination} title={'End'} />
        </MapView>
      )}
      <View style={styles.informationContainer}>
        <View style={styles.header}>
          <Text
            style={{
              fontFamily: 'AlimamaShuHeiTi-Bold',
              fontSize: 20,
              color: 'black',
            }}>
            Track Orders
          </Text>
        </View>
        {/* <View style={styles.userInformation}>
          <Avatar.Text
            size={50}
            label={vendor.name.charAt(0)}
            style={styles.label}
          />
          <View style={styles.deliveryGuy}>
            <Text
              style={{
                fontFamily: 'AlimamaShuHeiTi-Bold',
                fontSize: 18,
                color: 'black',
              }}>
              {vendor.name}
            </Text>
            <Text
              style={{
                fontFamily: 'AlimamaShuHeiTi-Bold',
                fontSize: 18,
                color: 'black',
              }}>
              {vendor.phone}
            </Text>
          </View>
        </View> */}
        <TouchableOpacity style={styles.button}>
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              fontFamily: 'AlimamaShuHeiTi-Bold',
              marginTop: 5,
            }}>
            <Icon color="white" size={20} />
            Delivery Finished
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  informationContainer: {
    position: 'absolute',
    bottom: 0.02 * height,
    width: width * 0.9,
    marginHorizontal: width * 0.05,
    height: 0.266 * height,
    backgroundColor: '#dae3f3',
    borderRadius: 25,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: width * 0.05,
    marginTop: 0.013 * height,
    height: 0.039 * height,
    lineHeight: 35,
  },
  userInformation: {
    marginTop: 0.013 * height,
    marginHorizontal: width * 0.05,
    height: 0.106 * height,
    backgroundColor: 'white',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  deliveryGuy: {
    height: 0.053 * height,
    // backgroundColor: 'red',
    color: 'black',
    flex: 1,
    marginHorizontal: 10,
    justifyContent: 'center',
  },
  label: {
    backgroundColor: '#dae3f3',
    alignItems: 'center',
    alignSelf: 'center',
    marginLeft: 0.013 * width,
  },
  button: {
    marginTop: 0.013 * height,
    borderRadius: 10,
    backgroundColor: '#06c168',
    marginHorizontal: width * 0.05,
    height: 0.066 * height,
    justifyContent: 'center',
    alignItems: 'center',
    lineHeight: 50,
  },
});

export default Track;