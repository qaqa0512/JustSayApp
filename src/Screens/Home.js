import React, {useState} from 'react';

import {View, Text, Image, TouchableOpacity, Alert, ScrollView} from 'react-native';

import Modal from 'react-native-modal'

import Icons from 'react-native-vector-icons/FontAwesome'
import Guide from 'react-native-vector-icons/Feather'
import Other from 'react-native-vector-icons/Foundation'

import {Picker} from '@react-native-picker/picker';
import {StylesHome} from '../Assets/styles'

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
        <View style={StylesHome.sectionContainer}>
            {/* Header */}
            <View style={StylesHome.headerContainer}>
                <View style={StylesHome.headerMain}>
                    <View style={StylesHome.headerTxtBox}>
                        <Image source={images.Logo} style={StylesHome.logoHomeImg}/>
                    </View>
                    <TouchableOpacity 
                        onPress={() => setModalOpen(true)} 
                        style={StylesHome.IconClick} 
                        activeOpacity={0.6}
                    >
                        <Guide name="info" size={26} style={StylesHome.infoIcon}/>
                        <Modal isVisible={modalOpen} animationType="slide">
                            <View style={StylesHome.modalContainer}>
                                <Icons 
                                    name="window-close" 
                                    size={26} 
                                    style={StylesHome.modalIcon}
                                    onPress={() => setModalOpen(false)}
                                />
                                <Text style={StylesHome.modalTitle}>Just Say có những gì?</Text>
                                <View style={StylesHome.modalContext}>
                                    <View style={StylesHome.modalImgContainer}>
                                        <Image source={images.Logo} style={StylesHome.modalImg}/>
                                    </View>
                                    <Text style={StylesHome.modalTxt}>---- Xóa bỏ đi rào cản ngôn ngữ ----</Text>
                                    <Text style={StylesHome.modalTxt}>---- Tôi hiểu bạn và bạn cũng hiểu tôi ----</Text>
                                    <Text style={StylesHome.modalTxt}>Cảm ơn bạn sử dụng phần mềm của chúng tôi</Text>
                                </View>
                            </View>
                        </Modal>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={clear} activeOpacity={0.8}>
                        <Icons name="trash" size={26} style={StylesHome.headerIcon}/>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Body */}
            <View style={StylesHome.bodyContainer}>
                <View style={StylesHome.recordContainer} >
                    <View>
                        <TouchableOpacity onPress={record} style={StylesHome.recordIcon} activeOpacity={0.8}>
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
                        <TouchableOpacity onPress={record} style={StylesHome.reverseIcon} activeOpacity={0.8}>
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
                <View style={StylesHome.conservationContainer}>
                    {/*  */}
                    
                    <View style={StylesHome.displayContainer}>
                        <ScrollView>
                            {/*  */}
                            <View style={StylesHome.titleContainer}>
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

