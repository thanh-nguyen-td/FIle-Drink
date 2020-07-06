import React from 'react';
import { View, Text, Image, ImageBackground, Dimensions, TouchableOpacity, FlatList,ScrollView } from 'react-native';
import { Colors, Images } from '@themes';
import { NativeStackNavigationProps } from 'react-native-screens/native-stack/types';
import Dash from 'react-native-dash';
import moment from 'moment';
import { ParamListBase, RouteProp } from '@react-navigation/native';
import styles from './RedeemScreenStyle'

export interface BookinngStep01ScreenProps {
    navigation: NativeStackNavigationProps<ParamListBase>;
    route: RouteProp
}
export const RedeenScreen: React.FunctionComponent<BookinngStep01ScreenProps> = (
    props: BookinngStep01ScreenProps,
) => {
    const { navigation } = props
    
    let date = moment()
        .utcOffset('+05:30')
        .format('DD MMM,YYYY');
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.head}>
                <View style={{flex:1, justifyContent:'center', alignItems:'center',flexDirection:'row'}}>
                <Image source={Images.Screen2.Menu} style={{right:70,}}/>
                <Text style={{fontWeight:'700', fontSize:22, color:Colors.White}}>Redeem A Drink</Text>
                </View>
            </View>
            <View style={styles.body}>
                <View style={styles.BodyView}>
                    <View style={styles.bodyHead} >
                        <Image source={Images.Screen5.group} style={styles.image} />
                    </View>
                    <View style={styles.netdut}>
                        <View style={styles.bodyke}></View>
                        <View style={[styles.bancau, {left: -30,borderRightColor:Colors.border,borderRightWidth:1 }]}></View>
                        <View style={[styles.bancau, {right: -30, borderLeftColor:Colors.border,borderLeftWidth:1}] }></View>
                    </View>
                    <ScrollView style={{ flex: 1,  marginHorizontal: 20 }}>
                        <View style={{ alignItems: 'center', marginTop: 15, }}>
                            <Text style={styles.TextBody}>Budweiser Beer , Cocktail</Text>
                            <Text style={styles.faroeBar}>Faroe Bar</Text>
                            <Text style={styles.faroeBar}>New York 59, Hillbur, NY, USA</Text>
                        </View>
                        <View style={styles.dete}>
                            <View style={{ right: 50 }}>
                                <Text style={{color:Colors.Textgray}}>DATE</Text>
                                <Text style={{marginTop:10}}>{date}</Text>
                            </View>
                            <View style={{ left: 50 }}>
                                <Text style={{ left: 40 , color:Colors.Textgray}}>FROM</Text>
                                <Text style={{marginTop:10}}>Curtis Guzman</Text>
                            </View>
                        </View>
                        <View style={{ marginTop: 30, flexDirection: 'row', justifyContent: 'center' }}>
                            <View style={{ right: 75 }}>
                                <Text style={{color:Colors.Textgray}}>AMOUNT</Text>
                                <Text style={{marginTop:10, marginLeft:15}}>{props.route.params.price}</Text>
                            </View>
                            <View style={{ left: 80 }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Image source={Images.Screen5.icon3} />
                                    <Text style={{ color:Colors.Textgray, marginLeft: 10 }}>PAID</Text>
                                   
                                </View>
                                <Text style={{marginLeft:30, marginTop:10}}>{props.route.params.total}</Text>
                            </View>
                        </View>
                        <View style={{ marginTop: 30 }}>
                            <Text style={{ color:Colors.Textgray}}>MESSAGE</Text>
                            <Text style={{marginTop:15, fontWeight:'600'}}>{props.route.params.name}</Text>
                        </View>
                    </ScrollView>

                </View>
            </View>

        </View>
    )
}
