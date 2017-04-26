
import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Button
} from 'react-native';

export default class DetailView extends Component {

  static propTypes = {
    body: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }

  render() {
    return (
      <View style={styles.container}>

        <Image style={styles.image} source={{uri: this.props.imageUrl}}/>

        <Text style={styles.body}>
          {this.props.body}
        </Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    overflow: "hidden",
  },
  body: {
    fontSize: 15,
    fontWeight: "300",
    margin: 20,
  },
});
