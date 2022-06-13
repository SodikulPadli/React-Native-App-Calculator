import React from 'react';
//Import React Native Gesture Handler
import 'react-native-gesture-handler';
import { NativeBaseProvider, extendTheme } from 'native-base';
import AppLoading from 'expo-app-loading';
import { useFonts, Oswald_200ExtraLight, Oswald_300Light, Oswald_400Regular, Oswald_500Medium, Oswald_600SemiBold, Oswald_700Bold } from '@expo-google-fonts/oswald';
import Container from './Container';

export default function App() {
  let [fontsLoaded] = useFonts({
    Oswald_200ExtraLight,
    Oswald_300Light,
    Oswald_400Regular,
    Oswald_500Medium,
    Oswald_600SemiBold,
    Oswald_700Bold,
  });
  const fontConfig = {
    Oswald: {
      400: {
        normal: 'Oswald_200ExtraLight',
        italic: 'Oswald_300Light',
      },
    },
  };
  const customeColor = {
    danger: {
      50: '#fff1f2',
      100: '#ffe4e6',
      200: '#fecdd3',
      300: '#fda4af',
      400: '#fb7185',
      500: '#f43f5e',
      600: '#e11d48',
      700: '#be123c',
      800: '#9f1239',
      900: '#881337',
    },
    amber: {
      400: '#f472b6',
    },
  };
  const theme = extendTheme({
    colors: customeColor,
    fontConfig,
    fonts: {
      heading: 'oswald',
      body: 'oswald',
      mono: 'oswald',
    },
    config: {
      initialColorMode: 'dark',
    },
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NativeBaseProvider theme={theme}>
        <Container />
      </NativeBaseProvider>
    );
  }
}
