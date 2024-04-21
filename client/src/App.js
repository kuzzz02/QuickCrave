import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import Track from './pages/Track';
import ShoppingCart from './pages/ShoppingCart';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="ShoppingCart" options={{presentation: 'modal'}} component={ShoppingCart} />
        <Stack.Screen name="Track" options={{presentation: 'fullScreenModal'}} component={Track} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

