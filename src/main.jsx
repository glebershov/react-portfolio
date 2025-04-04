import { createRoot } from 'react-dom/client'
import Header from './widgets/Header/header'
import Footer from './widgets/Footer/footer'
import Home from './pages/HomePage/home'


createRoot(document.getElementById('root')).render(
        <Home/>
)
