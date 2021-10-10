import React from 'react';
import Logo from "../assets/img/footer-logo.png"
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
                    <Link to={process.env.REACT_APP_HOME_URL}>
                        <img src={Logo} alt=""/>
                    </Link>
                </div>
                <div className="additional-info">
                    <nav className="footer-menu">
                        <Link to="#">Форум</Link>
                        <Link to="#">Регистрация</Link>
                        <Link to="#">Помощь</Link>
                        <Link to="#">Личный кабинет</Link>
                        <span className="up" onClick={scrollToTop}><i className="las la-angle-up"/></span>
                    </nav>
                    <span className="copyright">© 2016 – 2017 Empire RolePlay. All rights reserved</span>
                    <nav className="socials">
                        <Link to="#"><i className="lab la-vk"/></Link>
                        <Link to="#"><i className="lab la-youtube"/></Link>
                        <Link to="#"><i className="lab la-twitter"/></Link>
                    </nav>
                </div>
            </div>
        </div>
    );
};