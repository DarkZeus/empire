import React from 'react';
import {Jumbotron} from "../components/Main/Jumbotron";
import {Navbar} from "../components/Navbar";
import LogoLS from "../assets/img/logo-ls.png"
import {Link} from "react-router-dom";
import {Codex} from "../components/UCP/Codex";
import {Footer} from "../components/Main/Footer";

export const Ucp = () => {
    return (
        <div>
            <Jumbotron>
                <Navbar/>

                <div className="header-buttons">
                    <img src={LogoLS}
                         alt="Empire RolePlay — игровой проект многопользовательской игры GTA SA, который создан профессионалами на высшем уровне."
                         className="logo-ls"/>
                    <p className="header-buttons__text">
                        Для того, чтобы начать игру на нашем проекте, вам необходимо зарегистрировать аккаунт на
                        сайте.
                        Если вы уже зарегистрированы, авторизуйтесь и создайте своего уникального персонажа.
                    </p>
                    <nav className="header-buttons__buttons">
                        <Link to="/">Создать аккаунт</Link>
                        <Link to="/">Авторизация</Link>
                    </nav>
                </div>
            </Jumbotron>

            <Codex />

            <Footer />
        </div>
    );
};