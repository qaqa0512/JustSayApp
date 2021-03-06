import React, {useState} from 'react';
import {
    View, 
    Text, 
    Image, 
    Button, 
    TouchableOpacity, 
    Alert, 
    ScrollView
} from 'react-native';

// Import Style
import {StylesHome} from '../assets/styles';

// Import Voice Lib
import Voice from 'react-native-voice';

import Modal from 'react-native-modal';

// Import Icons
import Icons from 'react-native-vector-icons/FontAwesome'
import Guide from 'react-native-vector-icons/Feather'
import Other from 'react-native-vector-icons/Foundation'
import {Picker} from '@react-native-picker/picker';

import ModalPicker from '../Components/ModalPicker';

//Constants
import images from '../Constants/image';

export default function TranslateScreen() { 

    const[chooseLanguage,setChooseLanguage] = useState(images.Vie);
    const[chooseOtherLanguage,setChooseOtherLanguage] = useState(images.US);

    const [modalOpen, setModalOpen] = useState(false);

    const showModal = () => setModalOpen(true);
    const hideModal = () => setModalOpen(false);

    return(
        <View style={StylesHome.bodyContainer}>
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
                        <View style={StylesHome.translateContainer}>
                            <View style={StylesHome.translateContainerLeft}>
                                <TouchableOpacity style={StylesHome.translateLanguage} activeOpacity={0.8}>
                                    <Text>Xin chào!</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={StylesHome.translateOther} activeOpacity={0.8}>
                                    <Text>Hi!</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={StylesHome.translateContainerRight}>
                                <TouchableOpacity style={StylesHome.translateLanguageRight} activeOpacity={0.8}>
                                    <Text>Hello!</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={StylesHome.translateOtherRight} activeOpacity={0.8}>
                                    <Text>Xin chào!</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
            {/* Record Container */}
            <View style={StylesHome.recordContainer} >
                <View style={StylesHome.recordBox}>
                    <TouchableOpacity 
                        style={StylesHome.recordIcon} 
                        onPress={showModal}
                        onPressOut={hideModal} 
                    >
                            <Image source={chooseLanguage} style={StylesHome.FlagIcon}/>
                    </TouchableOpacity>
                </View>
                <Modal 
                    isVisible={modalOpen} 
                    animationIn="flipInY"
                    onBackdropPress={hideModal}
                    animationOut="flipOutY"
                >
                    <ModalPicker/>
                </Modal>
                <View style={StylesHome.recordExchange}>
                    <TouchableOpacity style={StylesHome.recordExchangeIcon}>
                        <Icons name="exchange" size={35} color="#38485F"/>
                    </TouchableOpacity>
                </View>
                <View style={StylesHome.recordBox}>
                    <TouchableOpacity style={StylesHome.recordIcon}>
                        <Image source={chooseOtherLanguage} style={StylesHome.FlagIcon}/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};
