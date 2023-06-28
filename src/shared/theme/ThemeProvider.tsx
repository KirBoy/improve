import React, { useMemo, useState } from 'react';
import {
	LOCAL_STORAGE_THEME_VALUE,
	Theme,
	ThemeContext,
	ThemeProps,
} from './ThemeContext';

interface ThemeProviderProps {
	children: React.ReactNode;
}
const defaultTheme: Theme =
	(localStorage.getItem(LOCAL_STORAGE_THEME_VALUE) as Theme) || 'light';
const ThemeProvider = ({ children }: ThemeProviderProps) => {
	const [theme, setTheme] = useState<Theme>(defaultTheme);

	const value = useMemo((): ThemeProps => {
		return {
			theme,
			setTheme,
		};
	}, [theme]);

	return (
		<ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
	);
};

export default ThemeProvider;
