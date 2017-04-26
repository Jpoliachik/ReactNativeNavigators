
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

import DetailView from "./DetailView";

const BIO_TEXT = "Philip J. Fry I, or simply just Fry, (born August 14, 1974) was a native to the 20th century who was cryogenically frozen seconds into the year 2000, having fallen in just as 1999 ended. He was revived in 2999 and subsequently became a Delivery boy for the Planet Express Company. He is the main protagonist and character of Futurama.";

export default class FryDetailScreen extends Component {

  static navigationOptions = {
    title: "Fry Details"
  }

  render() {
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        
        <DetailView 
          body={BIO_TEXT}
          imageUrl="https://yt3.ggpht.com/-SiLddjJpqNU/AAAAAAAAAAI/AAAAAAAAAAA/tr6_sbSbjpE/s900-c-k-no-mo-rj-c0xffffff/photo.jpg"
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
