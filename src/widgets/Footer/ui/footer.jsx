import './footer.css';

import Telegram from './iconsFooter/telegram.svg?react'
import Discord from './iconsFooter/discord.svg?react';
import Vk from './iconsFooter/vk.svg?react'
import Instagram from './iconsFooter/instagram.svg?react'
import Linkedin from './iconsFooter/linkedin.svg?react'

function Footer() {
    return(
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
    )
}

export default Footer;