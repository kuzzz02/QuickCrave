import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image ,TouchableOpacity, TextInput,Alert } from 'react-native';
import { Button, Icon, WhiteSpace, WingBlank } from '@ant-design/react-native'


const LogIn = () => {
  const navigation = useNavigation();
  //State for input fields
  const [phone, setPhone] = useState(''); 
  const [password, setPassword] = useState('');
  const handleSignUpPress = () => {
    navigation.navigate('SignUp');
  };
  const validateInput = () => {
    //Simple validate
    //Assume that phone numbers should be 10 or 11 digits
    const phoneRegex = /^[0-9]{10,11}$/; 
    if (!phoneRegex.test(phoneNumber)) {
      Alert.alert("Invalid Phone Number", "Phone number should be 10 to 11 digits.");
      return false;
    }
    if (password.length < 6) {
      Alert.alert("Invalid Password", "Password should be at least 6 characters.");
      return false;
    }
    return true;
  };
  const handleSignInPress = () => {
    if (validateInput()) {
      console.log('Logging in with:', phoneNumber, password);
      //TODO: Implement login
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../common/70.jpg')}
        style={styles.image}
      />
      <View style={styles.textBox}>
        <Text style={styles.text1}>Welcome Back 👋</Text>
        <Text style={styles.text2}>It's time for you to enjoy your delicious. Login in to start your trip!</Text>
      </View>
      <Text style={styles.text3}>Phone</Text>
      <TextInput
              style={styles.input1}
              placeholder="Please input your Phone number"
              placeholderTextColor="#8897AD"
      />
      <Text style={styles.text4}>Password</Text>
      <TextInput
              style={styles.input2}
              placeholder="Please input your password"
              placeholderTextColor="#8897AD"
              secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button}/*signin跳转*/onPress={handleSignInPress}>
        <Button type="primary">primary</Button>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> navigation.navigate('SignUp')}>
        <Text style={styles.text5}>Don't you have an account? <Text style={styles.signUpText}>Sign up</Text></Text>
      </TouchableOpacity>
     </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    position: 'relative',
  },
  image: {
    width: '78%',
    height: '28%',
    borderRadius: 20,
    position: 'absolute',
    top: 42,
  },

  textBox: {
    position: 'absolute',
    width: '78%',
    height: '13%',
    top: 250,
    padding: 0,
    paddingLeft: 1,
  },
  text1: {
    fontFamily: 'SmileySans-Oblique',
    fontWeight: '700',
    fontSize: 24,
    letterSpacing: 0.24,
    color: 'black',
    textAlign: 'left',
  },
  text2: {
    fontFamily: 'SmileySans-Oblique',
    fontWeight: '700',
    fontSize: 16,
    letterSpacing: 0.14,
    color: 'black',
    textAlign: 'left',
    marginTop: 1,
  },
  text3: {
     fontFamily: 'SmileySans-Oblique',
     position: 'absolute',
     top: 340,
     left: 46,
     fontSize: 16,
     color: '#0C1421'
  },
  input1: {
     width: '78%',
     height: 40,
     top: 368,
     backgroundColor: '#F3F7FB',
     borderRadius: 8,
     color: '#8897AD',
     fontFamily: 'SmileySans-Oblique',
     fontWeight: '400',
     fontSize: 14,
     letterSpacing: 1.4,
     textAlign: 'left',
     paddingHorizontal: 10,
  },
  text4: {
     fontFamily: 'SmileySans-Oblique',
     position: 'absolute',
     top: 420,
     left: 46,
     fontSize: 16,
     color: '#0C1421'
  },
  input2: {
     width: '78%',
     height: 40,
     top: 410,
     backgroundColor: '#F3F7FB',
     borderRadius: 8,
     color: '#8897AD',
     fontFamily: 'SmileySans-Oblique',
     fontWeight: '400',
     fontSize: 14,
     letterSpacing: 1.4,
     textAlign: 'left',
     paddingHorizontal: 10,
  },
  button: {
      width: '78%',
      position: 'absolute',
      height: 36,
      top: 530,
      borderRadius: 12,
      paddingVertical: 0,
      paddingHorizontal: 14,
      backgroundColor: '#162D3A',
      justifyContent: 'center',
      alignItems: 'center',
  },
  buttonText: {
      fontSize: 16,
      fontWeight: '400',
      letterSpacing: 1.6,
      color: '#FFFFFF',
      fontFamily: 'SmileySans-Oblique',
  },
  text5: {
      fontFamily: 'SmileySans-Oblique',
      top: 520,
      fontSize: 16,
      fontWeight: '400',
      letterSpacing: 1.6,
      color: '#8897AD',
  },
  signUpText: {
      color: '#1E4AE9',
  },
});

export default LogIn;

