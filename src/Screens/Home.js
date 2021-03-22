import React, {useState} from 'react';

import {View, Text, StyleSheet, Image, TouchableOpacity, Alert, ScrollView} from 'react-native';
import Modal from 'react-native-modal'


import Icons from 'react-native-vector-icons/FontAwesome'
import Guide from 'react-native-vector-icons/Feather'
import Other from 'react-native-vector-icons/Foundation'

import {Picker} from '@react-native-picker/picker';

import images from '../Constants/image';

import TranslateScreen from '../Components/Translate';

export default function HomeScreen() {

    const [modalOpen, setModalOpen] = useState(false);

    const [selectedValue, setSelectedValue] = useState("Việt");

    const clear = () => {
        Alert.alert("Your conservation is cleared!");
    };

    const info = () => {
        Alert.alert("About Me");
    };

    const record = () => {
        Alert.alert("I'm hearing");
    };
    

    return(
        <View style={styles.sectionContainer}>
            {/* Header */}
            <View style={styles.headerContainer}>
                <View style={styles.headerMain}>
                    <View style={styles.headerTxtBox}>
                        <Image source={images.Logo} style={styles.logoHomeImg}/>
                    </View>
                    <TouchableOpacity 
                        onPress={() => setModalOpen(true)} 
                        style={styles.IconClick} 
                        activeOpacity={0.6}
                    >
                        <Guide name="info" size={26} style={styles.infoIcon}/>
                        <Modal isVisible={modalOpen} animationType="slide">
                            <View style={styles.modalContainer}>
                                <Icons 
                                    name="window-close" 
                                    size={26} 
                                    style={styles.modalIcon}
                                    onPress={() => setModalOpen(false)}
                                />
                                <Text style={styles.modalTitle}>Just Say có những gì?</Text>
                                <View style={styles.modalContext}>
                                    <View style={styles.modalImgContainer}>
                                        <Image source={images.Logo} style={styles.modalImg}/>
                                    </View>
                                    <Text style={styles.modalTxt}>---- Xóa bỏ đi rào cản ngôn ngữ ----</Text>
                                    <Text style={styles.modalTxt}>---- Tôi hiểu bạn và bạn cũng hiểu tôi ----</Text>
                                    <Text style={styles.modalTxt}>Cảm ơn bạn sử dụng phần mềm của chúng tôi</Text>
                                </View>
                            </View>
                        </Modal>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={clear} activeOpacity={0.8}>
                        <Icons name="trash" size={26} style={styles.headerIcon}/>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Body */}
            <View style={styles.bodyContainer}>
                <View style={styles.recordContainer} >
                    <View>
                        <TouchableOpacity onPress={record} style={styles.recordIcon} activeOpacity={0.8}>
                            <Other name="microphone" size={35} color="#fff"/>
                        </TouchableOpacity>
                    </View>
                    <View style={{marginBottom:30}} >
                        <Picker
                            selectedValue={selectedValue}
                            style={{ height: 50, width: 110,}}
                            activeOpacity={0.6}
                            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                        >
                            <Picker.Item label="Việt" value="vie" />
                            <Picker.Item label="Anh" value="en" />
                            <Picker.Item label="Hàn" value="korea" />
                            <Picker.Item label="Pháp" value="france" />
                        </Picker>
                    </View>

                    <View>
                        <TouchableOpacity onPress={record} style={styles.reverseIcon} activeOpacity={0.8}>
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
        paddingVertical:10,
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 7},
        shadowRadius: 10,
        elevation: 20,
    },
    headerMain: {
        flexDirection:'row',
        paddingHorizontal:20,
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
        marginLeft:160,
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
    modalContainer:{
        flex:1,
        backgroundColor:'#FFE8D2',
        borderRadius:20,
        paddingHorizontal:20,
        paddingVertical:20,  
    },
    modalTitle:{
        fontSize:20,
        fontWeight:'600',
        textAlign:'center',
        textTransform:'capitalize',
        backgroundColor:'#fff',
        marginTop:10,
        borderRadius:10,
    },
    modalIcon:{
        color:'#fff',
    },
    modalImgContainer:{
        marginBottom:50,
    },
    modalImg:{
        width:250,
        height:100,
        resizeMode:'cover',
    },
    modalContext:{
        flex:1,
        backgroundColor:'#fff',
        marginTop:10,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
    },
    modalTxt:{
        paddingHorizontal:20,
        paddingVertical:20,
        textAlign:'center',
    },
    // Body Container
    bodyContainer:
    {
        flex:1,
        flexDirection:'row',
        backgroundColor:'#fff',
        
    },
    // ------------------
    recordContainer:{
        alignItems:'center',
        justifyContent:'center',
        paddingTop:35,
        marginVertical:10,
        marginLeft:7,
        backgroundColor: "aliceblue",
        borderRadius:10,
        shadowColor: '#2a2a2a',
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 7},
        shadowRadius: 10,
        elevation: 3,
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
        backgroundColor: "aliceblue",
        flex:1,
        borderRadius:10,
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 7},
        shadowRadius: 10,
        elevation: 20,
    },
    //---------------------
    titleContainer:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        marginVertical:10,
    },
  });