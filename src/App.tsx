import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';
import Toast from 'react-native-toast-message';
import Router from './routes';
import { Provider } from 'react-redux';
import { store } from './libs';

const MainApp = () => {
  return (
    <NavigationContainer>
      <StatusBar showHideTransition="slide" barStyle="light-content" />
      <Router />
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </NavigationContainer>
  );
};

const App = () => (
  <Provider store={store}>
    <MainApp />
  </Provider>
);
export default App;

