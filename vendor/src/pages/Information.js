import React, { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet, Dimensions, Text, Image, KeyboardAvoidingView } from 'react-native';
import { TextInput, Button, Card, Title, Paragraph,Icon } from 'react-native-paper';
import BottomNav from './BottomNav';
import VendorService from '../services/VendorService';

const {width, height} = Dimensions.get('window');

const Information = () => {
  const {goods, counts, handleIncrease, handleDecrease, goodsImages, name} = useCart();
  const [vendors, setVendors] = useState([]);
  const [name1, setName1] = useState(vendors.name);
  const [address, setAddress] = useState(vendors.address);
  const [phone, setPhone] = useState(vendors.phone);
  const [description, setDescription] = useState('The best place in town to satisfy your cravings!');

  useEffect(() => {
    if (name) {
      VendorService.getByName(name)
        .then(response => {
          setVendors(response.data);
        })
        .catch(error => {
          console.error('Failed', error);
          setVendors({}); 
        });
    }
  }, [name]);

  const handleSave = () => {
    // 这里可以添加代码以将数据保存到服务器或本地存储
    alert('Information saved!');
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior="height"
        keyboardVerticalOffset={25}
        enabled>
    <ScrollView style={styles.ScrollView} showsVerticalScrollIndicator={false}>
    <Text style={styles.title}>
          <Icon source="map-marker" color="#06C168" size={0.057 * width} />
          Restaurant Name
        </Text>
        <View style={styles.header}>
          <Text style={styles.subtitle}>
            Managing{'\n'}Detailed Information{'\n'}
          </Text>
          <Image
            source={require('../common/delivery_staff.png')}
            style={styles.imageD}
          />
        </View>
      <Card style={styles.card}>
        <Card.Content>
          <Title>Restaurant Information</Title>
          <Paragraph>Edit your business information below:</Paragraph>
          <TextInput
            label="Name"
            value={name1}
            onChangeText={text => setName1(text)}
            style={styles.input}
            mode="outlined"
          />
          <TextInput
            label="Address"
            value={address}
            onChangeText={text => setAddress(text)}
            style={styles.input}
            mode="outlined"
          />
          <TextInput
            label="Phone"
            value={phone}
            onChangeText={text => setPhone(text)}
            style={styles.input}
            mode="outlined"
          />
          <TextInput
            label="Description"
            value={description}
            onChangeText={text => setDescription(text)}
            multiline
            numberOfLines={5}
            style={styles.input}
            mode="outlined"
          />
          <Button mode="contained" onPress={handleSave} style={styles.button}>
            Save Information
          </Button>
        </Card.Content>
      </Card>
    </ScrollView>
    </KeyboardAvoidingView>
    <BottomNav style={styles.bottomNav}/>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 0.05 * width,
  },
  ScrollView: {
    flex: 1,
  },
  title: {
    marginTop: 0.026 * height,
    marginHorizontal: width * 0.01,
    color: '#06C168',
    fontSize: 20,
    fontWeight: 'bold',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: width * 0.04,
    marginTop: 0.02 * height,
  },
  imageD: {
    marginTop: -0.05 * height,
  },
  subtitle: {
    fontSize: 23,
    fontFamily: 'AlimamaShuHeiTi-Bold',
    color: 'black',
  },
  card: {
    margin: 8,
  },
  input: {
    marginBottom: 10,
  },
  button: {
    marginTop: 10,
  },
});

export default Information;
