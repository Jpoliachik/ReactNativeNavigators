
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import ProfileView from "./ProfileView";

const circleImage = require("./circle.png");

export default class BenderScreen extends Component {

  static navigationOptions = {
    title: "Bender",
    tabBar: {
      label: "Bender",
      icon: (
       <Image
        source={circleImage}
        style={{width: 30, height: 30}}
      />
      )
    }
  }

  onMore() {
    this.props.navigation.navigate('BenderDetail');
  }

  render() {
    return (
      <View style={styles.container}>

        <ProfileView name="Bender Bending Rodríguez" 
          imageUrl="https://uproxx.files.wordpress.com/2015/12/bender-futurama.jpg?quality=100&w=650" 
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
