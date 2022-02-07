import { DefaultTheme } from 'styled-components';

const defaultTheme: DefaultTheme = {
  color: {
    primaryBlue: '#1565C0',
    accentPrimaryBlue: '#2196F3',
    defaultGray: '#323D45',
    darkGray: '#C2C2C2',
    subGray: '#939FA5',
    backgroundGray: '#E5E5E5',
    warningYellow: '#FFA000',
    defaultWhite: '#FFFFFF',
  },
  border: {
    radius: '4px',
  },
  fontWeight: {
    small: 400,
    large: 600,
  },
  fontSize: {
    small: '12px',
    middle: '14px',
    large: '16px',
    xLarge: '20px',
  },
  breakPoint: {
    mobile: '360px',
  },
};

export { defaultTheme };
