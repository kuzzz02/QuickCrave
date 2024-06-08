import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {CartProvider} from './pages/CartContext';
import Start from './pages/Start';
import Init from './pages/Init';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import Register from './pages/Register';
import OrderDetail from './pages/OrderDetail';
import Analysis from './pages/Analysis';
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
        {/* <Stack.Screen name="Information" component={Information} /> */}
        <Stack.Screen name="OrderDetail" component={OrderDetail} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Init" component={Init} />
        
      </Stack.Navigator>
    </NavigationContainer>
    </CartProvider>
  );
}
