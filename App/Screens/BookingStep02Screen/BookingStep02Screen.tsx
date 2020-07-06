import React, { useState } from 'react';
import { View, Text, Image, ImageBackground, Dimensions, TouchableOpacity, FlatList } from 'react-native';
import { Colors, Images } from '@themes';
import styles from './BookigStep02ScreenStyle'
import { ParamListBase, Router, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProps } from 'react-native-screens/native-stack/types';




const DATA = [
    {
        id: '1',
        image: Images.Screen3.image1,
        name: 'Budweiser Berr',
        price: '59',
        icon1: Images.Screen3.add2,
        count: 0

    },
    {
        id: '2',
        image: Images.Screen3.image2,
        name: 'Cocktail',
        price: '39',
        icon1: Images.Screen3.add2,
        count: 0
    },
    {
        id: '3',
        image: Images.Screen3.image3,
        name: 'Addie Winer',
        price: '45',
        icon1: Images.Screen3.add2,
        count: 0
    },
    {
        id: '4',
        image: Images.Screen3.image4,
        name: 'Alcoholic Mimosa',
        price: '80',
        icon1: Images.Screen3.add2,
        count: 0
    },
];

export interface Booking02CreenProps {
    navigation: NativeStackNavigationProps<ParamListBase>;
    route: RouteProp
}



export const BookingStep02Creen: React.FunctionComponent<Booking02CreenProps> = (
    props: Booking02CreenProps,
) => {
    const { navigation } = props

    const [count, setcount] = useState(0)
    const [listMenu, setlistMenu] = useState(DATA)

    const hender = (id: string) => {
        let newList = [...listMenu];
        const filterData = newList.find((item: any) => item.id == id)
        if (filterData) {
            setcount((filterData.count = filterData.count + 1))
            setlistMenu(newList)
        }
        console.log(filterData)
    }
    const fileter = () => {
        const filterData = listMenu.filter((item: any) => item.count > 0)
        console.log(filterData)
        return filterData;
    }


    const renderItem = (item: any, index: number,) => {
        return (
            <View style={styles.ViewList}>
                <View style={styles.containerStyle}>
                    <Image source={item.image} style={styles.listImage} />
                    <View style={{ marginLeft: 15, }}>
                        <Text style={{ fontSize: 20 }}>{item.name}</Text>
                        <Text style={styles.price}>${item.price}</Text>
                    </View>

                </View>
                <View style={styles.item}>
                    <TouchableOpacity onPress={() => hender(item.id)} style={{}}><
                        Text style={styles.textItem}> x{item.count}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <View style={styles.head}>
                    <View style={styles.background}>
                        <Image source={Images.Screen2.Menu} style={styles.menu} />
                        <Text style={styles.FaroeBar}>Faroe Bar</Text>
                    </View>
                    <Image source={Images.Screen3.TabMenu1} style={styles.TapMenu} />
                    <View style={{}}>
                    </View>
                </View>
            </View>
            <View style={{ flex: 3 }}>

                <FlatList
                    data={listMenu}
                    renderItem={({ item, index }) => renderItem(item, index)}

                />


            </View>
            <View style={styles.Bottom}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('BookinngStep01Screen', {
                        dataSelected: fileter(),
                    })}
                    style={styles.buttom}>
                    <Text style={styles.textButtom}>Choose your friend</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}