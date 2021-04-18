import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';
import Toast from 'react-native-toast-message';
import Router from './routes';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar showHideTransition="slide" barStyle="light-content" />
      <Router />
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </NavigationContainer>
  );
};

export default App;
