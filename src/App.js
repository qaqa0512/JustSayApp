 import React from 'react';
 
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
 } from 'react-native';

 import { NavigationContainer } from '@react-navigation/native';

 import WelcomeScreen from './Screens/Welcome';
 import HomeScreen from './Screens/HomeScreen/Home';

import DrrawerApp from './Route/Drawer'
 import { createStackNavigator } from '@react-navigation/stack';
import { useState } from 'react';

 const Stack = createStackNavigator();

 const App = () => {
   const [isSplash , setIsSplash] = useState(true);
   setTimeout(()=>{
      setIsSplash(false)
   },2000)
   return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions = {{
          headerStyle: {backgroundColor:'wheat'},
          headerShown: false,
        }}
        initialRouteName="Welcome"
      >
        {
          isSplash ? 
        <Stack.Screen name = "Welcome" component={WelcomeScreen}/>
          :
        <Stack.Screen name = "Home" component={DrrawerApp}/>
        }
      </Stack.Navigator>
    </NavigationContainer>
   );
 };
 
 const styles = StyleSheet.create({
   sectionContainer: {
     flex:1,
     justifyContent:'center',
     alignItems:'center',
   },
 });
 
 export default App;
 