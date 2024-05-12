import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

const Start = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      //move to delivery screen
      navigation.navigate('Init');
    }, 1500);
  }, []);
  return (
    <View style={styles.container}>
      <Image
        source={require('../common/Pattern.png')}
        style={styles.backgroundImage}
      />

      <View style={styles.logoContainer}>
        <Image source={require('../common/start.jpg')} style={styles.logo} />
      </View>
      <Text style={styles.text}>QuickCrave</Text>
      <Text style={styles.text2}>Deliver Favourite Food</Text>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    left: -500,
    top: -700,
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -30,
  },
  logo: {
    width: 170,
    height: 170, 
    resizeMode: 'contain',
  },
  text: {
    fontSize: 40,
    fontFamily: 'AlimamaShuHeiTi-Bold',
    marginTop: 10, 
    color: '#3cb371', 
  },
  text2: {
    fontSize: 18,
    fontFamily: 'AlimamaShuHeiTi-Bold',
    marginTop: 10, 
    color: 'black',
  },
});

export default Start;
