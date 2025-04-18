import {Route, Routes } from "react-router-dom";
import { Provider } from 'react-redux';
import Header from "./widgets/Header/ui/header";
import Footer from "./widgets/Footer/ui/footer";
import Home from './pages/HomePage/ui/home';
import Contacts from "./pages/ContactsPage/ui/contacts";
import PostsList from "./pages/PostsPage/ui/posts";
import { postsStore } from "./api/Store/Store";

function App() {
  return (
    <>
      <Provider store={postsStore}>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contacts" element={<Contacts/>}/>
          <Route path="/posts" element={<PostsList/>}/>
        </Routes>
        <Footer/>
      </Provider>
    </>
  );
}

export default App;
