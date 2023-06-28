import { Route, Routes } from 'react-router-dom';
import React, { Suspense } from 'react';
import { pagesConfig } from '@/pages/pagesConfig';

export const AppRoutes = () => {
	return (
		<Suspense fallback={<div>loading</div>}>
			<Routes>
				{Object.values(pagesConfig).map(({ element, path }) => (
					<Route path={path} element={element} />
				))}
			</Routes>
		</Suspense>
	);
};
