import { Image, Platform, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  FavouriteScreen,
  HomeScreen,
  SearchScreen,
  SettingScreen,
} from '../screens';
import colors from '../styles/colors';
import imagepath from '../constants/imagepath';
import LightHome from '../screens/LightHome/LightHome';
import { Background } from '@react-navigation/elements';
import { moderateScale } from '../styles/Scaling';

const Tab = createBottomTabNavigator();
const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
tabBarStyle:{  
backgroundColor:colors.darkblue,
borderTopColor:colors.white,
        borderTopWidth: 0.5,
        elevation: 5,
        shadowColor: colors.black,
        shadowOffset:{width:0,height:-2},
        shadowOpacity:0.2,
        shadowRadius:2,
        // height:Platform.OS === 'ios' ? 60 + getBottomSpace() : 60,
        // paddingBottom: Platform.OS === 'ios' ? getBottomSpace() : 0,
        // position: "absolute",
        // left:0,
        // right:0,
        // bottom:0,  
        // marginTop:Platform.OS === 'ios' ? moderateScale(20) : moderateScale(20),
        // tabBarActiveBackgroundColor:colors.darkblue,
        // tabBarInactiveBackgroundColor: colors.darkblue,
tabBarActiveTintColor:colors.black,
tabBarInactiveTintColor:colors.white,

}

      }}
    >
      <Tab.Screen
        name="Light"
        component={LightHome}
        options={{
          title: '',
          tabBarIcon: ({ size, color }) => {
            return (
              <Image
                style={{ tintColor: color, width: size, height: size }}
                source={imagepath.homeTabs}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          title: '',
          tabBarIcon: ({ size, color }) => {
            return (
              <Image
                style={{ tintColor: color, width:size, height:size }}
                source={imagepath.searchTabs}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={FavouriteScreen}
        options={{
          title: '',
          tabBarIcon: ({ size, color }) => {
            return (
              <Image
                style={{ tintColor: color, width:size, height:size }}
                source={imagepath.saveTabs}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          title: '',
          tabBarIcon: ({ size, color }) => {
            return (
              <Image
                style={{ tintColor: color, width:size, height:size }}
                source={imagepath.sattingTabs}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({});
