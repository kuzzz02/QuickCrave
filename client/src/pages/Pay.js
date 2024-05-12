import React from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';
import {Button, IconButton, Icon} from 'react-native-paper';

const {width, height} = Dimensions.get('window');

const Pay = ({route}) => {
  const {total} = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>You have to pay</Text>
        <Text style={styles.text2}>€{total}</Text>
        <Button
          style={styles.button1}
          labelStyle={{fontSize: 16}}
          mode="contained">
          <Text
            style={{
              fontFamily: 'AlimamaShuHeiTi-Bold',
              fontSize: 22,
              lineHeight: 40,
            }}>
            Alipay
          </Text>
        </Button>
        <Button
          //   icon={source={require('../common/alipay.png')}}
          style={styles.button2}
          labelStyle={{fontSize: 16}}
          mode="contained">
          <Text
            style={{
              fontFamily: 'AlimamaShuHeiTi-Bold',
              fontSize: 22,
              lineHeight: 40,
            }}>
            Wechat
          </Text>
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: width * 0.05,
  },
  header: {
    alignSelf: 'center',
    width: width * 0.8,
    height: height * 0.2,
    marginTop: height * 0.2,
  },
  text: {
    textAlign: 'center',
    fontFamily: 'AlimamaShuHeiTi-Bold',
    fontSize: 30,
    lineHeight: 40,
    color: 'black',
  },
  text2: {
    textAlign: 'center',
    marginTop: 20,
    fontFamily: 'AlimamaShuHeiTi-Bold',
    fontSize: 38,
    color: 'black',
  },
  button1: {
    marginTop: 50,
    backgroundColor: '#5296E1',
    borderRadius: 35,
    height: 88,
    justifyContent: 'center',
  },
  button2: {
    marginTop: 20,
    backgroundColor: '#31C72C',
    borderRadius: 35,
    height: 88,
    justifyContent: 'center',
  },
});

export default Pay;
