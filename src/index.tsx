import { createRoot } from 'react-dom/client';
import './index.scss';
import { App } from './app/App';
import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from '@/shared/theme/ThemeProvider';

const element = document.getElementById('root');
const root = createRoot(element!);

root.render(
	<BrowserRouter>
		<ThemeProvider>
			<App />
		</ThemeProvider>
	</BrowserRouter>
);
