// themeConfig.js

import { createTheme } from '@mui/material/styles';

// Define your theme variables
const themeConfig = {
  colors: {
    primary: '#c10100',
    secondary: '#FFFF00',
    background: '#f5f5f5',
    navBackground: '#000000',
    appBar: '#333333',
    // Add more theme variables as needed
  },
  fonts: {
    main: '"Nunito", sans-serif !important',
    
  },
  breakpoints : {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
      
    },
  },
};

// Create the Material-UI theme
const theme = createTheme({
  palette: {
    primary: {
      main: themeConfig.colors.primary,
    },
    secondary: {
      main: themeConfig.colors.secondary,
    },
    background: {
      default: themeConfig.colors.background,
    },
    navigation: {
      default: themeConfig.colors.navBackground,
    },
    highlight: {
      default: themeConfig.colors.secondary,
    },
    common: {
      white: '#ffffff',
      text: '#000000'
    }
  },
  settings: {
    name:{
      default: 'REDX',
    },
    navHeight:{
      default: '100px',
    }
  },
  typography: {
    fontFamily: [
      'Nunito',
      'sans-serif',   
    ].join(',')
  },
  breakpoints: themeConfig.breakpoints,

});

export default theme;
