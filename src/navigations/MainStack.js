import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnBoardingScreen from '../screens/onBoardingScreen/OnBoardingScreen';
import BottomTabs from './BottomTabs';


const MainStack = () => {
  const Stack = createNativeStackNavigator();

  return (
     <Stack.Navigator initialRouteName="OnBoardingScreen">
      <Stack.Screen
        name="OnBoardingScreen"
        component={OnBoardingScreen}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen 
      name='LightHome'
      component={LightHome}
      options={{headerShown: false}}
      /> */}
      <Stack.Screen
      name='BottomTabs'
      component={BottomTabs}
      options={{headerShown: false}}
      />
      </Stack.Navigator>
  )
}

export default MainStack

const styles = StyleSheet.create({})