import React from 'react';
import {StyleSheet} from 'react-native';
import {Colors} from '@themes';

export default StyleSheet.create ({
    viewTextCenter: {
        flex: 1, 
        justifyContent: 'center',
        alignItems:'center'
    },
    welcome: {
        color: Colors.White,
         fontSize: 50, 
         fontWeight: '700'
    },
    text: {
        color: Colors.White,
        fontSize: 20,
         maxWidth:270,
         marginTop: 30,
         textAlign: 'center',
    },
    SignUp:{
        width: 250, 
        height: 50, 
       flexDirection: 'row',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems:'center'
    },
    textSignUp:{
        fontSize: 20,
         color:Colors.White,
    },
    viewBottom: {
        flex: 1, 
        justifyContent: 'center',
         alignItems:'center',
         flexDirection:'row'
    },
    textBottom: {
        color: Colors.TextPrimary,
         fontSize: 17
    },
    signIn: {
        color:Colors.White,
         fontSize: 18,
          marginLeft: 5
    }
})