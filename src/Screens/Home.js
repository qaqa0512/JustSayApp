import React, {useState} from 'react';

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';

// Components
import Header from '../Components/Header';
import TranslateScreen from '../Components/Translate';

// Styles
import {StylesHome} from '../assets/styles';

export default function HomeScreen() {
  //   console.log('aaaa', this.props);

  return (
    <View style={StylesHome.sectionContainer}>
      {/* Header */}
      <Header />
      {/* Body */}
      <TranslateScreen />
    </View>
  );
}
