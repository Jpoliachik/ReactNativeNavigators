
import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Button
} from 'react-native';

export default class ProfileView extends Component {

  static propTypes = {
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    onMore: PropTypes.func.isRequired
  }

  render() {
    return (
      <View style={styles.container}>

        <Image style={styles.image} source={{uri: this.props.imageUrl}}/>

        <Text style={styles.name}>
          {this.props.name}
        </Text>

        <Button title="More Info" onPress={() => this.props.onMore()}/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    overflow: "hidden",
    margin: 20,
  },
  name: {
    fontSize: 25,
    fontWeight: "100",
    marginBottom: 8
  },
  button: {
    fontSize: 15,
    fontWeight: "300"
  }
});
