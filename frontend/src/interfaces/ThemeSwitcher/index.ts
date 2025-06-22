import 'styled-components';

export interface ThemeType {
  name: string;
}

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
