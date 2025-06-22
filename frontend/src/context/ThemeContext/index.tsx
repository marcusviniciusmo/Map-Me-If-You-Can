import { createContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import type {
  ThemeType,
  ThemeContextType,
  ThemeContextProps,
} from '../../interfaces/ThemeSwitcher';
import { ThemesNames } from '../../enums/ThemeSwitcher';
import { DarkTheme } from '../../styles/themes/dark';
import { LightTheme } from '../../styles/themes/light';

export const ThemeContext = createContext({} as ThemeContextType);

export function ThemeContextProvider({ children }: ThemeContextProps) {
  const [theme, setTheme] = useState<ThemeType>(LightTheme);

  function toggleTheme() {
    setTheme((prevTheme) =>
      prevTheme.name === ThemesNames.LIGHT ? DarkTheme : LightTheme,
    );
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}
