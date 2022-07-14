const mainColors = {
  green1: '#0BCAD4',
  green2: '#EDFCFD',
  dark1: '#112340',
  grey1: '#7D8797',
  grey2: '#E9E9E9',
  grey3: '#495A75',
  grey4: '#EEEEEE',
};

export const colors = {
  primary: mainColors.green1,
  secondary: mainColors.dark1,
  lightGreen: mainColors.green2,
  white: 'white',
  black: 'black',
  text: {
    primary: mainColors.dark1,
    secondary: mainColors.grey1,
    menuInactive: mainColors.grey3,
    menuActive: mainColors.green1,
  },
  border: mainColors.grey2,
  borderSecondary: mainColors.grey4,
  button: {
    primary: {
      background: mainColors.green1,
      text: 'white',
    },
    secondary: {
      background: 'white',
      text: mainColors.dark1,
    },
  },
};
