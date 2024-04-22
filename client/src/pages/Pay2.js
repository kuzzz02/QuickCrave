import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

const Pay2 = () => {
  return (
   
    <View style={styles.container}>
      
      <Text style={styles.instructionText}>You have to pay</Text>
      <Text style={styles.amountText}>57 £</Text>

      <TouchableOpacity style={[styles.button, styles.alipayButton]}>
        {/* Alipay Logo */}
        
        <Text style={styles.buttonText}>Alipay</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.wechatButton]}>
        {/* Wechat Logo */}
       
        <Text style={styles.buttonText}>Wechat</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFF', // Or any other color
  },
  instructionText: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'black', // Or any other color
  },
  amountText: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 32,
    color: 'black', // Or any other color
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 24,
    borderRadius: 25,
    marginBottom: 16,
    width: '80%', // Or any other width based on your design
  },
  alipayButton: {
    backgroundColor: '#0091EA', // Or the color used for Alipay button
  },
  wechatButton: {
    backgroundColor: '#1afa29', // Or the color used for Wechat button
  },
  buttonText: {
    marginLeft: 8,
    color: '#FFF',
    fontSize: 28,
    fontWeight: 'bold',
  },
  logo: {
    width: 24,
    height: 24,
    // resizeMode: 'contain' if needed
  },
  back: {
    position: 'absolute',
    top: 16,
    left: 16,
    color: 'black',
  },
  backButton:{
    borderWidth: 10,
    backgroundColor: 'black',
    borderRadius: 2,
  }
 
});

export default Pay2;
