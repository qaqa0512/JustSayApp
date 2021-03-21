import React, {useState} from 'react';

import {View, Text, StyleSheet, Image, Button, TouchableOpacity, Alert, ScrollView} from 'react-native';

import Icons from 'react-native-vector-icons/FontAwesome'
import Guide from 'react-native-vector-icons/Feather'
import Other from 'react-native-vector-icons/Foundation'

import {Picker} from '@react-native-picker/picker';

import images from '../Constants/image';

import TranslateScreen from '../Components/Translate';

export default function HomeScreen() {

    const [selectedValue, setSelectedValue] = useState("Việt");

    const clear = () => {
        Alert.alert("Your conservation is cleared!")
    };

    const info = () => {
        Alert.alert("Hello friend!")
    };

    const record = () => {
        Alert.alert("I'm hearing")
    };
    

    return(
        <View style={styles.sectionContainer}>
            {/* Header */}
            <View style={styles.headerContainer}>
                <View style={styles.headerMain}>
                    <View style={styles.headerTxtBox}>
                        <Image source={images.Logo} style={styles.logoHomeImg}/>
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
                <View style={styles.recordContainer} >
                    <View>
                        <TouchableOpacity onPress={record} style={styles.recordIcon}>
                            <Other name="microphone" size={35} color="#fff"/>
                        </TouchableOpacity>
                        {/* <Text style={styles.txtTranslate}>Việt</Text> */}
                    </View>
                    <View style={{marginBottom:30}} >
                        <Picker
                            selectedValue={selectedValue}
                            style={{ height: 50, width: 110,}}
                            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                        >
                            <Picker.Item label="Việt" value="vie" />
                            <Picker.Item label="Anh" value="en" />
                            <Picker.Item label="Hàn" value="korea" />
                            <Picker.Item label="Pháp" value="france" />
                        </Picker>
                    </View>

                    <View>
                        <TouchableOpacity onPress={record} style={styles.reverseIcon}>
                            <Other name="microphone" size={35} color="#fff"/>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Picker
                            style={{ height: 50, width: 110,}}
                        >
                            <Picker.Item label="Anh" value="en" />
                            <Picker.Item label="Việt" value="vie" />
                            <Picker.Item label="Hàn" value="korea" />
                            <Picker.Item label="Pháp" value="france" />
                        </Picker>
                    </View>
                </View>
                <View style={styles.conservationContainer}>
                    {/*  */}
                    
                    <View style={styles.displayContainer}>
                        <ScrollView>
                            {/*  */}
                            <View style={styles.titleContainer}>
                                <Text>Việt</Text>
                                <Text style={{marginHorizontal:5}}>-</Text>
                                <Text>Anh</Text>
                            </View>
                            {/*  */}
                            <TranslateScreen/>
                            <TranslateScreen/>
                            <TranslateScreen/>
                        </ScrollView>
                    </View>
                </View>
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
        flexDirection:'row',
    },
    // ------------------
    recordContainer:{
        alignItems:'center',
        justifyContent:'center',
        paddingTop:35,
        marginHorizontal:10,
        marginVertical:10,
        backgroundColor:'#fff',
        borderRadius:10,
    },
    recordIcon:{
        borderWidth:1,
        borderColor:'#F8C491',
        paddingHorizontal:25,
        paddingVertical:7,
        borderRadius:10,
        backgroundColor:'#FFDCBA',
    },
    txtTranslate:{
        textAlign:'center',
        fontSize:17,
        marginTop:7,
    },
    //-------------------
    reverseIcon:{
        borderWidth:1,
        borderColor:'#3DD4CB',
        paddingHorizontal:25,
        paddingVertical:7,
        borderRadius:10,
        backgroundColor:'#3DD4CB',
    },

    // ConservationContainer
    conservationContainer:{
        flex:1,
        paddingHorizontal:8,
        paddingVertical:10,
        
    },
    //---------------------
    displayContainer:{
        backgroundColor:'#fff',
        flex:1,
        borderRadius:10,
    },
    //---------------------
    titleContainer:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        marginVertical:10,
    },
  });