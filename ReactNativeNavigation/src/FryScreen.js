
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import ProfileView from "./ProfileView";

export default class FryScreen extends Component {

  onMore() {
    this.props.navigator.push({ 
      screen: "FryDetailScreen",
      title: "Fry Detail"
    });
  }

  render() {
    return (
      <View style={styles.container}>

        <ProfileView name="Phillip J Fry" 
          imageUrl="https://www.walldevil.com/wallpapers/a89/fry-philip-j.-fry-futurama.jpg" 
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
