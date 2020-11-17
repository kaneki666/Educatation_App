import {createText, createBox, BaseTheme} from '@shopify/restyle';

const theme = {
  colors: {
    primary: '#2CB9B0',
    buttonSecondary: 'rgba(12, 12, 52, 0.05)',
    title: '#0C0D34',
    text: 'rgba(12,13,52, 0.7)',
    white: 'white',
    slideGrey: '#F3F0EF',
    darkGrey: '#8A8D90',
    danger: '#FF0058',
    lightGrey: '#C0C0C0',
    orange: '#FF6E5C',
    red: '#C41B4D',
    black: '#070700',
    bluish: '#12DDA8',
    bgDark: '#272D33',
    iconBgDark: '#383C40',
    lightBlue: '#BFEAF5',
    service1: '#FFE8E9',
    service2: '#F1E0FF',
    service3: '#BFEAF5',
    service4: '#F2E0FF',
    service5: '#C9E9E7',
    service6: '#FEF3E7',
    noticeColorDark: '#FFE8A3',
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
    xll: 80,
  },
  borderRadii: {
    null: 0,
    s: 4,
    m: 10,
    l: 25,
    xl: 75,
  },
  textVariants: {
    hero: {
      fontSize: 80,
      lineHeight: 150,
      color: 'white',
      textAlign: 'center',
      fontFamily: 'Poppins-Bold',
    },
    title1: {
      fontFamily: 'Poppins-SemiBold',
      fontSize: 28,
      color: 'title',
    },
    title2: {
      fontSize: 24,
      lineHeight: 30,
      fontFamily: 'Poppins-SemiBold',
      color: 'title',
    },
    body: {
      fontSize: 15,
      lineHeight: 24,
      fontFamily: 'Poppins-Regular',
      color: 'text',
    },
    button: {
      fontSize: 15,
      textAlign: 'center',
      fontFamily: 'Poppins-SemiBold',
    },
    header: {
      fontSize: 16,
      lineHeight: 24,
      fontFamily: 'Poppins-SemiBold',
      color: 'title',
    },
    blogTitle: {
      fontSize: 26,
      color: 'primary',
      margin: 's',
    },
    blogSubtitle: {
      fontSize: 15,
      color: 'white',
      margin: 's',
    },
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
    largeTablet: 1024,
  },
};

export type Theme = typeof theme;
export const Text = createText<Theme>();
export const Box = createBox<Theme>();
export default theme;
