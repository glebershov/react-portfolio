import './header.css';

function Header() {
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
}

export default Header;