import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class HomeDeatilsScreen extends React.Component {
  render(){
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Details Screen</Text>
        <TouchableOpacity onPress={()=>{
          this.props.navigation.goBack();
        }}>
          <Text>Atrás</Text>
        </TouchableOpacity>
      </View>
    );
  }
}