export const COLORS = {
  primary: '#b8d8be',
  primaryLight: '#e8f4ea',
  primaryDark: '#77a88d',
  secondary: '#f5f5f5',
  white: '#ffffff',
  black: '#000000',
  gray: '#e6e6e6',
  darkGray: '#81887D',
  error: '#CE6F4C',
  success: '#77BFA3',
};

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,

  // font sizes
  h1: 26,
  h2: 24,
  h3: 20,
  body1: 18,
  body2: 16,
  caption: 12,
  button: 16,
};

export const FONTS = {
  h1: { fontFamily: 'IRANSans', fontSize: SIZES.h1, fontWeight: '500' },
  h2: { fontFamily: 'IRANSans', fontSize: SIZES.h2, fontWeight: '500' },
  h3: { fontFamily: 'IRANSans', fontSize: SIZES.h3, fontWeight: '500' },
  body1: { fontFamily: 'IRANSans', fontSize: SIZES.body1, fontWeight: '400' },
  body2: { fontFamily: 'IRANSans', fontSize: SIZES.body2, fontWeight: '400' },
  caption: { fontFamily: 'IRANSans', fontSize: SIZES.caption, fontWeight: '400' },
  button: { fontFamily: 'IRANSans', fontSize: SIZES.button, fontWeight: '500' },
};

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};

const appTheme = { COLORS, SIZES, FONTS, SPACING };

export default appTheme;
