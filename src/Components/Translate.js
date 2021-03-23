import React from 'react';
import {
    View, 
    Text, 
    Image, 
    Button, 
    TouchableOpacity, 
    Alert, 
    ScrollView
} from 'react-native';
import {StylesHome} from '../Assets/styles'
export default function TranslateScreen() { 

    const repeat = () => {
        Alert.alert("Hello friend!")
    };

    return(
        <View style={StylesHome.translateContainer}>
            <View style={StylesHome.translateContainerLeft}>
                <TouchableOpacity onPress={repeat}style={StylesHome.translateLanguage} activeOpacity={0.8}>
                    <Text>Xin chào!</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={repeat}style={StylesHome.translateOther} activeOpacity={0.8}>
                    <Text>Hi!</Text>
                </TouchableOpacity>

            </View>
            <View style={StylesHome.translateContainerRight}>
                <TouchableOpacity onPress={repeat}style={StylesHome.translateLanguageRight} activeOpacity={0.8}>
                    <Text>Hello!</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={repeat}style={StylesHome.translateOtherRight} activeOpacity={0.8}>
                    <Text>Xin chào!</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
