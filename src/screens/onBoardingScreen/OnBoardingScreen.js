import {
  Appearance,
  Image,
  ImageBackground,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useColorScheme } from 'react-native';
import imagepath from '../../constants/imagepath';
import { height, moderateScale, scale, width } from '../../styles/Scaling';
import colors from '../../styles/colors';
import fontfamily from '../../constants/fontfamily';
import LinearGradient from 'react-native-linear-gradient';
import CustomButton from '../../components/CustomButton';

const OnBoardingScreen = () => {
  const navigation = useNavigation('');
  console.log('theme');

  // const navigation = useNavigation()
  // console.log('IMAGE VALUE:', imagepath.peacock);

  // const colorScheme = Appearance.getColorScheme();
  // console.log('colorScheme', colorScheme)
  // if (colorScheme === 'dark') {
  //   // Use dark color scheme
  // }

  return (
    <ScrollView>
      <View style={{ flex: 0, backgroundColor: colors.white }}>
        <TouchableOpacity style={styles.logoContainer}>
          <Image source={imagepath.appLogo} style={styles.bookpng} />
          <Text style={styles.logoText}>Sir Syed Ahmed</Text>
        </TouchableOpacity>
        <View style={styles.imgContainer}>
          <Image
            source={imagepath.sirsyedahmed}
            style={{
              width: moderateScale(285),
              height: moderateScale(349),
              alignSelf: 'center',
            }}
          />
        </View>
        <View style={{ flex: 0 }}>
          <LinearGradient
            colors={['#D6E6FF', '#ffffff']} // light blue to white
            style={styles.gradientBox}
          >
            <Text style={styles.gradientText}>
              Unlock a World{'\n'}of Stories
            </Text>
          </LinearGradient>
        </View>
      <CustomButton
      label={"Get Started"}
      onPress={()=>navigation.navigate("BottomTabs")}
      />
      </View>
    </ScrollView>
  );
};

export default OnBoardingScreen;

const styles = StyleSheet.create({
  bookpng: {
    width: moderateScale(100),
    height: moderateScale(100),
    alignSelf: 'center',
    // marginTop: Platform.OS === 'ios'?  moderateScale(0) : moderateScale(10)
    margin: Platform.OS === 'ios' ? moderateScale(40) : moderateScale(10),
  },
  logoText: {
    fontSize: scale(18),
    fontFamily: fontfamily.medium,
    alignSelf: 'center',
  },
  logoContainer: {
    margin:Platform.OS === 'ios' ?moderateScale(18):moderateScale(0),

  },
  gradientBox: {
    width: '100%',
    height:moderateScale(190),
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.naviblue,
  },
  gradientText: {
    fontSize: 24,
    fontFamily: fontfamily.semibold,
    textAlign: 'center',
    color: colors.black,
  },
 
  
});
