import { Platform, View } from 'react-native';
import React from 'react';

export const colors = {
  DARK_BLUE: '#2a343c',
  LIGHT_GREY: '#f9f7f6',
  MEDIUM_GREY: '#efebe9',
  DARK_GREY: '#d8d8d8',
  ORANGE: '#ff8a65',
  BLUE: '#99ccff',
};

export const fonts = {
  REGULAR: 'NunitoSans-Regular',
  LIGHT_BOLD: 'NunitoSans-Bold',
  SEMI_BOLD: 'NunitoSans-SemiBold',
  BOLD: 'NunitoSans-ExtraBold',
  ITALIC: 'NunitoSans-LightItalic',
  LIGHT: 'NunitoSans-Light',
  TITLE: 'Friendship_version_2',
};

export const fontSizes = {
  WELCOME_MESSAGE: 80,
  TITLE: 50,
  HEADING_1: 55,
  HEADING_2: 45,
  HEADING_3: 35,
  HEADING_4: 25,
  HEADING_5: 15,
  BODY_TEXT: 20,
  SMALL: 15,
  MEDIUM_SMALL: 10,
  EXTRA_SMALL: 5,
  QUOTE: 20,
};

export const styles = {
  rootContainer: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 20 : 0,
  },
};