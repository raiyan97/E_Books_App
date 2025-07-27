import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MainStack from './MainStack'
import { NavigationContainer } from '@react-navigation/native'
import BottomTabs from './BottomTabs'
import { SafeAreaView } from 'react-native-safe-area-context'
import colors from '../styles/colors'
const Route = () => {
  return (

<NavigationContainer>
<MainStack/>
</NavigationContainer>

  )
}

export default Route

const styles = StyleSheet.create({})