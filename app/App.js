import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import 'react-native-gesture-handler';
import AppLoading from 'expo-app-loading'
import {useFonts, Montserrat_400Regular, Montserrat_500Medium, Montserrat_700Bold} from '@expo-google-fonts/montserrat';

import Routes from './src/router';


export default function App() {
  let [fontsLoader] = useFonts({
    Montserrat_400Regular, 
    Montserrat_500Medium,
    Montserrat_700Bold
  });

if(!fontsLoader){
  return <AppLoading />
}

  return (
    <>
      <Text>Olá mundo</Text>
      <StatusBar style="light" backgroundColor="#000" translucent={false}/>
      <Routes />
    </>
  );
}
