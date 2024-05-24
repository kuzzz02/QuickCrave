import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Start from './pages/Start';
import Init from './pages/Init';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import Register from './pages/Register';
// import Track from './pages/Track';
// import ShoppingCart from './pages/ShoppingCart';
import YourComponent from './pages/YourComponent';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        {/* <Stack.Screen name="YourComponent" component={YourComponent} /> */}
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Init" component={Init} />
        {/* <Stack.Screen name="Register" component={Register} /> */}
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="SignUp" component={SignUp} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

