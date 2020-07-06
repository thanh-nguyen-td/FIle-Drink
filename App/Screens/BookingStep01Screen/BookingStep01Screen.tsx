import React, { useState } from 'react';
import { View, Text, Image, ImageBackground, TextInput, Dimensions, TouchableOpacity, FlatList } from 'react-native';
import { Colors, Images } from '@themes';
import { ParamListBase, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProps } from 'react-native-screens/native-stack/types';
import styles from './BookingStep01ScreenStyle'



export interface BookinngStep01ScreenProps {
    navigation: NativeStackNavigationProps<ParamListBase>;
    route: RouteProp
}


export const BookinngStep01Screen: React.FunctionComponent<BookinngStep01ScreenProps> = (
    props: BookinngStep01ScreenProps,

) => {
    const { navigation, route } = props;
    const { dataSelected } = route.params
    const [valua, onChangeText] = useState('')
    const [det, setdet] = useState(dataSelected)
    const [message, setmessage] = useState('')

    const [up, setUp] = useState(false)
    const [down, setDown] = useState(false)
    const mau = () => {

    }
    const signUp = () => {
        const clonedata = [...det]
        clonedata.sort((a: any, b: any) => a.count - b.count)
        setdet(clonedata)
        setUp(true)
        setDown(false)

    }
    const signDown = () => {
        const clonedata = [...det]
        clonedata.sort((a: any, b: any) => b.count - a.count)
        setdet(clonedata)
        setUp(false)
        setDown(true)
    }
    const sumPrice = () => {
        var total = 0
        for (let i of dataSelected)
            total += i.price * i.count
        return total
    }
    const sumPic = () => {
        var prices = 0
        for (let i of dataSelected)
            prices += i.count
        return prices
    }

    const viewData = (item: any, index: number) => {
        return (
            <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center', marginHorizontal: 20, flex: 1, }}>
                <View style={{ flex: 1, alignItems: 'center' }}><Image source={item.image} style={{ width: 70, height: 70, borderRadius: 10 }} /></View>
                <View style={{ flex: 1, alignItems: 'center' }}><Text style={{ fontSize: 16 }}>${item.price}</Text></View>
                <View style={{ flex: 1, alignItems: 'center' }}><Text style={{ fontSize: 16 }}>{item.count}</Text></View>
            </View>
        )
    }
    console.log()
    return (
        <View style={{ flex: 1 }}>

            <View style={styles.head}>

                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back}><Image source={Images.Screen4.icon} style={{}} /></TouchableOpacity>
                <View style={{ flex: 1, alignItems: 'center', marginTop: 20 }}><Text style={styles.choose}>Choose your Friend</Text>

                </View>
                <View style={{ width: 50, backgroundColor: 'red' }}></View>
            </View>
            <View style={styles.body}>
                <View style={styles.body1}>
                    <View style={styles.body2}>
                        <Text style={styles.to}>To:</Text>
                        <View style={{ flexDirection: 'row', right: 20 }}>
                            <Text style={styles.anner}>Anne Peters</Text>
                            <TouchableOpacity >
                                <Image source={Images.Screen4.icon2} style={{ left: 210 }} />
                            </TouchableOpacity>
                        </View>
                    </View >

                    <Text style={styles.yousMessage}>Your Message:{props.route.params.name}</Text>
                    <TextInput onChangeText={text => onChangeText(text)}
                        value={message}
                        style={{ height: 50, fontSize: 18, fontWeight: '600', }}
                        multiline
                        onChangeText={(message) => setmessage(message)}
                    />
                </View>
            </View>
            <View style={{ flex: 4 }}>
                <View style={{ flexDirection: 'row', marginHorizontal: 20, marginTop: 30, }}>
                    <View style={styles.viewDrink}><Text style={styles.Drink}>Drink order</Text></View>
                    <View style={styles.viewDrink}><Text style={styles.Drink}>Amount</Text>

                    </View>
                    <View style={{ flexDirection: 'row', }}>
                        <TouchableOpacity onPress={() => signUp()} style={[styles.sign, { backgroundColor: up ? 'gold' : 'pink', }]}>
                            <Text style={{ fontWeight: '700' }}>+</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => signDown()} style={[styles.sign, { backgroundColor: down ? 'gold' : 'pink', marginLeft: 10 }]}>
                            <Text style={{ fontWeight: '700' }}>-</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.viewDrink}><Text style={styles.Drink}>price</Text></View>
                </View>
                <FlatList
                    data={det}
                    renderItem={({ item, index }) => viewData(item, index)}
                    keyExtractor={item => item.id}
                    style={{ marginTop: 20 }}
                />
            </View>

            <Text> </Text>
            <View style={styles.bottom}>
                <View style={styles.viewBottom}><Text style={styles.total}>Total:</Text>
                    <Text style={{ fontWeight: '600', fontSize: 18 }}>${sumPrice()}</Text>
                </View>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('RedeenScreen', {
                            name: message,
                            price: sumPic(),
                            total: sumPrice()
                            // console.console.log((sumPrice));

                        })}
                        style={styles.buttom}>
                        <Text style={styles.buttomText}>Payment</Text>
                    </TouchableOpacity></View>
            </View>

        </View>
    )
}