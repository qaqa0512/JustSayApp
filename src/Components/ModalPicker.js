import React, {useState} from 'react';
import {
    View, 
    Text, 
    Image, 
    Button, 
    TouchableOpacity, 
    Alert, 
    ScrollView,
    FlatList
} from 'react-native';

//Constants
import images from '../Constants/image';

import {StylesModal} from '../assets/styles';

const DATA = [
    {
        id:1,
        title:"Viet Nam",
        image:images.Vie,
    },
    {
        id:2,
        title:"United States",
        image:images.US,
    },
    {
        id:3,
        title:"United KingDom",
        image:images.UK,
    },
    {
        id:4,
        title:"Spain",
        image:images.Spain,
    },
    {
        id:5,
        title:"Japan",
        image:images.Japan,
    },
    {
        id:6,
        title:"Korea",
        image:images.Korea,
    },
    {
        id:7,
        title:"Italy",
        image:images.Italy,
    },
];

const Item = ({title, image}) => (
    <TouchableOpacity style={StylesModal.chooseLanguage}>
            <Image source={image} style={StylesModal.IconFlag}></Image>
            <Text style={StylesModal.nameLanguage}>{title}</Text>
    </TouchableOpacity>
);

export default function ModalPicker(){
    
    const renderItem = ({item}) => (
        <Item 
            title={item.title}
            image={item.image}
        />
    );
   
    return(
        <View style={StylesModal.pickerContainer}>
            <View style={StylesModal.pickerDisplayContainer}>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor = {item => item.id}
                />
            </View>
        </View>
    );
};