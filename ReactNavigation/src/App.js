import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { TabNavigator, StackNavigator } from "react-navigation";

import FryScreen from "./FryScreen";
import FryDetailScreen from "./FryDetailScreen";
import LeelaScreen from "./LeelaScreen";
import LeelaDetailScreen from "./LeelaDetailScreen";
import BenderScreen from "./BenderScreen";
import BenderDetailScreen from "./BenderDetailScreen";

const Tabs = TabNavigator({
	Fry: { screen: FryScreen },
  Leela: { screen: LeelaScreen },
  Bender: { screen: BenderScreen },
})

const App = StackNavigator({
	
	Main: { screen: Tabs },

	FryDetail: { screen: FryDetailScreen },
	LeelaDetail: { screen: LeelaDetailScreen },
	BenderDetail: { screen: BenderDetailScreen }
})

AppRegistry.registerComponent('ReactNavigation', () => App);
