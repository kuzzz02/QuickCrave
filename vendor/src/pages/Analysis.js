import React from 'react';
import { View, Dimensions, ScrollView, Text,StyleSheet, Image } from 'react-native';
import { BarChart, LineChart } from 'react-native-chart-kit';
import {
    Avatar,
    Button,
    Card,
    Title,
    Paragraph,
    Icon,
    IconButton,
    BottomNavigation,
  } from 'react-native-paper';
import BottomNav from './BottomNav';

const {width, height} = Dimensions.get('window');
const chartWidth = width * 1.5;

const Analysis = () => {
    const barData = {
      labels: ['Pizza', 'Burger', 'Sushi', 'Pasta', 'Salad'],
      datasets: [{
        data: [300, 450, 220, 350, 500]
      }]
    };
  
    const lineData = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
      datasets: [{
        data: [20, 45, 28, 80, 99],
        color: (opacity = 1) => `rgba(53, 162, 235, ${opacity})`, // 蓝色
        strokeWidth: 2 // optional
      }]
    };
  
    const chartConfig = {
      backgroundGradientFrom: "#ffffff",
      backgroundGradientTo: "#ffffff",
      decimalPlaces: 2,
      color: (opacity = 1) => `rgba(255, 99, 132, ${opacity})`, // 柔和的红色
      labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // 黑色标签
      style: {
        borderRadius: 16,
        marginVertical: 8,
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
      }
    };
  
    return (
        <View style={styles.container}>
      <ScrollView style={styles.ScrollView}>
        <Text style={styles.title}>
          <Icon source="map-marker" color="#06C168" size={0.057 * width} />
          Restaurant Name
        </Text>
        <View style={styles.header}>
          <Text style={styles.subtitle}>
            Looking for the{'\n'}Analysis with QuickCrave{'\n'}
          </Text>
          <Image
            source={require('../common/delivery_staff.png')}
            style={styles.imageD}
          />
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={true}>
        <BarChart
          style={{
            marginVertical: 8,
            borderRadius: 16
          }}
          data={barData}
          width={chartWidth}
          height={220}
          yAxisLabel=""
          chartConfig={chartConfig}
          verticalLabelRotation={30}
          fromZero
        />
        </ScrollView>
        <ScrollView horizontal showsHorizontalScrollIndicator={true}>
        <LineChart
          data={lineData}
          width={chartWidth}
          height={256}
          verticalLabelRotation={30}
          chartConfig={chartConfig}
          bezier
        />
        </ScrollView>
      </ScrollView>
      <BottomNav />
      </View>
    );
  }
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
});

export default Analysis;