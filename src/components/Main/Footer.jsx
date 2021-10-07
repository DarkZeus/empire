import React from 'react';
import Logo from "../../assets/img/footer-logo.png"
import {Link} from "react-router-dom";

export const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }


    return (
        <div className="landing-block__footer">
            <div className="footer">
                <div className="logo">
                    <Link to="/">
                        <img src={Logo} alt=""/>
                    </Link>
                </div>
                <div className="additional-info">
                    <nav className="footer-menu">
                        <a href="/">Форум</a>
                        <a href="/">Регистрация</a>
                        <a href="/">Помощь</a>
                        <a href="/">Личный кабинет</a>
                        <span className="up" onClick={scrollToTop}><i className="las la-angle-up"/></span>
                    </nav>
                    <span className="copyright">© 2016 – 2017 Empire RolePlay. All rights reserved</span>
                    <nav className="socials">
                        <a href="/"><i className="lab la-vk"/></a>
                        <a href="/"><i className="lab la-youtube"/></a>
                        <a href="/"><i className="lab la-twitter"/></a>
                    </nav>
                </div>
            </div>
        </div>
    );
};