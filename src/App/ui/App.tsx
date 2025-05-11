import { FC, JSX } from 'react';
import {BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from 'react-redux';
import Header from "../../widgets/Header/ui/header.tsx";
import Footer from "../../widgets/Footer/ui/footer.tsx";
import Home from '../../pages/HomePage/ui/home.tsx';
import Contacts from "../../pages/ContactsPage/ui/contacts.tsx";
import Posts from "../../pages/PostsPage/ui/posts.tsx";
import { store } from "../../pages/PostsPage/model/Store/store.ts";
import { Store } from '@reduxjs/toolkit';

type AppStore = typeof store;

const App: FC = ():JSX.Element => {
  return (
    <BrowserRouter>
      <Provider store={store as Store}>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contacts" element={<Contacts/>}/>
          <Route path="/posts" element={<Posts/>}/>
        </Routes>
        <Footer/>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
