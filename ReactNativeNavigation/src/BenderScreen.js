
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import ProfileView from "./ProfileView";

export default class BenderScreen extends Component {

  onMore() {
    this.props.navigator.push({ 
      screen: "BenderDetailScreen",
      title: "Bender Detail"
    });
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
