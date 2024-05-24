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
    primary: "#FF0000",
    primaryContainer: "#7FAF73",
    secondary: "#00FF00",
    secondaryContainer: "#F3F3F3",//小圆框
    tertiary: "#800080",
    tertiaryContainer: "#FFA500",
    surface: "#FFC0CB",
    surfaceVariant: "#008080",
    surfaceDisabled: "#808080",
    background: "#FFFFFF",
    error: "#A52A2A",
    errorContainer: "#808080",
    onPrimary: "#FFFFFF",
    onPrimaryContainer: "#FFFFFF",
    onSecondary: "#00FF00",
    onSecondaryContainer: "#06C168",//选中的图标颜色
    onTertiary: "#800000",
    onTertiaryContainer: "#000080",
    // onSurface: "#06C168",//选中的字体颜色
    onSurfaceVariant: "black",//未选中的整体颜色
    onSurfaceDisabled: "#808080",
    onError: "#4B0082",
    onErrorContainer: "#FF7F50",
    onBackground: "#F5F5DC",
    outline: "#CD853F",
    outlineVariant: "#708090",
    inverseSurface: "#7FFFD4",
    inverseOnSurface: "#BDB76B",
    inversePrimary: "#DA70D6",
    shadow: "#E6E6FA",
    scrim: "#D8BFD8",
    backdrop: "#808080",
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

