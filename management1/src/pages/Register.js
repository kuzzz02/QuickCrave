import React from 'react';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import {Button} from 'react-native-paper';
import {launchImageLibrary} from 'react-native-image-picker';
// import UserService from '../services/UserService';

const {width, height} = Dimensions.get('window');



const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [imageUri, setImageUri] = useState(null);
  const navigation = useNavigation();

  const categories = [
    {key: 'burger', text: '🍔 Burger',image: require("../common/goods8.png")},
    {key: 'pizza', text: '🍕 Pizza',image: require("../common/sandwich.png")},
    {key: 'sandwich', text: '🥪 Sandwich',image: require("../common/sandwich.png")},
  ];

  const handleSignUpPress = () => {
    navigation.navigate('SignUp');
  };
  const openGallery = () => {
    const options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const source = {uri: response.assets[0].uri};
        setImageUri(source);
      }
    });
  };

  return (
    <ScrollView>
      <KeyboardAvoidingView
        style={styles.container}
        behavior="height"
        keyboardVerticalOffset={-25}
        enabled>
          <Text style={styles.title}>Set your restaurant picture</Text>
        <TouchableOpacity onPress={openGallery} style={styles.backgroundImage}>
          <Image
            source={imageUri ? imageUri : require('../common/adding.jpg')}
            style={styles.backgroundImage}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Set your restaurant name</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Please input your restaurant name"
            onChangeText={text => setUsername(text)}
          />
          <Text style={styles.title}>Input your Phone Number</Text>
          <TextInput
            style={styles.input}
            placeholder="Please input your phone number"
            onChangeText={text => setPassword(text)}
            secureTextEntry={true}
          />
          <Text style={styles.title}>Set your address</Text>
          <TextInput
            style={styles.input}
            placeholder="Please set your address"
            onChangeText={text => setPassword(text)}
            secureTextEntry={true}
          />
          <View style={styles.header}>
        <Text style={styles.subtitle}>
          Choose Your{'\n'}
          <Text style={styles.subtitle}>Restaurant Type</Text>
        </Text>
        <Image
          source={require('../common/restaurant.png')}
          style={styles.imageD}
        />
      </View>
      <Text style={styles.categoryTitle}>Categories:</Text>
      <ScrollView contentContainerStyle={styles.itemContainer}>
        {categories.map(category => (
          <TouchableOpacity
            key={category.key}
            style={styles.item}
            >
            <View style={styles.imageBox}>
            <Image style={styles.logo} source={category.image} />
            </View>
            <View style={styles.details}>
              <Text style={styles.itemName}>{category.key}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
        </View>
        <Button
          style={styles.button}
          labelStyle={{fontSize: 16}}
          buttonColor="#162D3A"
          mode="contained">
          Log In
        </Button>
        <Text style={styles.signupText}>
          Don't you have an account?{' '}
          <Text style={styles.signupLink} onPress={handleSignUpPress}>
            Sign up
          </Text>
        </Text>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: width * 0.09,
    // padding: 0.104 * width,
    // paddingTop: 0.033 * height,
  },
  backgroundImage: {
    justifyContent: 'center',
    marginTop: 0.026 * height,
    alignSelf: 'center',
    borderRadius: 20,
    height: height * 0.3,
    width: width * 0.8,
  },
  title: {
    fontSize: 24,
    color: 'black',
    // fontWeight: 'bold',
    marginTop: 0.026 * height,
    fontFamily: 'AlimamaShuHeiTi-Bold',
  },
  header: {
    flexDirection: 'row', // 水平排列
    alignItems: 'center', // 垂直居中
    // marginHorizontal: width * 0.05,
    marginTop: 0.02 * height,
  },
  imageD: {
    height: 0.13 * height,
    width: 0.13 * height,
    resizeMode: 'contain',
  },
  subtitle: {
    fontSize: 28,
    color: 'black',
    fontFamily: 'AlimamaShuHeiTi-Bold',
  },
  inputContainer: {
    marginTop: 0.02 * height,
    flexGrow: 1,
  },
  text: {
    marginTop: 5,
    fontSize: 16,
    color: 'black',
    // fontFamily: 'SmileySans-Oblique',
  },
  text2: {
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
  itemContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: width,
    // justifyContent: 'space-between',
    // padding: 10,
  },
  item: {
    width: 0.4*width,
    height: 0.25*height,
    marginTop: 0.013 * height,
    marginHorizontal: 2,
    backgroundColor: 'white',
    borderRadius: 8,
    margin: 0.025 * width,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 4,
  },
  imageBox: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
  logo: {
    resizeMode: 'center',
    width: 0.25 * width,
    height: 0.13 * height,
    marginTop: 0.04 * height,
  },
  details: {
    marginTop: 0.013 * height,
    // flex: 1,
  },
  itemName: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
    marginTop: 0.013 * height,
    marginLeft: 0.026 * width,
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
  signupLink: {
    fontWeight: 'bold',
    color: '#4f6d7a',
  },
});

export default Register;
