import './home.css'
import { FC, JSX } from 'react';

const Home: FC = ():JSX.Element => {
  
  return (
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
  )
}

export default Home;
