import { RouteProps } from 'react-router-dom';
import { MainPage } from '@/pages/MainPage';
import { Calendar } from '@/pages/CalendarPage';

type Pages = 'Main' | 'Calendar';

const pagesPaths: Record<Pages, string> = {
	Main: '/',
	Calendar: '/calendar',
};

export const pagesConfig: Record<Pages, RouteProps> = {
	Main: {
		element: <MainPage />,
		path: pagesPaths.Main,
	},
	Calendar: {
		element: <Calendar />,
		path: pagesPaths.Calendar,
	},
};
