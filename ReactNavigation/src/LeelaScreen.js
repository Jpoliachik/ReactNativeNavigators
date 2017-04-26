
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

export default class LeelaScreen extends Component {

  static navigationOptions = {
    title: "Leela",
    tabBar: {
      label: "Leela",
      icon: (
       <Image
        source={circleImage}
        style={{width: 30, height: 30}}
      />
      )
    }
  }

  onMore() {
    this.props.navigation.navigate('LeelaDetail');
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
