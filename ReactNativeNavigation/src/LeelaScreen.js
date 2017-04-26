
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import ProfileView from "./ProfileView";

export default class LeelaScreen extends Component {

  onMore() {
    this.props.navigator.push({ 
      screen: "LeelaDetailScreen",
      title: "Leela Detail"
    });
  }

  render() {
    return (
      <View style={styles.container}>

        <ProfileView name="Turanga Leela" 
          imageUrl="https://static.giantbomb.com/uploads/original/0/9493/1485709-leela_8.jpg" 
          onMore={() => this.onMore()}/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
