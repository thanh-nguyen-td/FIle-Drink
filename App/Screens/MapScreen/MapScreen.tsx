import React from 'react';
import {View, Text, Image,ImageBackground,TouchableOpacity, Dimensions } from 'react-native';
import {Colors, Images} from '@themes';
import styles from './MapScreenStyle';
import {ParamListBase} from '@react-navigation/native';
import {NativeStackNavigationProps} from 'react-native-screens/native-stack/types';


export interface MapScreenProps {
    navigation: NativeStackNavigationProps<ParamListBase>;
}


export const MapScreen: React.FunctionComponent<MapScreenProps> = (
    props: MapScreenProps,
    ) => {
        const {navigation} = props
    return(
        <View>
            <ImageBackground source={Images.Screen2.Map} style={styles.imageBackground}>
                <ImageBackground source={Images.Screen2.Mask} style={styles.imageBackground}>
                    <View style={styles.head}>
                    <View style={styles.background}>
                        <Image source={Images.Screen2.Menu} style={styles.menu}/>
                        <Text style={styles.FaroeBar}>Faroe Bar</Text>
                    </View>
                    <Image source={Images.Screen2.TabMenu} style={styles.TapMenu}/>
                    <View style={{}}>
                    </View>
                    </View>
                    <View style={styles.body}>
                        <Image source={Images.Screen2.group1} style={styles.imageBody}/>
                    </View>
                    <View style={styles.bottom}>
                        <TouchableOpacity
                        onPress={() => navigation.navigate('BookingStep02Creen')}
                        >
                        <Image source={Images.Screen2.group} style={styles.imageBottom}/>
                        </TouchableOpacity>
                    </View>

                </ImageBackground>
            </ImageBackground>
        </View>
    )
}