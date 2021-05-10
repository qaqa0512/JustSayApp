import {StyleSheet} from 'react-native'


const styles = StyleSheet.create({
    pickerContainer:{
        borderWidth:3,
        borderRadius:10,
        borderColor:'#47167D',
        backgroundColor:'#fff',
        width:'100%',
        height:500,
    },
    pickerDisplayContainer:{
        flex:1,
    },
    chooseLanguage:{
        borderBottomWidth:2,
        borderBottomColor:'#47167D',
        paddingVertical:10,
        paddingHorizontal:5,
        flexDirection:'row',
        alignItems:'center',
        marginHorizontal:20,
        borderRadius:10,
        marginBottom:10,
    },
    IconFlag:{
        width:50,
        height:50,
    },
    nameLanguage:{
        fontSize:17,
        marginLeft:20,
    },
});

export default styles