import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Image, Text, Dimensions, Touchable} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Avatar} from 'react-native-paper';
import {DefaultTheme, Button, Icon} from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import VendorService from '../services/VendorService';


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
  const {vendor} = route.params;

  useEffect(() => {
    const fetchVendor = async () => {
      try {
        const response = await VendorService.getByName(vendor.name);
        // if (response.data) {
        //   setVendor({
        //     name: response.data.name,
        //     phone: response.data.phone, 
        //   });
        // }
      } catch (error) {
        console.error('Failed to fetch vendor data:', error);
      }
    };

    fetchVendor();
  }, []);

  // AMapSdk.init(
  //   Platform.select({
  //     android: "9ce3469d672f3e6922680464e4b159ce"
  //   })
  // );



  return (
    <View style={styles.container}>
     {/* <MapView
        style={{width: width, height: height*0.7}}
        mapType={MapType.Standard}

        minZoom={0}
        showsScale={true}
        compassEnabled={false}
        myLocationEnabled={true}
        rotateGesturesEnabled={false}
        zoomControlsEnabled={false}
        tiltGesturesEnabled={false}

        initialCameraPosition={{
          target: {
            latitude: 23.149011880643513,
            longitude: 113.03132632747293,
            // latitude: coords.latitude,
            // longitude: coords.longitude,
          },
          zoom: 12,
        }}

        onLoad={() => console.log("onLoad")}
        locationEnabled={true}
        onLocation={({ nativeEvent }) => {
          setCoords(nativeEvent);
          console.log(nativeEvent);
        }}
        // onPress={({ nativeEvent }) => console.log(nativeEvent)}
        // onCameraIdle={({ nativeEvent }) => console.log(nativeEvent)}
      >
        <Marker coordinate={{latitude: 23.149011880643513, longitude: 113.03132632747293}} />
        {coords.length > 1 && (
          <Polyline
            coordinates={coords}
            strokeColor="rgba(0, 0, 255, 0.5)"
            strokeWidth={5}
          />
        )}
      </MapView> */}

      <View style={styles.informationContainer}>
        <View style={styles.header}>
          <Text style={{ fontFamily: 'AlimamaShuHeiTi-Bold', fontSize: 20, color:'black' }}>
            Track Orders
          </Text>
        </View>
        <View style={styles.userInformation}>
          <Avatar.Text
            size={50}
            label={vendor.name.charAt(0)} 
            style={styles.label}
          />
          <View style={styles.deliveryGuy}>
            <Text style={{ fontFamily: 'AlimamaShuHeiTi-Bold', fontSize: 18, color:'black' }}>
              {vendor.name}
            </Text>
            <Text style={{ fontFamily: 'AlimamaShuHeiTi-Bold', fontSize: 18, color:'black' }}>
              {vendor.phone}
            </Text>
          </View>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              fontFamily: 'AlimamaShuHeiTi-Bold',
              marginTop: 5,
            }}>
            <Icon color="white" source="phone" size={20} />
            Call
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
    color:'black',
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
