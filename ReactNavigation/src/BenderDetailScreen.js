
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

import DetailView from "./DetailView";

const BIO_TEXT = "Bender Bending Rodriguez, Sr., designated Bending Unit 22, and known as Bender, is one of the main characters in Futurama. He was made in Tijuana, serial number 2716057, Mexico in 2996.[1] Bender drinks copious amounts of alcohol to recharge his fuel cells, while displaying symptoms similar to intoxication when he stops. When he burps, fire comes out of his mouth. He gambles, smokes cigars, consorts with hookerbots, has 100,000 terabytes of porn on his hard drive[2], and is constantly trying to gain attention to boost his already over-inflated ego. He is equipped with a Gaydar,[3] though it ultimately claims everyone is gay. He currently lives with Fry in his closet-sized Apartment, fully equipped with an apartment-sized closet. He hates his self-destruct sequence.[4] He has an affinity for turtles (as they both can't get off their back), penguins, and Napoleon Bonaparte. Bender was made Pharaoh on the planet Osiris IV, but his servants, fed up with inhumane treatment, sent him to his grave (before he actually died).";

export default class BenderDetailScreen extends Component {

  static navigationOptions = {
    title: "Bender Details"
  }

  render() {
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        
        <DetailView 
          body={BIO_TEXT}
          imageUrl="https://hollywoodhatesme.files.wordpress.com/2011/01/bender-smoking.jpg"
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
