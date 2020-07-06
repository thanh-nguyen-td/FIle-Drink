import React from 'react';
import { StyleSheet } from 'react-native';
import { Colors } from '@themes';

export default StyleSheet.create({
    head: {
        flexDirection: 'row',
        alignItems: 'center', flex: 1,
        backgroundColor: Colors.background
    },
    back: {
        width: 50,
        left: 20,
        marginTop: 20
    },
    choose: {
        color: Colors.White,
        fontSize: 22,
        fontWeight: '700',
    },
    body: {
        borderWidth: 1,
        borderColor: Colors.Border,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20
    },
    body1: {
        marginHorizontal: 20,
        height: 180
    },
    body2: {
        flexDirection: 'row',
        flex: 1, alignItems: 'center'
    },
    to: {
        fontSize: 18,
        color: Colors.gray
    },
    anner: {
        left: 200, fontSize: 18,
        fontWeight: '700'
    },
    yousMessage: {
        marginTop: 20,
        fontSize: 18,
        color: Colors.gray
    },
    viewDrink: {
        flex: 1,
        alignItems: 'center'
    },
    Drink: {
        fontSize: 18,
        color: Colors.gray,
    },
    sign: {
        width: 20,
        right: 5,
        height: 20,
        borderRadius: 10,

        justifyContent: 'center',
        alignItems: 'center'
    },
    bottom: {
        flexDirection: 'row',
        borderTopWidth: 1,
        borderColor: Colors.border,
        flex: 1,
    },
    viewBottom: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 20
    },
    total: {
        fontSize: 18,
        color: Colors.gray
    },
    buttom: {
        backgroundColor: Colors.Gold,
        borderRadius: 20,
        height: 40,
        width: 150,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttomText: {
        color: Colors.White,
        fontSize: 18,
        fontWeight: '700'
    }

})