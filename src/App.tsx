import React, { lazy, Suspense, useState } from 'react';
import classes from './ab.modules.scss';
import './styles.scss';

import { Link, Route, Routes } from 'react-router-dom';

const MainPage = lazy(() => import('./pages/MainPage'));
const Calendar = lazy(() => import('./pages/Calendar'));

export const App = () => {
	return (
		<div>
			<Link to='/'>главная</Link>
			<Link to='/calendar'>Calendar</Link>
			<Suspense fallback={<div>loading</div>}>
				<Routes>
					<Route path='/' element={<MainPage />} />
					<Route path='/calendar' element={<Calendar />} />
				</Routes>
			</Suspense>
		</div>
	);
};
