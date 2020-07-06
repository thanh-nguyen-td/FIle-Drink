import React from 'react';
import {View, Text, Image,ImageBackground, Dimensions,TouchableOpacity } from 'react-native';
import {Colors, Images} from '@themes';
import styles from './SignUpScreenStyle'
import {ParamListBase} from '@react-navigation/native';
import {NativeStackNavigationProps} from 'react-native-screens/native-stack/types';

export interface SignUpProps {
    navigation: NativeStackNavigationProps<ParamListBase>;
}


export const SignUpScreen: React.FunctionComponent<SignUpProps> = (
    props: SignUpProps,
    ) => {
        const {navigation} = props
    return (
        <View>
             <ImageBackground source={Images.nen1} style={{height:Dimensions.get('window').height, width: Dimensions.get('window').width,}}>
              <ImageBackground source={Images.nen2} style={{height:Dimensions.get('window').height, width: Dimensions.get('window').width,}}>
            <View style={{flex: 1}}></View>
            <View style={styles.viewTextCenter}>
                <Text style={styles.welcome}> WELCOME</Text>
                <Text style={styles.text}>The Venue Sign Up needs  to validate their location by social media profiles</Text>
            </View>
            <View style={{flex: 1, justifyContent: 'center', alignItems:'center'}}>
                <TouchableOpacity 
                onPress={() => navigation.navigate('MapScreen')}
                style={[styles.SignUp, { backgroundColor: Colors.Blue, }]}
                >
                    <Image source={Images.imet}/>
                    <Text style={styles.textSignUp}> Sign up with Facebook</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                onPress= {() => navigation.navigate('BookingStep02Creen')}
                style={[styles.SignUp, { backgroundColor:Colors.Gold,marginTop: 20 }]}
                >
                    <Image source={Images.imet}/>
                    <Text style={styles.textSignUp}> Sign up with Untappb</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.viewBottom}>
                <Text style={styles.textBottom}>Already have an account?</Text>
                <TouchableOpacity>
                    <Text style={styles.signIn}>Sign in</Text>
                </TouchableOpacity>
            </View>
            </ImageBackground>
            </ImageBackground>
        </View>
    )
}
