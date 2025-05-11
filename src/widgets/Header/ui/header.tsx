import { FC, JSX } from 'react';
import { Link } from 'react-router';
import './header.css';

const Header: FC = ():JSX.Element => {
    return(
    <header className="header">
                <Link to="/" className="logo">Portfolio</Link>
                <nav className="nav">
                <ul className="nav-list">
                    <li className="nav-list_item"><Link to="/" className="nav-list_link">Home</Link></li>
                    <li className="nav-list_item"><Link to="/posts" className="nav-list_link">Posts</Link></li>
                    <li className="nav-list_item"><Link to="/contacts" className="nav-list_link">Contacts</Link></li>
                </ul>
            </nav>
    </header>
    )
}

export default Header;