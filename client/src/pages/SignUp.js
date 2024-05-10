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
  Alert
} from 'react-native';
import {Button} from 'react-native-paper';
import UserService from '../services/UserService';

const {width, height} = Dimensions.get('window');

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const handleSignUpPress = () =>{
     UserService.signup({name:username,password:password})
//    fetch('http://localhost:8000/user/signup', {
//      method: 'POST',
//      headers: {
//        'Content-Type': 'application/json',
//      },
//      body: JSON.stringify({
//        name: username,
//        password: password
//      }),
//    })
    .then(res => {
      console.log(res);
      navigation.navigate('LogIn');
    })
    .catch(error =>{
      Alert.alert("Invalid username or password")
      console.log(error + " " + "111");
      // if(!error.response) {
      //   console.log('!Network Error!');
      // } 
      // else{
      //   console.log(error.response.data);
      //   console.log(error.response.status);
      //   console.log(error.response.headers);
      // }
    })
  };

  return (
    <View
      style={styles.container}
      behavior={Platform.select({ios: 'padding', android: 'height'})}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 100}>
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
          secureTextEntry={true}
        />
        <Text style={styles.text}>Confirm your password</Text>
        <TextInput
          style={styles.input}
          placeholder="Please confirm your password"
          onChangeText={text => setPassword(text)}
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'blue',
    padding: 40,
    paddingTop: 15,
  },
  backgroundImage: {
    justifyContent: 'center',
    borderRadius: 20,
    height: height * 0.3,
    backgroundColor: 'red',
  },
  title: {
    fontSize: 28,
    color: 'black',
    // fontWeight: 'bold',
    marginTop: 10,
    fontFamily: 'AlimamaShuHeiTi-Bold',
    // alignSelf: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: 'black',
    marginTop: 10,
    fontFamily: 'AlimamaShuHeiTi-Bold',
  },
  inputContainer: {
    marginTop: 15,
    flexGrow: 1,
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
    marginTop: 30,
    borderRadius: 12,
  },
  signupText: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
    marginTop: 20,
  },
  signupLink: {
    fontWeight: 'bold',
    color: '#4f6d7a',
  },
});

export default SignUp;
