import 'styled-components';

export interface ThemeType {}

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
