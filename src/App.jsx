import { Route, Routes } from "react-router-dom"
import Header from "./widgets/Header/ui/header"
import Footer from "./widgets/Footer/ui/footer"
import Home from './pages/HomePage/ui/home'
import Contacts from "./pages/ContactsPage/ui/contacts"
import Posts from "./pages/PostsPage/ui/posts"

function App() {
    return (
        <>
            <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/contacts" element={<Contacts/>}/>
                    <Route path="/posts" element={<Posts/>}/>
                </Routes>
            <Footer/>
        </>
    )
}

export default App