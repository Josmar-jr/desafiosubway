import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary100: string;
      primary200: string;
      primary300: string;

      secondary100: string;
      secondary200: string;
      secondary300: string;

      white100: string;
      white200: string;
      white300: string;

      white: string;
      black: string;

      gray100: string;
      gray200: string;
      gray300: string;
      gray400: string;
      gray500: string;
      gray600: string;
      gray700: string;
    };
  }
}
