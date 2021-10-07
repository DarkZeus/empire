import React from 'react';
import {Jumbotron} from "../components/Main/Jumbotron";
import {Comparison} from "../components/Main/Comparison";
import {Footer} from "../components/Main/Footer";
import {Navbar} from "../components/Navbar";
import {Carousel} from "../components/Main/Carousel";
import Logo from '../assets/img/logo.png'

export const Main = () => {
    return (
        <div>
            <Jumbotron>
                <Navbar/>

                <div className="about-block">
                    <div className="logo">
                        <img src={Logo}
                             alt="Empire RolePlay — игровой проект многопользовательской игры GTA SA, который создан профессионалами на высшем уровне."
                             className="animated fadeIn"/>
                    </div>
                    <hr className="divider animated fadeIn"/>
                    <Carousel />
                </div>

                <div className="how-to-play">
                    <div className="how-to-headline">
                        <h2 className="headline">Как начать игру?</h2>
                        <span className="description">Играйте в легендарную GTA SA по сети с помощью МТА</span>
                    </div>
                    <div className="steps">
                        <div className="step">
                            <p className="square"><span>1</span></p>
                            <span className="text-headline">Регистрация</span>
                            <p className="text-description">Зарегистрируйте аккаунт, для того чтобы получить доступ к
                                UCP</p>
                        </div>
                        <div className="step">
                            <p className="square"><span>2</span></p>
                            <span className="text-headline">Создание персонажа</span>
                            <p className="text-description">Создайте своего уникального персонажа который будет
                                отличаться от
                                других</p>
                        </div>
                        <div className="step">
                            <p className="square"><span>3</span></p>
                            <span className="text-headline">Multi Theft Auto</span>
                            <p className="text-description">Запустите MTА и добавьте IP адрес нашего сервера в
                                избранное</p>
                        </div>
                    </div>
                </div>
            </Jumbotron>
            <Comparison/>

            <Footer/>
        </div>
    );
};