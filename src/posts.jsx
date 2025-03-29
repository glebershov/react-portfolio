import './App.css'

function Posts() {
    return 
    <>
    <div className="wrapper">
        <header className="header">
                <a href="./index.html" class="logo">Portfolio</a>
                <nav className="nav">
                <ul className="nav-list">
                    <li className="nav-list_item"><a className="nav-list_link" href="./index.html">Home</a></li>
                    <li className="nav-list_item"><a className="nav-list_active">Post</a></li>
                    <li className="nav-list_item"><a className="nav-list_link" href="./contacts.html">Contacts</a></li>
                </ul>
            </nav>
        </header>
        <div className="container">
            <div className="posts-container" id="postsContainer">
                <div className="loading">Загрузка постов...</div>
            </div>
            <button className="btn-post" id="loadPost">Load posts</button>
            <button className="btn-post" id="showLikes">Show likes</button>
        </div>
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

export default Posts;