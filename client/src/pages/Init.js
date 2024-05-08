import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'



const Init = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* 食物插图 */}
      <Image source={require('../common/back.png')} style={styles.image} />
      
      {/* 描述性文本 */}
      <Text style={styles.title}>QuickCrave will give you best 
                                        eating experience</Text>
      <Text style={styles.subtitle}>Enjoy a fast and smooth food            delivery at your doorstep</Text>
      
      {/* 登录按钮 */}
      <TouchableOpacity onPress={()=> navigation.navigate('LogIn')}
      style={styles.loginButton}>
        
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      
      {/* 注册链接 */}
      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Don't you have an account? </Text>
        <TouchableOpacity onPress={()=> navigation.navigate('SignUp')}>
          <Text style={styles.signupLink}>Sign up</Text>
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
    padding: 20,
    backgroundColor: '#FFF', // 根据您的图片背景颜色调整
  },
  image: {
    width: 300, // 根据您的实际图片尺寸调整
    height: 300, // 根据您的实际图片尺寸调整
    resizeMode: 'contain',
  },
  title: {
    fontSize: 30,
    fontWeight: '900',
    textAlign: 'center',
    marginBottom: 10,
    color: '#000000'
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#000'
  },
  loginButton: {
    backgroundColor: '#4CAF50', // 按钮的背景颜色
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 5,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
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
    color: '#0000FF', // 注册链接颜色
  },
});

export default Init;
