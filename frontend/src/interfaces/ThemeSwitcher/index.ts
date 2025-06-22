import type { ReactNode } from 'react';
import 'styled-components';

export interface ThemeType {
  name: string;
}

export interface ThemeContextType {
  theme: ThemeType;
  toggleTheme: () => void;
}

export interface ThemeContextProps {
  children: ReactNode;
}

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
