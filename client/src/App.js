import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';

import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import Start from './pages/Start';
import Main from './pages/Main';
import Detail from './pages/Detail';
import ShoppingCart from './pages/ShoppingCart';
import { CartProvider } from './pages/CartContext';


const Stack = createStackNavigator();
export default function App() {
  return (
    <CartProvider>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        {/* <Stack.Screen name="Init" component={Init} /> */}
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="ShoppingCart" component={ShoppingCart} />
        {/* <Stack.Screen name="Pay" component={Pay} />
        <Stack.Screen name="Confirm" component={Confirm} />
        <Stack.Screen name="Track" component={Track} /> */}
      </Stack.Navigator>
    </NavigationContainer>
    </CartProvider>
  );
}

