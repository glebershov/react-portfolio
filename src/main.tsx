import { createRoot } from 'react-dom/client'
import App from './App/ui/App.tsx'


const rootElement: HTMLElement | null = document.getElementById('root');
const root = createRoot(rootElement);

createRoot(document.getElementById('root')).render(
    <App/> 
)
