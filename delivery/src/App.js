import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';

import LogIn from './pages/Login';
import SignUp from './pages/SignUp';
import Start from './pages/Start';
import OrderDetail from './pages/OrderDetail';
import Detail from './pages/Detail';
import ShoppingCart from './pages/ShoppingCart';
import {CartProvider} from './pages/CartContext';
import Init from './pages/Init';
import Track from './pages/Track';
import Information from './pages/Information';

const Stack = createStackNavigator();
export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
            
            <Stack.Screen name="LogIn" component={LogIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="OrderDetail" component={OrderDetail} />
          <Stack.Screen name="Start" component={Start} />
          <Stack.Screen name="Init" component={Init} />
          <Stack.Screen name="Information" component={Information} />
          <Stack.Screen name="Track" component={Track} />
          {/* <Stack.Screen name="Detail" component={Detail} /> */}
          {/* <Stack.Screen name="ShoppingCart" component={ShoppingCart} /> */}
          
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}
