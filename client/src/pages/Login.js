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
} from 'react-native';
import {Button} from 'react-native-paper';
import UserService from '../services/UserService';

const {width, height} = Dimensions.get('window');

const LogIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const handleSignUpPress = () => {
    navigation.navigate('SignUp');
  };
  const handleLogInPress = () => {
    UserService.login({name: username, password: password})
      // fetch('https://8.130.37.157:12581/user/login', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({name: username, password: password}),
      // })
      // .then(response => {
      //   // JSON.parse(response);
      //   // response.json();
      // })
      .then(res => {
        console.log(res);
        navigation.navigate('Main');
      })
      .catch(error => {
        console.log(error + ' ' + '2222');
        Alert.alert('Invalid username or password');
      });
  };

  return (
    <View
      style={styles.container}
      behavior={Platform.select({ios: 'padding', android: 'height'})}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 100}>
      <ImageBackground
        source={require('../common/70.jpg')}
        style={styles.backgroundImage}
        resizeMode="cover"
        imageStyle={{borderRadius: 20}}></ImageBackground>
      <Text style={styles.title}>Welcome Back 👋</Text>
      <Text style={styles.subtitle}>
        It's time for you to enjoy your delicious. Login in to start your trip!
      </Text>
      <View style={styles.inputContainer}>
        <Text style={styles.text}>Phone Number</Text>
        <TextInput
          style={styles.input}
          placeholder="Please input your phone number"
          onChangeText={text => setUsername(text)}
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    paddingTop: 25,
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
    marginTop: 10,
    fontFamily: 'AlimamaShuHeiTi-Bold',
  },
  subtitle: {
    fontSize: 16,
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

export default LogIn;
