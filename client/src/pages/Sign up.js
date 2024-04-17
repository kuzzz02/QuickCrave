import React from 'react';
import { View, Text, StyleSheet, Image ,TouchableOpacity, TextInput } from 'react-native';


const App = () => {
  const handleSignUpPress = () => {
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('./common/SU.jpg')}
        style={styles.image}
      />
      <View style={styles.textBox}>
        <Text style={styles.text1}>Welcome to QuickCrave</Text>
        <Text style={styles.text2}>Get best experence in QuickCrave by signing up!</Text>
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

      />
      <Text style={styles.text5}>Comfirm your password</Text>
      <TextInput
              style={styles.input3}
              placeholder="Please input your password again"
              placeholderTextColor="#8897AD"

      />
      <TouchableOpacity style={styles.button} onPress={handleSignUpPress}>
        <Text style={styles.buttonText}>Sign up</Text>
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
     color: 'black'
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
     color: '#0C1421',
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
  text5: {
     fontFamily: 'AlibabaSans',
     position: 'absolute',
     top: 500,
     left: 46,
     fontSize: 16,
     color: '#0C1421',
     fontFamily: 'SmileySans-Oblique',
  },
  input3: {
     width: '78%',
     height: 40,
     top: 450,
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
      top: 600,
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
      fontFamily: 'SmileySans-Oblique',
      color: '#FFFFFF',
  },

});

export default App;

