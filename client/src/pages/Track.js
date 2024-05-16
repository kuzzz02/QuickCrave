import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Image, Text, Dimensions, Touchable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Avatar} from 'react-native-paper';
import {DefaultTheme, Button, Icon} from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';

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
  const navigation = useNavigation();
  const [map, setMaps] = useState([]);
  const [deliver, setDeliver] = useState([]);

  return (
    <View style={styles.container}>
      <View style={styles.informationContainer}>
        <View style={styles.header}>
          <Text style={{fontFamily: 'AlimamaShuHeiTi-Bold', fontSize: 20}}>
            Track Orders
          </Text>
        </View>
        <View style={styles.userImformation}>
          <Avatar.Text
            theme={theme}
            size={50}
            label="XD"
            style={{marginLeft: 10}}
          />
          <View style={styles.deliveryGuy}>
            <Text style={{fontFamily: 'AlimamaShuHeiTi-Bold', fontSize: 18}}>
              Mr.Cao
            </Text>
            <Text style={{fontFamily: 'AlimamaShuHeiTi-Bold', fontSize: 18}}>
              xxxxxxxxx
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.button}
        //   labelStyle={{fontSize: 20}}
        //   buttonColor="#06c168"
          //   onPress={handleOrderPress}
          >
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
    bottom: 15,
    width: width * 0.9,
    marginHorizontal: width * 0.05,
    height: 200,
    // backgroundColor: 'red',
    borderRadius: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: width * 0.05,
    marginTop: 10,
    height: 30,
    lineHeight: 35,
  },
  userImformation: {
    marginTop: 10,
    marginHorizontal: width * 0.05,
    height: 80,
    backgroundColor: 'blue',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  deliveryGuy: {
    height: 60,
    backgroundColor: 'red',
    flex: 1,
    marginHorizontal: 10,
    justifyContent: 'center',
  },
  button: {
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: '#06c168',
    marginHorizontal: width * 0.05,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    lineHeight: 50,
  },
});

export default Track;
