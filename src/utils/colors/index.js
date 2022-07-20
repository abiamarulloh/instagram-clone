const mainColors = {
  dark1: '#112340',
  grey1: '#7D8797',
  grey2: '#E9E9E9',
  grey3: '#495A75',
  grey4: '#EEEEEE',
  red1: '#FDA7DF',
  red2: '#b71540',
};

export const colors = {
  primary: mainColors.red1,
  secondary: mainColors.red2,
  lightGreen: mainColors.red1,
  white: 'white',
  black: 'black',
  text: {
    primary: mainColors.red2,
    secondary: mainColors.grey1,
    menuInactive: mainColors.red1,
    menuActive: 'white',
  },
  border: mainColors.grey2,
  borderSecondary: mainColors.grey4,
  button: {
    primary: {
      background: mainColors.red1,
      text: 'white',
    },
    secondary: {
      background: 'white',
      text: mainColors.red2,
    },
  },
};
