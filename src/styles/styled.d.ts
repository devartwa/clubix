import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      BACKGROUND: string;
      WHITE: string;
      BLACK: string;
      ORANGE: string;
      GREEN: string;
      DARK_GREEN: string;
      RED: string;
      DARK_RED: string;
      PRIMARY_TEXT: string;
      SECONDARY_TEXT: string;
      INTERACTIVE_TEXT: string;
      ERROR_TEXT: string;
      DISABLED_TEXT: string;
    };
  }
}
