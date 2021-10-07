import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {Button} from "../UI/Button/Button";

export const Carousel = () => {
    const settings = {
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        dotsClass: "slider-menu",
        dots: true,
        pauseOnHover: true,
    };

    return (
        <div className="carousel">
            <Slider {...settings}>
                <div className="carousel-item">
                    <p className="text animated fadeIn">Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                        unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into electronic typesetting, remaining
                        essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
                        containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
                        PageMaker including versions of Lorem Ipsum.
                        <br/>
                        <br/>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus expedita repudiandae soluta?
                        Cupiditate dolor explicabo facilis fugit id iusto labore magni necessitatibus, omnis, quod vero.
                    </p>
                    <Button>Начать играть</Button>
                </div>
                <div className="carousel-item">
                    <p className="text animated fadeIn">Lorem Ipsum är en utfyllnadstext från tryck- och
                        förlagsindustrin. Lorem ipsum har varit standard ända sedan 1500-talet, när en okänd boksättare
                        tog att antal bokstäver och blandade dem för att göra ett provexemplar av en bok. Lorem ipsum
                        har inte bara överlevt fem århundraden, utan även övergången till elektronisk typografi utan
                        större förändringar. Det blev allmänt känt på 1960-talet i samband med lanseringen av
                        Letraset-ark med avsnitt av Lorem Ipsum, och senare med mjukvaror som Aldus PageMaker.
                        <br/>
                        <br/>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur aut consequatur earum
                        facere fugit labore natus nihil, nobis odio quam quasi quis tempore totam vitae?</p>
                    <Button>Сравнение</Button>
                </div>
                <div className="carousel-item">
                    <p className="text animated fadeIn">Lorem Ipsum је једноставно модел текста који се користи у
                        штампарској и словослагачкој индустрији. Lorem ipsum је био стандард за модел текста још од
                        1500. године, када је непознати штампар узео кутију са словима и сложио их како би направио
                        узорак књиге. Не само што је овај модел опстао пет векова, него је чак почео да се користи и у
                        електронским медијима, непроменивши се. Популаризован је шездесетих година двадесетог века
                        заједно са листовима летерсета који су садржали Lorem Ipsum пасусе, а данас са софтверским
                        пакетом за прелом као што је Aldus PageMaker који је садржао Lorem Ipsum верзије.
                        <br/>
                        <br/>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto, blanditiis ea error
                        nemo, nulla placeat praesentium quae, reprehenderit tempore ullam vero voluptas voluptatem! In.
                    </p>
                    <Button>Донат</Button>
                </div>
                <div className="carousel-item">
                    <p className="text animated fadeIn">Lorem Ipsum is slechts een proeftekst uit het drukkerij- en
                        zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw,
                        toen een onbekende drukker een zethaak met letters nam en ze door elkaar husselde om een
                        font-catalogus te maken. Het heeft niet alleen vijf eeuwen overleefd maar is ook, vrijwel
                        onveranderd, overgenomen in elektronische letterzetting. Het is in de jaren '60 populair
                        geworden met de introductie van Letraset vellen met Lorem Ipsum passages en meer recentelijk
                        door desktop publishing software zoals Aldus PageMaker die versies van Lorem Ipsum bevatten.
                        <br/>
                        <br/>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus animi, aperiam debitis enim
                        eos inventore ipsum maiores nostrum obcaecati perferendis perspiciatis quasi qui quidem
                        recusandae.</p>
                    <Button>О проекте</Button>
                </div>
            </Slider>
        </div>
    );
};