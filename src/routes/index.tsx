import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {
  Account,
  Dashboard,
  RumahSakit,
  Home,
  Assessment,
  SignIn,
  Splash,
  Search,
} from '../screens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabNavigator } from '../components';

export type ScreenParamList = {
  Splash: undefined;
  Dashboard: undefined;
  SignIn: undefined;
  MainScreen: undefined;
  Search: undefined;
};
const Stack = createStackNavigator<ScreenParamList>();

const forFade = ({ current }: { current: any }) => ({
  cardStyle: {
    opacity: current.progress.interpolate({
      inputRange: [0, 0.5, 0.9, 1],
      outputRange: [0, 0.25, 0.7, 1],
    }),
  },
});

//  BottomTabNavigator
const Tab = createBottomTabNavigator();

const TabRoutes = [
  {
    name: 'Beranda',
    component: Home,
  },
  {
    name: 'Rumah Sakit',
    component: RumahSakit,
  },
  {
    name: 'Assessment',
    component: Assessment,
  },
  {
    name: 'Akun',
    component: Account,
  },
];

const MainScreen = () => (
  <Tab.Navigator tabBar={(props) => <BottomTabNavigator {...props} />}>
    {TabRoutes.map((route: any, index: any) => (
      <Tab.Screen key={index} {...route} />
    ))}
  </Tab.Navigator>
);

const Router = () => (
  <Stack.Navigator initialRouteName="MainScreen">
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
    <Stack.Screen
      name="SignIn"
      component={SignIn}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="MainScreen"
      component={MainScreen}
      options={{
        headerShown: false,
        cardStyleInterpolator: forFade,
      }}
    />
    <Stack.Screen
      name="Search"
      component={Search}
      options={{
        headerShown: false,
        cardStyleInterpolator: forFade,
      }}
    />
  </Stack.Navigator>
);

export default Router;
