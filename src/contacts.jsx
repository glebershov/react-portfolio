import './App.css'

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
}
export default Contacts;