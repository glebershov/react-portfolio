import './App.css'
import telegram from './img/icons/telegram.svg?react';
import discord from './img/icons/discord.svg?react';
import vk from './img/icons/vk.svg?react'
import instagram from './img/icons/instagram.svg?react'
import linkedin from './img/icons/linkedin.svg?react'


function Contacts() {
    <>
    <div className="wrapper">
        <header className="header">
                <a href="./index.html" className="logo">Portfolio</a>
                <nav className="nav">
                <ul className="nav-list">
                    <li className="nav-list_item"><a className="nav-list_link" href="./index.html">Home</a></li>
                    <li className="nav-list_item"><a className="nav-list_link" href="./posts.html">Posts</a></li>
                    <li className="nav-list_item"><a className="nav-list_active">Contacts</a></li>
                </ul>
            </nav>
        </header>

        <main className="section">
            <div className="container">
                <h1 className="title-1">Contacts</h1>
                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Location</h2>
                        <p className="content-list__item_2">Rostov-on-Don, Russia</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Telegram</h2>
                        <p className="content-list__item_2"><a href="https://t.me/blessse3d">blessse3d</a></p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Email</h2>
                        <p className="content-list__item_2"><a href="mailto:gleb.ershov.04@icloud.com">gleb.ershov.04@icloud.com</a></p>
                    </li>
                </ul>
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
}
export default Contacts;