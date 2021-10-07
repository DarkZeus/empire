import React from 'react';
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return (
        <div>
            <ul className="header-menu">
                <li><NavLink exact to="/">Главная</NavLink></li>
                <li><a href="/">Новости</a></li>
                <li><a href="/">Форум</a></li>
                <li><a href="/">Регистрация</a></li>
                <li><a href="/">О проекте</a></li>
                <li><NavLink exact to="/ucp">Личный кабинет</NavLink></li>
                <li><NavLink exact to="/donate">Донат</NavLink></li>
            </ul>
        </div>
    );
};