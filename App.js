import { StyleSheet, Text, View,SafeAreaView, Platform } from 'react-native'
import React from 'react'
import Route from './src/navigations/Route'
import colors from './src/styles/colors'
import OnBoardingScreen from './src/screens/onBoardingScreen/OnBoardingScreen'
import CustomButton from './src/components/CustomButton'
import SignUpScreen from './src/screens/SignUpScreen/SignUpScreen'
import { SafeAreaProvider } from 'react-native-safe-area-context'






const App = () => {
  return (

    <SafeAreaProvider style={{flex:1 }}>
<Route/>
{/* <SignUpScreen/> */}
    </SafeAreaProvider>
  )
}

export default App

const styles = StyleSheet.create({})