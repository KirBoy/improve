import React, { lazy, Suspense } from 'react';
import '../index.scss';

import { Link, Route, Routes } from 'react-router-dom';
import { useTheme } from '../theme/useTheme';

const MainPage = lazy(() => import('./MainPage'));
const Calendar = lazy(() => import('./Calendar'));

export const App = () => {
	const { theme, toggleTheme } = useTheme();
	return (
		<div className={theme}>
			<div className='bg-base'>
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
				<Suspense fallback={<div>loading</div>}>
					<Routes>
						<Route path='/' element={<MainPage />} />
						<Route path='/calendar' element={<Calendar />} />
					</Routes>
				</Suspense>
			</div>
		</div>
	);
};
