import React from 'react';
import { View, Text } from 'react-native';

import {createStackNavigator} from 'react-navigation';

import HomeInfoScreen from './HomeInfo';
import HomeDetailsScreen from './HomeDetails';

export const HomeInfoScreenName = 'HomeInfo';
export const HomeDetailsScreenName = 'HomeDetails';

export default createStackNavigator({
  [HomeInfoScreenName]: {
    screen: HomeInfoScreen,
  },
  [HomeDetailsScreenName]: {
    screen: HomeDetailsScreen,
  }
}, {
  initialRouteName: HomeInfoScreenName,
  mode: 'modal',
  headerMode: 'none',
  navigationOptions: {
    gesturesEnabled: false,
  },
})