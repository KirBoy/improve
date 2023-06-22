import { createRoot } from 'react-dom/client';
import './styles.scss';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';

const element = document.getElementById('root');
const root = createRoot(element!);

root.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
);
