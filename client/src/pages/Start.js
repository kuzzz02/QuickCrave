import React from 'react';
import {StyleSheet, View, Image, Text, Dimensions} from 'react-native';
import {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

const Start = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
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
    left: -380,
    top: -700,
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -0.039 * height,
  },
  logo: {
    width: 0.44 * width,
    height: 0.23 * height, 
    resizeMode: 'contain',
  },
  text: {
    fontSize: 40,
    fontFamily: 'AlimamaShuHeiTi-Bold',
    marginTop: 0.013 * height, 
    color: '#3cb371', 
  },
  text2: {
    fontSize: 18,
    fontFamily: 'AlimamaShuHeiTi-Bold',
    marginTop: 0.013 * height, 
    lineHeight: 0.052 * height,
    color: 'black',
  },
});

export default Start;
