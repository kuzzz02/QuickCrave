import React from 'react';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ImageBackground,
  Dimensions,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import VendorService from '../services/VendorService';
import OrdersService from '../services/OrdersService';
import {Button} from 'react-native-paper';
import { useCart } from './CartContext';
import { ScrollView } from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('window');

const LogIn = () => {
  const [vendorName, setVendorname] = useState('');
  const [password, setPassword] = useState('');
  const { setName } = useCart();
  const navigation = useNavigation();
  const handleSignUpPress = () => {
    // navigation.navigate('Register');
    OrdersService.getById(1)
  .then(response => {
    console.log('GetByName response: ', response);
  })
  .catch(error => {
    console.error('GetByName error: ', error);
  });
  };
  
  const handleLogInPress = () => {
    // if (!vendorName || !password) {
    //   Alert.alert('Error', 'Username and password cannot be empty');
    //   return;
    // }
    // VendorService.login({name: vendorName, password: password})
    // .then(res => {
    //   if (res.data.message === "success login") {  
    //     setName(vendorName);
    //     navigation.navigate('OrderDetail');
    //   } else {
    //     console.log("Login failed: ", res.status);
    //     Alert.alert('Login failed, please try again');
    //   }
    // })
    //   .catch(error => {
    //     console.log(error, ' 2222');
    //     Alert.alert('Login error, please try again');
    //   });
    navigation.navigate('OrderDetail');
  };

  

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="position"
      enabled>
        <ScrollView>
      <ImageBackground
        source={require('../common/70.jpg')}
        style={styles.backgroundImage}
        resizeMode="cover"
        imageStyle={{borderRadius: 20}}></ImageBackground>
      <Text style={styles.title}>Welcome Back 👋</Text>
      <Text style={styles.subtitle}>
        Let's better managing the restaurant. Login in to start your trip!
      </Text>
      <View style={styles.inputContainer}>
        <Text style={styles.text}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder="Please input your username"
          onChangeText={text => setVendorname(text)}
          // keyboardType="phone-pad"
        />
        <Text style={styles.text2}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Please input your password"
          onChangeText={text => setPassword(text)}
          secureTextEntry={true}
        />
      </View>
      <Button
        style={styles.button}
        labelStyle={{fontSize: 16}}
        buttonColor="#162D3A"
        mode="contained"
        onPress={handleLogInPress}>
        Log In
      </Button>
      <Text style={styles.signupText}>
        Don't you have an account?{' '}
        <Text style={styles.signupLink} onPress={handleSignUpPress}>
          Sign up
        </Text>
      </Text>
      </ScrollView>
    </KeyboardAvoidingView>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0.104 * width,
    paddingTop: 0.033 * height,
  },
  backgroundImage: {
    // flex: 1,
    justifyContent: 'center',
    // marginHorizontal: width * 0.05,
    borderRadius: 20,
    height: height * 0.3,
  },
  title: {
    fontSize: 24,
    color: 'black',
    // fontWeight: 'bold',
    marginTop: 0.013 * height,
    fontFamily: 'AlimamaShuHeiTi-Bold',
  },
  subtitle: {
    fontSize: 16,
    color: 'black',
    marginTop: 0.013 * height,
    fontFamily: 'AlimamaShuHeiTi-Bold',
  },
  inputContainer: {
    marginTop: 0.02 * height,
    flexGrow: 1,
  },
  text: {
    marginTop: 5,
    fontSize: 16,
    color: 'black',
    // fontFamily: 'SmileySans-Oblique',
  },
  text2: {
    marginTop: 5,
    fontSize: 16,
    color: 'black',
    marginTop: 15,
    // fontFamily: 'SmileySans-Oblique',
  },
  input: {
    backgroundColor: '#F3F7FB',
    color: 'black',
    borderRadius: 10,
  },
  button: {
    marginTop: 0.039 * height,
    borderRadius: 12,
  },
  signupText: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
    marginTop: 0.026 * height,
  },
  signupLink: {
    fontWeight: 'bold',
    color: '#4f6d7a',
  },
});

export default LogIn;
