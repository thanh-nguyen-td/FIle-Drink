import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from '@themes';

export default StyleSheet.create({
    head: {
        height: Dimensions.get('window').width / 10 * 3,
        width: Dimensions.get('window').width,
        backgroundColor: Colors.background
    },
    body: {
        flex: 1,
        backgroundColor: Colors.Border
    },
    BodyView: {
        margin: 25,
        backgroundColor: Colors.White,
        flex: 1,
        borderRadius: 20,
        shadowColor:Colors.Black,
shadowOffset: {
	width: 0,
	height: 3,
},
shadowOpacity: 0.34,
shadowRadius: 3.27,

elevation: 10,
    },
    bodyHead: {
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: Dimensions.get('window').width / 5 * 2,
        height: Dimensions.get('window').width / 5 * 2,
        marginTop:30,
    },
    netdut: {
        height: 50,
        justifyContent: 'center',
        flexDirection: 'row'
    },
    bodyke: {
        height: 1,
        backgroundColor: Colors.border,
        width: Dimensions.get('window').width / 8 * 7,
        marginTop: 25
    },
    bancau: {
        height: 50,
        width: 50,
        borderRadius: 25,
        backgroundColor: Colors.Border,
        position: 'absolute',
    },
    TextBody: {
        fontSize: 23,
        fontWeight: '700'
    },
    faroeBar: {
        color: Colors.gray,
        fontSize: 16,
        marginTop: 5
    },
    dete: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 30
    }
})