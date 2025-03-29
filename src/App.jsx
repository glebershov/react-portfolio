import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

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
                    <li className="social__item"><a href="#!"><img src="./img/icons/telegram.svg" alt="Link"></img></a></li>
                    <li className="social__item"><a href="#!"><img src="./img/icons/discord.svg" alt="Link"></img></a></li>
                    <li className="social__item"><a href="#!"><img src="./img/icons/vk.svg" alt="Link"></img></a></li>
                    <li className="social__item"><a href="#!"><img src="./img/icons/linkedin.svg" alt="Link"></img></a></li>
                    <li className="social__item"><a href="#!"><img src="./img/icons/instagram.svg" alt="Link"></img></a></li>
                    </ul>
                </div>
        </footer>
    </div>
    </>
  )
}

export default App
