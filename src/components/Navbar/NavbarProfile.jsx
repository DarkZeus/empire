import React from 'react';
import {Link} from "react-router-dom";
import Avatar from '../../assets/img/avatar.png'

export const NavbarProfile = () => {
    return (
        <div className="profile-menu">
            <img src={Avatar} alt="Charlie Sanders"/>
            <div className="info">
                <span className="name">Charlie Sanders</span>
                <span className="balance">4 750 руб.</span>
            </div>
            <nav className="popout-menu">
                <Link className="disabled" to="#">Оплата недвижимости</Link>
                <Link className="disabled" to="#">Настройки</Link>
                <hr className="divider"/>
                <Link className="disabled" to="#">Панель лидера</Link>
                <Link className="disabled" to="#">Панель администратора</Link>
                <hr className="divider"/>
                <Link className="disabled" to="#">Выйти</Link>
            </nav>
        </div>
    );
};