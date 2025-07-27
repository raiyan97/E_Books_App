import { useColorScheme } from 'react-native';

const getColors = () => {
  const scheme = useColorScheme();

  return {
    white: scheme === 'light' ? '#FFFFFF' : '#000000',
    whiteTransparent: scheme === 'light' ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.6)',
    black: scheme === 'light' ? '#000000' : '#FFFFFF',
    fbColor: '#235E78',
    grey: scheme === 'light' ? '#aeaeae' : '#777',
    textColor: scheme === 'light' ? '#6b6b6b' : '#d3d3d3',
    lightBlack: '#6b6b6b',
    borderColor: scheme === 'light' ? '#DEDEDE' : '#333',
    lightSky: '#C8FFEC',
    orange: '#ECA500',
    paratGreen: '#00B41F',
    red: '#D80000',
    green: '#007113',
    transparentBlack: 'rgba(0,0,0,0.5)',
    silverGrey: '#F8F8F8',
    lightOrange: '#fbdd4b',
    appColor: scheme === 'light' ? '#1F3A87' : '#11172b',
    appDarkColor: scheme === 'light' ? '#265ca3' : '#22304a',
    lightGreen: '#99c354',
    lightGrey: scheme === 'light' ? '#7b8999' : '#aaa',
    solidAppColor: scheme === 'light' ? '#1c4697' : '#0d1a33',
  };
};

export default getColors;
