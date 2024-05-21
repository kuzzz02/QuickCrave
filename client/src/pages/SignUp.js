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
import {Button} from 'react-native-paper';
import UserService from '../services/UserService';

const {width, height} = Dimensions.get('window');

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const navigation = useNavigation();
  const handleLoginPress = () => {
    navigation.navigate('LogIn');
  };
  const handleSignUpPress = () => {
    if (!username || !password2) {
      Alert.alert('Error', 'Username and password cannot be empty');
      return;
    }
    if (password1 !== password2) {
      Alert.alert('Password does not match');
      return;
    }
    UserService.signup({name: username, password: password2})
      .then(res => {
        navigation.navigate('LogIn');
      })
      .catch(error => {
        Alert.alert('Invalid username or password');
        console.log(error + ' ' + '111');
      });
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="height"
      keyboardVerticalOffset={-25}
      enabled>
      <ImageBackground
        source={require('../common/SU.jpg')}
        style={styles.backgroundImage}
        resizeMode="cover"
        imageStyle={{borderRadius: 20}}></ImageBackground>
      <Text style={styles.title}>Welcome to QuickCrave</Text>
      <Text style={styles.subtitle}>
        Get best experience in QuickCrave by signing up!
      </Text>
      <View style={styles.inputContainer}>
        <Text style={styles.text}>Phone Number</Text>
        <TextInput
          style={styles.input}
          placeholder="Please input your phone number"
          onChangeText={text => setUsername(text)}
          // keyboardType="phone-pad"
        />
        <Text style={styles.text}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Please set your password"
          onChangeText={text => setPassword1(text)}
          secureTextEntry={true}
        />
        <Text style={styles.text}>Confirm your password</Text>
        <TextInput
          style={styles.input}
          placeholder="Please confirm your password"
          onChangeText={text => setPassword2(text)}
          secureTextEntry={true}
        />
      </View>
      <Button
        style={styles.button}
        labelStyle={{fontSize: 16}}
        buttonColor="#162D3A"
        mode="contained"
        onPress={handleSignUpPress}>
        Sign Up
      </Button>
      <Text style={styles.signupText}>
        Already have an account?{' '}
        <Text style={styles.loginLink} onPress={handleLoginPress}>
          Login
        </Text>
      </Text>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'blue',
    padding: 0.104 * width,
    paddingTop: 0.02 * height,
  },
  backgroundImage: {
    justifyContent: 'center',
    borderRadius: 20,
    height: height * 0.3,
  },
  title: {
    fontSize: 28,
    color: 'black',
    // fontWeight: 'bold',
    marginTop: 0.013 * height,
    fontFamily: 'AlimamaShuHeiTi-Bold',
    // alignSelf: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: 'black',
    marginTop: 0.013 * height,
    fontFamily: 'AlimamaShuHeiTi-Bold',
  },
  inputContainer: {
    marginTop: 0.02 * height,
    flexGrow: 1,
    // justifyContent: 'space-around',
  },
  text: {
    marginTop: 5,
    fontSize: 16,
    color: 'black',
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
  loginLink: {
    fontWeight: 'bold',
    color: '#4f6d7a',
  },
});

export default SignUp;
