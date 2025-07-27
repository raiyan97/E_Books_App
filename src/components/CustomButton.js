import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { moderateScale, width } from '../styles/Scaling'
import colors from '../styles/colors'
import fontfamily from '../constants/fontfamily'

const CustomButton = ({label,onPress,}) => {
  return (
    <View>
       <View style={styles.btnContainer}>
          <TouchableOpacity onPress={onPress}>
            <Text style={styles.btnText}>{label}</Text>
          </TouchableOpacity>
        </View>
    </View>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    btnContainer: {
    width: width * 0.9,
    height: moderateScale(48),
    backgroundColor: colors.darkblue,
    alignSelf: 'center',
    borderRadius: 25,
    justifyContent: 'center',

  },
   btnText: {
    fontSize: 16,
    color: colors.white,
    fontFamily: fontfamily.semibold,
    textAlign: 'center',
  },
})