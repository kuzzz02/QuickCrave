import React, { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet, Dimensions, Text, Image, KeyboardAvoidingView } from 'react-native';
import { TextInput, Button, Card, Title, Paragraph,Icon } from 'react-native-paper';
import BottomNav from './BottomNav';
import VendorService from '../services/VendorService';
import {useCart} from './CartContext';
import DeliveryService from '../services/DeliveryService';

const {width, height} = Dimensions.get('window');

const Information = () => {
  const {name} = useCart();
  // const [vendors, setVendors] = useState([]);
  const [vendors, setVendors] = useState([]);
  const [deliver, setDeliver] = useState([]);
  const [name1, setName1] = useState(vendors.name);
  const [address, setAddress] = useState(vendors.address);
  const [phone, setPhone] = useState(vendors.phone);
  

  useEffect(() => {
    if (name) {
      DeliveryService.getByName(name)
        .then(response => {
          setDeliver(response.data);
        })
        .catch(error => {
          console.error('Failed', error);
        });
    }
  }, [name]);

  const handleSave = () => {
    VendorService.updateName(vendors.id, vendors.name);
    VendorService.updateAddress(vendors.id, vendors.address);
    VendorService.updatePhone(vendors.id, vendors.phone);
    VendorService.updateDescription(vendors.id, vendors.description);
    alert('Information saved!');
    // console.log('In',vendors.id);
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior="height"
        keyboardVerticalOffset={25}
        enabled>
    <ScrollView style={styles.ScrollView} showsVerticalScrollIndicator={false}>
    
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
            label={deliver.name}
            value={name1}
            onChangeText={text => setVendors(prev => ({ ...prev, name1: text }))}
            style={styles.input}
            mode="outlined"
          />
          <TextInput
            label={deliver.address}
            value={address}
            onChangeText={text => setVendors(prev => ({ ...prev, address: text }))}
            style={styles.input}
            mode="outlined"
          />
          <TextInput
            label={deliver.phone}
            value={phone}
            onChangeText={text => setVendors(prev => ({ ...prev, phone: text }))}
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
    marginLeft: -0.01 * width,
    color: '#06C168',
    fontSize: 20,
    fontWeight: 'bold',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 0.02 * height,
  },
  imageD: {
    marginTop: -0.03 * height,
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
