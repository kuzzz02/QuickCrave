import * as React from 'react';
import {View, ScrollView, StyleSheet, Image, Dimensions, Text, KeyboardAvoidingView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { IconButton } from 'react-native-paper';


const { width,height } = Dimensions.get('window');

const BottomNav = () => {
  const navigation = useNavigation();

  const getActiveRouteName = () => {
    const state = navigation.getState();
    return state.routes[state.index].name;
  };

  const activeRouteName = getActiveRouteName();

  const getIcon = (routeName) => {
    const isActive = activeRouteName === routeName;
    switch (routeName) {
      case 'OrderDetail':
        return isActive ? 'clipboard-list' : 'clipboard-list-outline';
      case 'Analysis':
        return isActive ? 'alarm-panel' : 'alarm-panel-outline';
      case 'Information':
        return isActive ? 'account-supervisor-circle' : 'account-supervisor-circle-outline';
      default:
        return 'information-outline';  // Default icon if none match
    }
  };

  const handleOrderPress = () => {
    navigation.navigate('OrderDetail');
  };
  const handleAnalysisPress = () => {
    navigation.navigate('Analysis');
  };
  const handleInformationPress = () => {
    navigation.navigate('Information');
  };
  return (
  <View style={styles.bottom}>
    <View style={styles.box}>
        <IconButton
        style={styles.icon}
          icon={getIcon("OrderDetail")}
          iconColor="#162D3A"
          size={28}
          onPress={handleOrderPress}
        />
        <Text style={styles.font}>Orders</Text>
        </View>
        <View style={styles.box}>
        <IconButton
        style={styles.icon}
          icon={getIcon("Information")}
          iconColor="#162D3A"
          size={28}
          onPress={handleInformationPress}
        />
        <Text style={styles.font}>Information</Text>
        </View>
      </View>
  );
      };

const styles = StyleSheet.create({
  bottom: {
    position: 'absolute',
    right: 0,
    left: -width * 0.05,
    flexDirection: 'row',
    bottom: 0,
    height: 70,
    width: width,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  box:{
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    width: 0.5 * width,
  },
  icon:{
    marginTop: -0.01 * height,
  },
  font:{
    fontSize: 16,
    fontFamily: 'AlimamaShuHeiTi-Bold',
    color: 'black',
    marginTop: -0.01 * height,
  }
});
export default BottomNav;

