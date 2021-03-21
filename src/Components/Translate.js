import React from 'react';
import {
    View, 
    Text, 
    StyleSheet, 
    Image, 
    Button, 
    TouchableOpacity, 
    Alert, 
    ScrollView
} from 'react-native';

export default function TranslateScreen() { 
    return(
        <View style={styles.translateContainer}>
            <View style={styles.translateContainerLeft}>
                <View style={styles.translateLanguage}>
                    <Text>Xin chào!</Text>
                </View>
                <View style={styles.translateOther}>
                    <Text>Hi!</Text>
                </View>
            </View>
            <View style={styles.translateContainerRight}>
                <View style={styles.translateLanguageRight}>
                    <Text>How are you?</Text>
                </View>
                <View style={styles.translateOtherRight}>
                    <Text style={{color:'#fff',fontWeight:'600',}}>Bạn có khỏe không? </Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    //---------------------
    translateContainerLeft:{
        flex:1,
        // borderWidth:1,
        // borderColor:'#000',
        marginVertical:10,
        marginHorizontal:10,
    },
    //-------------------
    translateLanguage:{
        borderWidth:1,
        borderColor:'#E5E5E5',
        backgroundColor:'#E5E5E5',
        padding:10,
        borderRadius:10,
        alignSelf:"flex-start",
    },
    translateOther:{
        marginTop:10,
        borderWidth:1,
        borderColor:'#FFDCBA',
        backgroundColor:'#FFDCBA',
        padding:10,
        borderRadius:10,
        alignSelf:"flex-start",
    },
    //-------------------
    translateContainerRight:{
        flex:1,
        // borderWidth:1,
        // borderColor:'#000',
        marginVertical:10,
        marginHorizontal:10,
    },
    translateLanguageRight:{
        borderWidth:1,
        borderColor:'#E5E5E5',
        backgroundColor:'#E5E5E5',
        padding:10,
        borderRadius:10,
        alignSelf:"flex-end",
    },
    translateOtherRight:{
        marginTop:10,
        borderWidth:1,
        borderColor:'#3DD4CB',
        backgroundColor:'#3DD4CB',
        padding:10,
        borderRadius:10,
        alignSelf:"flex-end",
    },
});