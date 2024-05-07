import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, ImageBackground, Alert } from 'react-native';

const LoginScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const validateInput = () => {
    // 简单的输入验证
    const phoneRegex = /^[0-9]{10,11}$/; // 假设电话号码应该是10到11位数字
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

  const handleLogin = () => {
    if (validateInput()) {
      // 这里添加你的登录逻辑
      console.log('Logging in with:', phoneNumber, password);
      // 通常这里会是一个调用后端API的函数
      // fetch('https://yourapi.com/login', { method: 'POST', body: JSON.stringify({ phoneNumber, password }), headers: { 'Content-Type': 'application/json' } })
      //   .then(response => response.json())
      //   .then(data => {
      //     console.log(data);
      //     // 处理数据
      //   })
      //   .catch(error => {
      //     console.error('Error:', error);
      //   });
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground 
        source={{uri: 'your_image_url_here'}} // 替换成你的图片URL
        resizeMode="cover"
        style={styles.imageBackground}
      >
        <Text style={styles.welcomeText}>Welcome Back 👋</Text>
        <Text style={styles.descriptionText}>It's time for you to enjoy your delicious. Login in to start your trip!</Text>

        <TextInput
          style={styles.input}
          placeholder="Please input your Phone number"
          keyboardType="numeric"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />

        <TextInput
          style={styles.input}
          placeholder="Please input your password"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />

        <View style={styles.buttonContainer}>
          <Button
            title="Sign in"
            color="#1e90ff"
            onPress={handleLogin}
          />
        </View>

        <Text style={styles.signUpText}>
          Don't you have an account? Sign up
        </Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
  },
  descriptionText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    marginBottom: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  buttonContainer: {
    width: '100%',
    marginBottom: 12,
  },
  signUpText: {
    fontSize: 16,
    color: 'white',
    marginTop: 20,
  }
});

export default LoginScreen
