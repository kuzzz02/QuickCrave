import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, ScrollView } from 'react-native';

const Main = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://8.130.37.157:12581/user/selectByName?name=KFC', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(response => {
      console.log('HTTP Response Status:', response.status); 
      return response.text();
    })
    .then(text => {
      console.log('HTTP Response Body:', text);
      if (!text) {
        throw new Error('Empty response body');  // 抛出错误，或者进行其他处理
      }
      return JSON.parse(text);
    })
    .then(data => {
      setUser(data);
      setLoading(false);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      setError(error.toString());
      setLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>Error: {error}</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>User Information</Text>
      <Text style={styles.info}>Name: {user.name}</Text>
      <Text style={styles.info}>Email: {user.email}</Text>
      <Text style={styles.info}>Phone: {user.phone}</Text>
      <Text style={styles.info}>Address: {user.address}</Text>
      <Text style={styles.info}>State: {user.state}</Text>
      <Text style={styles.info}>Date Joined: {user.date}</Text>
      <Text style={styles.info}>Description: {user.description}</Text>
      <Text style={styles.info}>Category: {user.category}</Text>
      <Text style={styles.info}>Service Time: {user.time} minutes</Text>
      <Text style={styles.info}>Delivery Fee: ${user.fee}</Text>
      <Text style={styles.info}>Rating: {user.quantity} stars</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10
  },
  info: {
    fontSize: 18,
    marginBottom: 5
  }
});

export default Main;
