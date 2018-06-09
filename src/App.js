import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';

import HomeScreen from './screens/Home/Home';
import ExtrasScreen from './screens/Extras';
import SettingsScreen from './screens/Settings';


export default createBottomTabNavigator({
  Home: {
    screen: HomeScreen
  },
  Extras: {
    screen: ExtrasScreen,
  },
  Settings: {
    screen: SettingsScreen
  }
}, {
  //other configs
  animationEnabled: true
});
