import {
  FlatList,
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import colors from '../../styles/colors';
import imagepath from '../../constants/imagepath';
import { moderateScale, scale } from '../../styles/Scaling';
import fontfamily from '../../constants/fontfamily';
import { Modal } from 'react-native/types_generated/index';

const LightHome = ({ navigation }) => {
  const [selected, setSelected] = useState('All');

  const categories = [
    'All',
    'Detective',
    'Drama',
    'Historical',
    'Fantasy',
    'Science',
  ];

  const bookCovers = [
    {
      id: 1,
      source: imagepath.bookImg,
      title: 'Franz Kafka',
      author: 'Herman Meville',
    },
    {
      id: 2,
      source: imagepath.bookImg2,
      title: 'The Illusion',
      author: 'Charles Jones',
    },
    {
      id: 3,
      source: imagepath.bookImg3,
      title: 'The Final Fall',
      author: 'Charles Jones',
    },
  ];
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.white,
        paddingHorizontal: moderateScale(10),
      }}
    >
      <View style={styles.bookpngContainer}>
        <StatusBar barStyle={'dark-content'} translucent={true} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
          }}
        >
          <TouchableOpacity>
            <Image style={styles.bookpng} source={imagepath.sideLogo} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.suhailImg} source={imagepath.suhailpng} />
          </TouchableOpacity>
        </View>

        <View style={{ alignSelf: 'flex-start', marginTop: moderateScale(10) }}>
          <Text style={styles.welcomeText}>Welcome back, Syed</Text>
          <Text style={styles.readText}>
            What do you want to {'\n'}read today?
          </Text>
        </View>
        <View>
          <FlatList
            style={{
              marginHorizontal: moderateScale(-20),
              paddingTop: moderateScale(32),
            }}
            data={categories}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => item}
            contentContainerStyle={{ paddingHorizontal: moderateScale(16) }}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[styles.chip, selected === item && styles.selectedChip]}
                onPress={() => setSelected(item)}
              >
                <Text
                  style={[
                    styles.chipText,
                    selected === item && styles.selectedText,
                  ]}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            )}
          />
          {/* This is horizontal-list along book margin */}
          <View style={{ paddingTop: moderateScale(35) }}>
            <FlatList
              data={bookCovers}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item, index) => item.id}
              initialNumToRender={10}
              removeClippedSubviews
              // contentContainer for using books betweens gaps
              contentContainerStyle={{ paddingHorizontal: moderateScale(5) }}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.bookItemContainer}>
                  <Image style={styles.bookCoverImage} source={item.source} />
                  <View style={{ paddingTop: moderateScale(10) }}>
                    <Text style={styles.bookTitle}>{item.title}</Text>
                    <Text style={styles.authorText}>{item.author}</Text>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </View>
      <View
        style={{
          // flex: 0.2,
          position: 'absolute',
          bottom: moderateScale(-1),
          left: 0,
          right: 0,
          height: moderateScale(51),
          backgroundColor: colors.powderblue,
        }}
      >
        <Image style={styles.posteIcon} source={imagepath.posterImg} />
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'flex-start',
            marginHorizontal: moderateScale(65),
            bottom: moderateScale(32),
          }}
        >
          <Text style={styles.posterText}>Continue listening</Text>
          <Text style={styles.posterText1}>Moby Dick</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          bottom: moderateScale(12),
          left: 0,
          right: 0,
          // paddingHorizontal: moderateScale(150),
        }}
      >
        <Image style={styles.playImg} source={imagepath.playIcon} />
        <Image style={styles.forwardImg} source={imagepath.forward} />
      </View>
    </View>
  );
};

export default LightHome;

const styles = StyleSheet.create({
  bookpngContainer: {
    backgroundColor: colors.white,
    // marginHorizontal: moderateScale(10),
    paddingTop: Platform.OS === 'ios' ? moderateScale(60) : moderateScale(50),
  },
  bookpng: {
    alignSelf: 'flex-end',
  },

  suhailImg: {
    alignSelf: 'center',
  },
  welcomeText: {
    fontSize: scale(16),
    color: colors.grey,
    fontFamily: fontfamily.medium,
  },
  readText: {
    fontSize: scale(26),
    fontFamily: fontfamily.medium,
  },
  chip: {
    paddingHorizontal: moderateScale(20),
    paddingVertical: 18,
    backgroundColor: colors.lowblue,
    borderRadius: 30,
    justifyContent: 'center',
    alignSelf: 'center',
    margin: moderateScale(5),
    borderWidth: 0.5,
    // height:moderateScale(50),// focus this stylesheet
    borderColor: colors.lightBlue,
  },
  selectedChip: {
    backgroundColor: colors.darkblue,
  },
  chipText: {
    color: colors.white,
    fontFamily: fontfamily.medium,
  },
  selectedText: {
    color: colors.white,
  },
  bookItemContainer: {
    alignItems: 'center',
    margin: moderateScale(10),
  },
  bookTitle: {
    fontSize: scale(16),
    fontFamily: fontfamily.semibold,
  },
  authorText: {
    fontSize: scale(12),
    fontFamily: fontfamily.regular,
    color: colors.powdergrey,
  },
  posteIcon: {
    flexDirection: 'row',
    width: moderateScale(29),
    height: moderateScale(35),
    marginLeft: moderateScale(21),
    marginTop: moderateScale(7),
    resizeMode: 'contain',
  },
  posterText: {
    fontSize: scale(11),
    fontFamily: fontfamily.regular,
    color: colors.white,
  },
  posterText1: {
    fontSize: scale(13),
    fontFamily: fontfamily.regular,
    color: colors.white,
  },
  forwardImg: {

    backgroundColor: colors.white,
    borderRadius: 50,
    alignItems: 'center',
    marginHorizontal: moderateScale(10),
  },
  playImg: {
    height: moderateScale(30),
    width: moderateScale(30),
    backgroundColor: colors.white,
    borderRadius: 50,
    alignItems: 'center',
    marginHorizontal: moderateScale(10),
    marginLeft:moderateScale(270)
  },
});
