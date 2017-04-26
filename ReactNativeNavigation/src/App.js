import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Navigation } from 'react-native-navigation';

import FryScreen from "./FryScreen";
import FryDetailScreen from "./FryDetailScreen";
import LeelaScreen from "./LeelaScreen";
import LeelaDetailScreen from "./LeelaDetailScreen";
import BenderScreen from "./BenderScreen";
import BenderDetailScreen from "./BenderDetailScreen";

const circleIcon = require("./circle.png");

function registerScreens() {
	Navigation.registerComponent('FryScreen', () => FryScreen);
	Navigation.registerComponent('FryDetailScreen', () => FryDetailScreen);
	Navigation.registerComponent('LeelaScreen', () => LeelaScreen);
	Navigation.registerComponent('LeelaDetailScreen', () => LeelaDetailScreen);
	Navigation.registerComponent('BenderScreen', () => BenderScreen);
	Navigation.registerComponent('BenderDetailScreen', () => BenderDetailScreen);
}

export default function App() {

	registerScreens();

	Navigation.startTabBasedApp({
	  tabs: [
		  {
		  	label: "Fry",
		  	screen: "FryScreen",
		  	icon: circleIcon,
		  	title: "Fry"
		  },
		  {
		  	label: "Leela",
		  	screen: "LeelaScreen",
		  	icon: circleIcon,
		  	title: "Leela"
		  },
		  {
		  	label: "Bender",
		  	screen: "BenderScreen",
		  	icon: circleIcon,
		  	title: "Bender"
		  }
	  ]
	});
}
