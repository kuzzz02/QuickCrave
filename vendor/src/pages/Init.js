import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const {width, height} = Dimensions.get('window');

const Init = () => {
  const navigation = useNavigation();
  const handleSignUpPress = () => {
    navigation.navigate('LogIn');
  };
  const handleLogInPress = () => {
    navigation.navigate('LogIn');
  };
  return (
    <View style={styles.container}>
      <Image
        source={require('../common/Illustration.png')}
        style={styles.foodImage}></Image>

      <Text style={styles.title}>
        QuickCrave will give you best managing experience
      </Text>
      <Text style={styles.subtitle}>
        Enjoy a convenient and efficient restaurant management system
      </Text>

      <TouchableOpacity onPress={handleSignUpPress} style={styles.loginButton}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={['#53E88B', '#15BE77']}
          style={styles.linearGradient}
        >
          <Text style={styles.buttonText}>Sign up</Text>
        </LinearGradient>
      </TouchableOpacity>

      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Already have an account? </Text>
        <TouchableOpacity onPress={(handleLogInPress)}>
          <Text style={styles.signupLink}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginHorizontal: width * 0.05,
  },
  title: {
    fontSize: 30,
    fontFamily: 'AlimamaShuHeiTi-Bold',
    textAlign: 'center',
    color: 'black',
  },
  subtitle: {
    fontSize: 20,
    fontFamily: 'AlimamaShuHeiTi-Bold',
    textAlign: 'center',
    marginBottom: 0.013 * height,
    color: 'black',
  },
  linearGradient: {
    flex: 1,
    width: '100%',
    borderRadius: 15,
    justifyContent: 'center', 
  },
  loginButton: {
    width: '55%',
    height: 0.1 * height, 
    borderRadius: 15,
    overflow: 'hidden', 
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  signupContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  signupText: {
    fontSize: 16,
  },
  signupLink: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4f6d7a',
  },
});

export default Init;
