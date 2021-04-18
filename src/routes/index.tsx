import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Dashboard, Splash } from '../screens';

export type ScreenParamList = {
  Splash: undefined;
  Dashboard: undefined;
};
const Stack = createStackNavigator<ScreenParamList>();

const Router = () => (
  <Stack.Navigator initialRouteName="Dashboard">
    <Stack.Screen
      name="Splash"
      component={Splash}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Dashboard"
      component={Dashboard}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

export default Router;
