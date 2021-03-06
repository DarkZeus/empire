import React from 'react';
import {Jumbotron} from "../components/Jumbotron";
import LogoLS from "../assets/img/logo-ls.png"
import {Link} from "react-router-dom";
import {Codex} from "../components/UCP/Codex";
import {Footer} from "../components/Footer";
import {Navbar} from "../components/Navbar/Navbar";
import {publicLinks} from "../components/Navbar/const";

export const Ucp = () => {
    return (
        <div>
            <Jumbotron>
                <Navbar links={publicLinks} />

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
                        <Link to="#">Создать аккаунт</Link>
                        <Link to="#">Авторизация</Link>
                    </nav>
                </div>
            </Jumbotron>

            <Codex />

            <Footer />
        </div>
    );
};