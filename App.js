/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import 'react-native-gesture-handler';
import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import AppNavigator from './navigation/AppNavigator';
StatusBar.setBackgroundColor("rgba(0,0,0,0)");
StatusBar.setBarStyle("light-content");
StatusBar.setTranslucent(true);
const App = () => {
    return (
        <AppNavigator/>
    );
};

const styles = StyleSheet.create({});

export default App;
