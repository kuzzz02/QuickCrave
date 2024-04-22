import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';


const Start = () => {
    const navigation = useNavigation()
    useEffect(()=>{
        setTimeout(()=>{
          //move to delivery screen
          navigation.navigate('Start2');
        }, 3000)
      },[])
  return (
    <View style={styles.container}>
      {/* 背景图片 */}
      <Image source={require('../common/startback.jpg')} style={styles.backgroundImage} />
      
      {/* 中间的logo */}
      <View style={styles.logoContainer}>
        <Image source={require('../common/start.jpg')} style={styles.logo} />
      </View>
      
      {/* 文字 */}
      <Text style={styles.text}>QuickCrave</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200, // 根据您的实际图片尺寸调整
    height: 200, // 根据您的实际图片尺寸调整
    resizeMode: 'contain',
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 20, // 根据您的设计调整
    color: '#3cb371', // Or any other color
  },
});

export default Start;

  