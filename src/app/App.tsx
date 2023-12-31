import React from 'react';
import '../index.scss';

import { Link } from 'react-router-dom';
import { useTheme } from '@/shared/theme/useTheme';
import { AppRoutes } from '@/app/routes';

export const App = () => {
	const { theme, toggleTheme } = useTheme();
	return (
		<div className={theme}>
			<div>
				<div>
					<h1 className='font-light text-3xl underline hover:text-cyan-700 cursor-pointe inline-block text-skin-muted'>
						Hello world!
					</h1>
				</div>
				<button
					className='inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20'
					onClick={toggleTheme}
				>
					button
				</button>
				<Link to='/'>главная</Link>
				<Link to='/calendar'>Calendar</Link>
				<AppRoutes />
			</div>
		</div>
	);
};
