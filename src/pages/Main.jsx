import React from 'react';
import {Jumbotron} from "../components/Jumbotron";
import {Comparison} from "../components/Main/Comparison/Comparison";
import {Footer} from "../components/Footer";
import {Carousel} from "../components/Main/Carousel";
import Logo from '../assets/img/logo.png'
import {Steps} from "../components/Main/Steps/Steps";
import {steps} from '../components/Main/const'
import {LightBlock} from "../components/LightBlock";
import {platformComparison} from "../components/Main/Comparison/const";
import {Navbar} from "../components/Navbar/Navbar";
import {publicLinks} from "../components/Navbar/const";

export const Main = () => {
    return (
        <div>
            <Jumbotron>
                <Navbar links={publicLinks} />

                <div className="about-block">
                    <div className="logo">
                        <img src={Logo}
                             alt="Empire RolePlay — игровой проект многопользовательской игры GTA SA, который создан профессионалами на высшем уровне."
                             className="animated fadeIn"/>
                    </div>
                    <hr className="divider animated fadeIn"/>
                    <Carousel />
                </div>

                <Steps headline="Как начать игру?" description="Играйте в легендарную GTA SA по сети с помощью МТА" steps={steps} />
            </Jumbotron>

            <LightBlock
                headline="Почему «Multi Theft Auto»?"
                description="Выбор Multi Theft Auto в качестве платформы для нашего сервера не был
                    случайным.
                    Наблюдая за развитием мультиплеера SA-MP, было
                    замечено, что мультиплеер не так уж и хорош, каким его многие считают. Обновления выходят не так
                    часто, как хотелось бы, а если и
                    выходят, то они направлены на добавление каких-то новых объектов, а не на исправление основных
                    проблем."
                addClassNames="padded_top"
            >
                <Comparison comparisonArray={platformComparison} />
            </LightBlock>

            <Footer/>
        </div>
    );
};