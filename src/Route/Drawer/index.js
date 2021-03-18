import React from 'react';

import {View, Text, StyleSheet, Image} from 'react-native';

import Homepage from '../../Screens/HomeScreen/Home';

import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default function DrawerApp() {
    return (
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Notifications" component={NotificationsScreen} />
        </Drawer.Navigator>
    );
  }