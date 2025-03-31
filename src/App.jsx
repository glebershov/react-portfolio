import { useState, useEffect } from 'react'
import './App.css'
import Telegram from './img/icons/telegram.svg?react';
import Discord from './img/icons/discord.svg?react';
import Vk from './img/icons/vk.svg?react'
import Instagram from './img/icons/instagram.svg?react'
import Linkedin from './img/icons/linkedin.svg?react'

let posts = [];

async function loadPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) throw new Error('Ошибка загрузки');

        posts = await response.json();
        console.log(posts);
        // posts = posts.map(post => ({
        //     ...post,
        //     likes: false
        // }));
        // containerPosts.innerHTML = '';
        // showPostCard();
    } catch (error) {
        // containerPosts.innerHTML = 
        //     <div className="error" style="color: red; text-align: center;">
        //         Ошибка: ${error.message}
        //     </div>
        // ;
    }
}



function App() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    loadPosts()}
    , [])


  return (
    <>
    <div className="wrapper">
        <header className="header">
                <a href="./index.html" className="logo">Portfolio</a>
                <nav className="nav">
                <ul className="nav-list">
                    <li className="nav-list_item"><a className="nav-list_active">Home</a></li>
                    <li className="nav-list_item"><a className="nav-list_link" href="./posts.html">Posts</a></li>
                    <li className="nav-list_item"><a className="nav-list_link" href="./contacts.html">Contacts</a></li>
                </ul>
            </nav>
        </header>

        <main className="main">
            <div className="main-content">
                <div className="main_wrapper">
                    <h1 className="main__title">
                        <strong>I'm <em>Gleb </em></strong>
                        a frontend developer.
                    </h1>
                    <a href="https://github.com/glebershov" className="btn">Show github</a>
                </div>
            </div>
            <div className="about-section">
                <h2 className="title-1">About me</h2>
                <p className="content-list__item_3">Hello, I'm Gleb, a developer from Rostov-on-Don. I'm 21 years old and I made this portfolio site and be inspired by Brand Porsche
                </p>
            </div>    
        </main>

        

        <footer className="footer">
                <div className="footer__wrapper">
                    <ul className="social">
                    <li className="social__item"><a href="#!"><Vk></Vk></a></li>
                    <li className="social__item"><a href="#!"><Discord></Discord></a></li>
                    <li className="social__item"><a href="#!"><Instagram></Instagram></a></li>
                    <li className="social__item"><a href="#!"><Linkedin></Linkedin></a></li>
                    <li className="social__item"><a href="#!"><Telegram></Telegram></a></li>
                    </ul>
                </div>
        </footer>
    </div>
    </>
  )
}

export default App
