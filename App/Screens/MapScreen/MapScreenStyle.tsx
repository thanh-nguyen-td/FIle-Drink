import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {Colors} from '@themes';

export default StyleSheet.create({
    imageBackground: {
        height: Dimensions.get('window').height,
        width : Dimensions.get('window').width,
    },
    head: {
        alignItems:'center', 
        flex: 1
    },
    background: {
        justifyContent: 'center',alignItems:'center',
         flexDirection: 'row',position: 'absolute',
         backgroundColor:'#121F3B',
         width: Dimensions.get('window').width,
         height:Dimensions.get('window').width / 2.5,
    },
    menu: {
        width:35,
         height: 25,
          right: 90,
    },
    FaroeBar: {
        fontSize: 30,
        color: Colors.White,
        fontWeight: '500'
    },
    TapMenu: {
        position: 'relative',
        height: 60, width: 280,
        marginTop: 120
    },
    body:{
        flex: 1,
         justifyContent: 'center',
          alignItems:'center',
    },
    imageBody: {
        width: 65,
         height:100,
    },
    bottom: {
        flex: 1,
        justifyContent:'center', 
        alignItems:'center'
    },
    imageBottom:{
        width: 370,
        height: 150
    }
})