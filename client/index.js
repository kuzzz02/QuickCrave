/**
 * @format
 */
import * as React from 'react';
import {AppRegistry} from 'react-native';
import { DefaultTheme, PaperProvider } from 'react-native-paper';
import App from './src/App';
import {name as appName} from './app.json';

const theme = {
  ...DefaultTheme,
  // Specify custom property
  // myOwnProperty: true,
  // Specify custom property in nested object
  colors: {
    ...DefaultTheme.colors,
    primary: 'green',  // 这将改变应用中主要颜色的使用，包括一些图标背景
    accent: 'green',  // 辅助颜色，也可能影响某些组件
    Surface: 'green',
    background: 'green',
    placeholder: 'green',
    secondary: 'green',
    on_primary:'green',
  },
};

export default function Main() {
    return (
      <PaperProvider theme={theme}>
        <App />
      </PaperProvider>
    );
  }

AppRegistry.registerComponent(appName, () => Main);

