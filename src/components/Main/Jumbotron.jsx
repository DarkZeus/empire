import React from 'react';
import {Navbar} from "../Navbar";
import {Carousel} from "./Carousel";
import Logo from '../../assets/img/logo.png'


export const Jumbotron = () => {
    return (
        <div>
            <div className="landing-block__header">
                <Navbar/>

                <div className="about-block">
                    <img src={Logo}
                         alt="Empire RolePlay — игровой проект многопользовательской игры GTA SA, который создан профессионалами на высшем уровне."
                         className="logo animated fadeIn"/>
                    <hr className="divider animated fadeIn"/>
                    <Carousel />
                </div>

                <div className="how-to-play">
                    <div className="how-to-headline">
                        <h2 className="headline">Как начать игру?</h2>
                        <span className="description">Играйте в легендарную GTA SA по сети с помощью МТА</span>
                    </div>
                    <div className="steps">
                        <div className="step1">
                            <span className="square square-one"></span>
                            <span className="text-headline">Регистрация</span>
                            <p className="text-descr">Зарегистрируйте аккаунт, для того чтобы получить доступ к UCP</p>
                        </div>
                        <div className="step2">
                            <span className="square square-two"></span>
                            <span className="text-headline">Создание персонажа</span>
                            <p className="text-descr">Создайте своего уникального персонажа который будет отличаться от
                                других</p>
                        </div>
                        <div className="step3">
                            <span className="square square-three"></span>
                            <span className="text-headline">Multi Theft Auto</span>
                            <p className="text-descr">Запустите MTА и добавьте IP адрес нашего сервера в избранное</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};