import { createRoot } from 'react-dom/client';
import './styles.scss'
import {Test} from "./test";
const element = document.getElementById('root');
const root = createRoot(element!);

root.render(<Test />)