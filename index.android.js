/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
	TouchableOpacity,
	WebView,
	StyleSheet,
	View,
	Text
} from 'react-native';
import MainApp from './src/MainApp';
import { AppRegistry } from 'react-native';
AppRegistry.registerComponent('WebView', () => MainApp);
