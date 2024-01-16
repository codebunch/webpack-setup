import { createRoot } from 'react-dom/client';
import './style.css';
import MyApp from './App';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<MyApp />);