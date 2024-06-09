import React from 'react';
import {
  View,
  Dimensions,
  ScrollView,
  Text,
  StyleSheet,
  Image,
} from 'react-native';
import {BarChart, LineChart, PieChart} from 'react-native-chart-kit';
import {Card, Title, Paragraph, IconButton} from 'react-native-paper';
import BottomNav from './BottomNav';
import {useCart} from './CartContext';

const {width, height} = Dimensions.get('window');
const chartWidth = width * 0.95; // 修改图表宽度以适应屏幕

// 模拟的订单数据
const orders = [
  {
    date: '2024-06-08',
    total: 46,
    goods_name: 'chicken burger',
    userAddress: 'sysu',
  },
  {
    date: '2024-06-08',
    total: 24,
    goods_name: 'cheese burger',
    userAddress: 'sysu',
  },
  {
    date: '2024-06-09',
    total: 46,
    goods_name: 'Big cheese burger',
    userAddress: 'sysu',
  },
  {
    date: '2024-06-09',
    total: 24,
    goods_name: 'Big chicken Burger',
    userAddress: 'sysu',
  },
  {
    date: '2024-06-08',
    total: 46,
    goods_name: 'chicken burger',
    userAddress: 'sysu',
  },
  {
    date: '2024-06-09',
    total: 24,
    goods_name: 'cheese burger',
    userAddress: 'sysu',
  },
  {
    date: '2024-06-08',
    total: 46,
    goods_name: 'chicken burger',
    userAddress: 'scut',
  },
  {
    date: '2024-06-08',
    total: 46,
    goods_name: 'chicken burger',
    userAddress: 'scut',
  },
  {
    date: '2024-06-10',
    total: 46,
    goods_name: 'cheese burger',
    userAddress: 'scnu',
  },
  {
    date: '2024-06-09',
    total: 46,
    goods_name: 'Big cheese burger',
    userAddress: 'scnu',
  },
  {
    date: '2024-06-10',
    total: 46,
    goods_name: 'cheese burger',
    userAddress: 'scnu',
  },
  {
    date: '2024-06-10',
    total: 46,
    goods_name: 'cheese burger',
    userAddress: 'scut',
  },
  {
    date: '2024-06-08',
    total: 46,
    goods_name: 'chicken burger',
    userAddress: 'scnu',
  },
  {
    date: '2024-06-09',
    total: 46,
    goods_name: 'Big cheese burger',
    userAddress: 'scnu',
  },
  {
    date: '2024-06-09',
    total: 46,
    goods_name: 'Big cheese burger',
    userAddress: 'scnu',
  },
  {
    date: '2024-06-10',
    total: 46,
    goods_name: 'cheese burger',
    userAddress: 'scnu',
  },
  {
    date: '2024-06-10',
    total: 46,
    goods_name: 'cheese burger',
    userAddress: 'scnu',
  },
];

const Analysis = () => {
  const goodsSalesData = orders.reduce((acc, order) => {
    acc[order.goods_name] = (acc[order.goods_name] || 0) + 1;
    return acc;
  }, {});

  const dailySalesData = orders.reduce((acc, order) => {
    const date = order.date; // Use full date for daily sales
    acc[date] = (acc[date] || 0) + order.total;
    return acc;
  }, {});

  const addressData = orders.reduce((acc, order) => {
    acc[order.userAddress] = (acc[order.userAddress] || 0) + 1;
    return acc;
  }, {});

  const barData = {
    labels: Object.keys(goodsSalesData),
    datasets: [
      {
        data: Object.values(goodsSalesData),
      },
    ],
  };

  const lineData = {
    labels: Object.keys(dailySalesData),
    datasets: [
      {
        data: Object.values(dailySalesData),
        color: (opacity = 1) => `rgba(53, 162, 235, ${opacity})`, // 蓝色
        strokeWidth: 2, // optional
      },
    ],
  };

  const bar2Data = {
    labels: Object.keys(addressData),
    datasets: [
      {
        data: Object.values(addressData),
      },
    ],
  };

  // const pieChartData = Object.keys(addressData).map(key => ({
  //   name: key,
  //   quantity: addressData[key],
  //   color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
  //   legendFontColor: '#7F7F7F',
  //   legendFontSize: 15,
  // }));

  const chartConfig = {
    backgroundGradientFrom: '#ffffff',
    backgroundGradientTo: '#ffffff',
    decimalPlaces: 2,
    color: (opacity = 1) => `rgba(255, 99, 132, ${opacity})`, // 柔和的红色
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // 黑色标签
    style: {
      borderRadius: 16,
      marginVertical: 8,
    },
    propsForDots: {
      r: '6',
      strokeWidth: '2',
      stroke: '#ffa726',
    },
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>Restaurant Analysis</Text>
        <Text style={styles.chartTitle}>Sales per Product</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <BarChart
            style={styles.chart}
            data={barData}
            width={chartWidth}
            height={280}
            yAxisLabel=""
            chartConfig={chartConfig}
            verticalLabelRotation={30}
            fromZero
          />
        </ScrollView>
        <Text style={styles.chartTitle}>Daily Sales Trends</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <LineChart
            style={styles.chart}
            data={lineData}
            width={chartWidth}
            height={286}
            verticalLabelRotation={30}
            chartConfig={chartConfig}
            bezier
          />
        </ScrollView>
        <Text style={styles.chartTitle}>Address distribution</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <BarChart
            style={styles.chart}
            data={bar2Data}
            width={chartWidth}
            height={220}
            yAxisLabel=""
            chartConfig={chartConfig}
            verticalLabelRotation={30}
            fromZero
          />
        </ScrollView>
      </ScrollView>
      <BottomNav />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 0.05 * width,
  },
  scrollView: {
    flex: 1,
    marginBottom: 70,
  },
  title: {
    fontSize: 25,
    fontFamily: 'AlimamaShuHeiTi-Bold',
    color: '#06C168',
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
  chartTitle: {
    fontSize: 18,
    fontFamily: 'AlimamaShuHeiTi-Bold',
    color: '#000',
    marginTop: 10,
    marginBottom: 5,
    textAlign: 'left',
    marginLeft: 20
  },
});

export default Analysis;
