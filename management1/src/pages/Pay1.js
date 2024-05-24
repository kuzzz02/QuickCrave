import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';

const ConfirmationScreen = () => {
  return (
    <View style={styles.container}>
      {/* 背景装饰元素，这些可能是使用绝对定位的额外视图或图像 */}
      
      {/* 订单确认信息的图标 */}
      <View style={styles.iconWrapper}>
        <Image source={require('../common/pay.png')} style={styles.icon} />
      </View>

      {/* 确认文本 */}
      <Text style={styles.confirmationMessage}>Order paid successfully</Text>
      <Text style={styles.thankYouMessage}>Thanks for your trust</Text>

      {/* 操作按钮 */}
      <TouchableOpacity style={styles.homepageButton}>
        <Text style={styles.buttonText2}>Homepage</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.trackOrderButton}>
        <Text style={styles.buttonText}>track your order</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF', // 使用适合您布局的颜色
  },
  iconWrapper: {
    marginBottom: 20,
    // 根据实际情况添加必要的样式
  },
  icon: {
    width: 350, // 根据图标实际大小调整
    height: 350, // 根据图标实际大小调整
  },
  confirmationMessage: {
    fontSize: 40,
    fontWeight: '900',
    marginBottom: 8,
    textAlign: 'center',
    color: 'black'
  },
  thankYouMessage: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'grey',
    marginBottom: 24,
    textAlign: 'center',
  },
  homepageButton: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  trackOrderButton: {
    
    backgroundColor: '#90EE90',
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginBottom: 16,


  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    // 根据需要添加字体大小和权重
  },
  buttonText2: {
    fontSize: 16,
    color: 'grey',
    textAlign: 'center',
    fontWeight: 'bold',

    // 根据需要添加字体大小和权重
  },
});

export default ConfirmationScreen;
