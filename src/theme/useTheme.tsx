import {
	DARK,
	LIGHT,
	LOCAL_STORAGE_THEME_VALUE,
	Theme,
	ThemeContext,
} from './ThemeContext';
import { useContext } from 'react';

interface ThemeResult {
	theme: Theme;
	toggleTheme: VoidFunction;
}

export const useTheme = (): ThemeResult => {
	const { theme, setTheme } = useContext(ThemeContext);

	const toggleTheme = () => {
		const newTheme: Theme = theme === LIGHT ? DARK : LIGHT;
		localStorage.setItem(LOCAL_STORAGE_THEME_VALUE, newTheme);
		if (setTheme) {
			setTheme(newTheme);
		}
	};

	return {
		theme: theme || DARK,
		toggleTheme,
	};
};
