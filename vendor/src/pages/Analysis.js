import React from 'react';
import { View, Dimensions, ScrollView, Text, StyleSheet, Image } from 'react-native';
import { BarChart, LineChart } from 'react-native-chart-kit';
import { Card, Title, Paragraph, IconButton } from 'react-native-paper';
import BottomNav from './BottomNav';
import { useCart } from './CartContext';

const { width, height } = Dimensions.get('window');
const chartWidth = width * 0.95;  // 修改图表宽度以适应屏幕

// 模拟的订单数据
const orders = [
    { date: "2024-06-08", total: 46, goods_id: "1" },
    { date: "2024-06-08", total: 24, goods_id: "2" }
];




const Analysis = () => {

  const { name, filteredOrders } = useCart(); 


const goodsSalesData = orders.reduce((acc, order) => {
  acc[order.goods_id] = (acc[order.goods_id] || 0) + 1;
  return acc;
}, {});

const monthlySalesData = orders.reduce((acc, order) => {
  const month = order.date.slice(0, 7);  
  acc[month] = (acc[month] || 0) + order.total;
  return acc;
}, {});

    const barData = {
        labels: Object.keys(goodsSalesData),
        datasets: [{
            data: Object.values(goodsSalesData)
        }]
    };

    const lineData = {
        labels: Object.keys(monthlySalesData),
        datasets: [{
            data: Object.values(monthlySalesData),
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
            <ScrollView style={styles.scrollView}>
                <Text style={styles.title}>Restaurant Analysis</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <BarChart
                        style={styles.chart}
                        data={barData}
                        width={chartWidth}
                        height={220}
                        yAxisLabel=""
                        chartConfig={chartConfig}
                        verticalLabelRotation={30}
                        fromZero
                    />
                </ScrollView>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <LineChart
                        style={styles.chart}
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
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 0.05 * width,
    },
    scrollView: {
        flex: 1,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#06C168',
        marginTop: 20,
        marginBottom: 10,
        textAlign: 'center',
    },
    chart: {
        marginVertical: 8,
        borderRadius: 16,
    }
});

export default Analysis;
