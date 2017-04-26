
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

import DetailView from "./DetailView";

const BIO_TEXT = "Turanga Leela (born July 29, 2975) one of the main characters in Futurama. She is the tomboyishly beautiful and very sexy captain of the Planet Express ship. With a \"no rain or sleet\" attitude and a \"kick-your-arse\" grace, this delivery captain is a refreshing source of professionalism to counterpoint the rest of the crew. For better or worse, the ship runs on her high octane passions, be it because of her longing for family, her love of violence, her commitment to a job well done, or her affection for animals. She has been known to scrap the missions on a whim on the promise of learning more of her past, jeopardize the crew's lives to spite Zapp Brannigan and save Nibbler. Leela was the first female Blernsball player and the worst player ever because of her poor depth perception (this is due to the fact that she has one eye). However, in space, depth perception is less useful because things are further away and so Leela is captain of the Planet Express ship.";

export default class LeelaDetailScreen extends Component {

  static navigationOptions = {
    title: "Leela Details"
  }

  render() {
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        
        <DetailView 
          body={BIO_TEXT}
          imageUrl="https://i.ytimg.com/vi/ljZsxcw6yVk/hqdefault.jpg"
          />
          
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  content: {
    alignItems: "center",
    justifyContent: "center"
  }
});
