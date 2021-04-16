import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, Alert, ScrollView} from 'react-native';
// Package
import Modal from 'react-native-modal';
import { DrawerActions, NavigationContainer, useNavigation } from '@react-navigation/native';
// Icon Library
import Icons from 'react-native-vector-icons/FontAwesome';
import Guide from 'react-native-vector-icons/Feather';
import Other from 'react-native-vector-icons/Foundation';
import {Picker} from '@react-native-picker/picker';

// Styles
import {StylesHome} from '../assets/styles';

//Constants
import images from '../Constants/image';

export default function Header(){

    const [modalOpen, setModalOpen] = useState(false);

    const clear = () => {
        Alert.alert("Recording.....");
    };

    // Open Drawer
    const Menu = () => 
    { 
        const navigation = useNavigation();
        return(
            <TouchableOpacity 
                style={StylesHome.headerTxtBox}
                onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            >
                <Image source={images.Menuu} style={StylesHome.logoHomeImg}/>
            </TouchableOpacity>
        );
    }

    return(
        <View style={StylesHome.headerContainer}>
            <View style={StylesHome.headerMain}>
                <Menu/>
                <View style={StylesHome.IconClick} >
                    <TouchableOpacity 
                        onPress={() => setModalOpen(true)} 
                        style={StylesHome.headerInfoContainer}
                        activeOpacity={0.6}
                    >
                        <Image source={images.Infor} style={StylesHome.headerInfo}/>
                        <Modal isVisible={modalOpen} animationIn="bounce">
                            <View style={StylesHome.modalContainer}>
                                <View style={StylesHome.modalTop}>
                                    <View style={StylesHome.modalIconContainer}>
                                        <Icons 
                                            name="window-close" 
                                            size={26} 
                                            style={StylesHome.modalIcon}
                                            onPress={() => setModalOpen(false)}
                                        />
                                    </View>
                                    <View style={StylesHome.modalTitle}>
                                        <Text style={StylesHome.modalTitleTxt}>Just Say có những gì?</Text>
                                    </View>
                                </View>
                                <View style={StylesHome.modalContext}>
                                    <View style={StylesHome.modalImgContainer}>
                                        <Image source={images.Logo} style={StylesHome.modalImgLogo}/>
                                    </View>
                                    <View style={StylesHome.modalTxtContainer}>
                                        <Image source={images.Trans} style={StylesHome.modalIconTrans}/>
                                        <View style={StylesHome.modalTextBox}>
                                            <Text style={StylesHome.modalTxt}> Tôi hiểu bạn và bạn cũng hiểu tôi</Text>
                                        </View>
                                    </View>
                                    <View style={StylesHome.modalTxtContainer}>
                                        <Image source={images.Cancel} style={StylesHome.modalIconTrans}/>
                                        <View style={StylesHome.modalTextBox}>
                                            <Text style={StylesHome.modalTxt}> Xóa bỏ đi rào cản giữa các ngôn ngữ</Text>
                                        </View>
                                    </View>
                                    <View style={StylesHome.modalTxtContainer}>
                                        <Image source={images.Like} style={StylesHome.modalIconTrans}/>
                                        <View style={StylesHome.modalTextBox}>
                                            <Text style={StylesHome.modalTxt}> Tiện ích và dễ dàng sử dụng</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </Modal>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={clear} 
                        activeOpacity={0.8}
                        style={StylesHome.headerRec}
                    >
                        <Image source={images.Rec} style={StylesHome.headerIcon}/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};