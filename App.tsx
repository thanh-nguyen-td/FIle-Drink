/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { SignUpScreen, MapScreen, BookingStep02Creen,BookinngStep01Screen,RedeenScreen} from '@screens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Screen } from '@config';

const MainStack = createStackNavigator();
const Tab = createBottomTabNavigator();


const HomeStack = createStackNavigator();
const MapStack = createStackNavigator();
const BookingStack = createStackNavigator();
const EndStack = createStackNavigator();
const AuthStack = createStackNavigator();

// function HomeNavigator() {
//   return (
//     <HomeStack.Navigator>
//       <HomeStack.Screen name={Screen.HomeScreen} component={SignUpScreen} />
//     </HomeStack.Navigator>
//   )
// }
// function MapNavigator() {
//   return (
//     <MapStack.Navigator>
//       <MapStack.Screen name={Screen.HomeScreen} component={MapScreen} />
//     </MapStack.Navigator>
//   )
// }
// function BookingNavigator() {
//   return (
//     <BookingStack.Navigator>
//       <BookingStack.Screen name={Screen.HomeScreen} component={BookingStep02Creen} />
//     </BookingStack.Navigator>
//   )
// }
// function AuthNavigator() {
//   return (
//     <AuthStack.Navigator>
//       <HomeStack.Screen name={Screen.SignUpScreen} component={SignUpScreen} />
//     </AuthStack.Navigator>
//   )
// }
function App() {
  return (
    <SafeAreaProvider style={styles.container}>
       <NavigationContainer>
        <MainStack.Navigator initialRouteName={'SignUpScreen'} screenOptions={{ headerShown: false, }}>
          <MainStack.Screen name={Screen.SignUpScreen} component={SignUpScreen} />
          <MainStack.Screen name={Screen.MapScreen} component={MapScreen} />
          <MainStack.Screen name={Screen.BookingStep02Creen} component={BookingStep02Creen} />
          <MainStack.Screen name={'BookinngStep01Screen'} component={BookinngStep01Screen} />
          <MainStack.Screen name={'RedeenScreen'} component={RedeenScreen} />
        </MainStack.Navigator>
      </NavigationContainer> 
      {/* <RedeenScreen/> */}
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
