import React from 'react';
import {Link} from "react-router-dom";

export const Navbar = () => {
    return (
        <div>
            <ul className="header-menu">
                <li><Link to="/">Главная</Link></li>
                <li><a href="/">Новости</a></li>
                <li><a href="/">Форум</a></li>
                <li><a href="/">Регистрация</a></li>
                <li><a href="/">О проекте</a></li>
                <li><Link to="/ucp">Личный кабинет</Link></li>
                <li><Link to="/donate">Донат</Link></li>
            </ul>
        </div>
    );
};