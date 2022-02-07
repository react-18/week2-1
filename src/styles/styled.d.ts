import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      primaryBlue: string;
      accentPrimaryBlue: string;
      defaultGray: string;
      darkGray: string;
      subGray: string;
      backgroundGray: string;
      warningYellow: string;
      defaultWhite: string;
    };
    border: {
      radius: string;
    };
    fontWeight: {
      small: number;
      large: number;
    };
    fontSize: {
      small: string;
      middle: string;
      large: string;
      xLarge: string;
    };
    breakPoint: {
      mobile: string;
    };
  }
}
