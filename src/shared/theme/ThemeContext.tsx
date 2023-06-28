import { createContext } from 'react';

export const LIGHT = 'light';
export const DARK = 'dark';

export type Theme = typeof LIGHT | typeof DARK;

export interface ThemeProps {
	theme?: Theme;
	setTheme?: (theme: Theme) => void;
}

export const LOCAL_STORAGE_THEME_VALUE = 'theme';
export const ThemeContext = createContext<ThemeProps>({});
