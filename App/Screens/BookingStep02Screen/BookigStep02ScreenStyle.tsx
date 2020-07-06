import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from '@themes';

export default StyleSheet.create({
    head: {
        alignItems: 'center',
        flex: 1
    },
    background: {
        justifyContent: 'center', alignItems: 'center',
        flexDirection: 'row', position: 'absolute',
        backgroundColor: Colors.background,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width / 3,
    },
    menu: {
        right: 110,
        width: 27,
        height: 20
    },
    FaroeBar: {
        fontSize: 22,
        color: Colors.White,
        fontWeight: '700'
    },
    TapMenu: {
        position: 'relative',
        height: 50, width: 260,
        marginTop: 100,

    },
    containerStyle: {
        borderWidth: 1,
        borderRadius: 15,
        borderColor: Colors.Border,
        shadowColor: Colors.Black,
        shadowOffset: { width: 2, height: 3 },
        shadowOpacity: 0.1,
        backgroundColor: Colors.White,
        shadowRadius: 1,
        marginTop: 10,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    Bottom: {
        flex: 0.7,
        borderTopWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        shadowOffset: { width: 2, height: 3 },
        shadowOpacity: 0.1,
        borderColor: Colors.Border,
        shadowColor: Colors.Black,
        backgroundColor: Colors.White,
        shadowRadius: 5,

    },
    buttom: {
        width: 230,
        height: 55,
        backgroundColor: Colors.Gold,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30
    },
    textButtom: {
        fontSize: 20,
        fontWeight: '600',
        color: Colors.White
    },
    ViewList: {
        position: 'relative',
        flexDirection: 'row',
        marginLeft: 10,
        marginRight: 30
    },
    listImage: {
        height: 110, width: 110,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        borderColor: '#8A8A8A'
    },
    price: {
        color: Colors.Gold,
        marginTop: 10,
        fontSize: 20
    },
    item: {
        height: 50,
        width: 50,
        backgroundColor: Colors.BackgroudItem,
        position: 'absolute',
        marginHorizontal: 10,
        right: -30,
        top: 40,
        borderTopLeftRadius: 17,
        borderBottomRightRadius: 17
    },
    textItem: {
        fontSize: 20,
        fontWeight: '600',
        marginTop: 10,
        color:Colors.White
    }

})