import React from 'react';

import {View, Text, StyleSheet, Image, Button, TouchableOpacity, Alert} from 'react-native';

import Icons from 'react-native-vector-icons/FontAwesome'
import Guide from 'react-native-vector-icons/Feather'

import images from '../Constants/image'

export default function HomeScreen() {

    const clear = () => {
        Alert.alert("Your conservation is cleared!")
    };

    const info = () => {
        Alert.alert("Hello friend!")
    };

    return(
        <View style={styles.sectionContainer}>
            {/* Header */}
            <View style={styles.headerContainer}>
                <View style={styles.headerMain}>
                    <View style={styles.headerTxtBox}>
                        <Image source={images.Logo} style={styles.logoHomeImg}/>
                        {/* <Text style={styles.headerText}>Just Say</Text> */}
                    </View>
                    <TouchableOpacity onPress={info} style={styles.IconClick}>
                        <Guide name="info" size={26} style={styles.infoIcon}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={clear}>
                        <Icons name="trash" size={26} style={styles.headerIcon}/>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Body */}
            <View style={styles.bodyContainer}>
                <Text>Body Container</Text>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    sectionContainer: {
        flex:1,
    },
    headerContainer: {
        borderWidth:1,
        borderColor:'#FFDCBA',
        backgroundColor: '#FFDCBA',
        paddingVertical:15,
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 7},
        shadowRadius: 10,
        elevation: 20,
    },
    headerMain: {
        flexDirection:'row',
        paddingHorizontal:22,
    },
    headerTxtBox: {
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
    },
    logoHomeImg:{
        width:85,
        height:40,
        resizeMode:'cover',
        borderRadius:10,
    },
    headerText: {
        fontSize:15,
        fontStyle:'italic',
        fontWeight:'bold',
        textTransform:'uppercase',
        marginLeft:7,
    },
    IconClick:{
        marginLeft:200,
        flexDirection:'row',
    },
    infoIcon:{
        color:'#2a2a2a',
        paddingVertical:7,
        marginRight:15,
    },
    headerIcon: {
        backgroundColor:'#fff',
        color:'#F8C491',
        paddingHorizontal:10,
        paddingVertical:7,
        borderRadius:10,
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 7},
        shadowRadius: 10,
        elevation: 20,
    },
    // Body Container

    bodyContainer:
    {
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',
    }
  });