import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';

import {HomeDetailsScreenName} from './Home';

export default class HomeInfoScreen extends React.Component {
  render(){
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Info Screen</Text>
        <TouchableOpacity onPress={()=>{
          this.props.navigation.navigate(HomeDetailsScreenName);
        }}>
          <Text>Go to details</Text>
        </TouchableOpacity>
      </View>
    );
  }
}