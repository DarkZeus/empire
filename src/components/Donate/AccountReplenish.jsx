import React from 'react';
import Render1 from '../../assets/img/render1.png'
import Render2 from '../../assets/img/render2.png'

export const AccountReplenish = () => {
    return (
        <div className="refill">
            <span className="refill-name">Пополнение игрового счета</span>
            <div className="clr"/>
            <span className="refill-description">Выберите персонажа</span>
            <div className="character-choose">
                <div className="player active">
                    <img src={Render1} alt="Charlie Sanders"/>
                    <div className="info">
                        <span className="name">Charlie Sanders</span>
                        <span className="level">Level 7</span>
                    </div>
                </div>
                <div className="player">
                    <img src={Render2} alt="Charlie Sanders"/>
                    <div className="info">
                        <span className="name">Marty Mcfly</span>
                        <span className="level">Level 1</span>
                    </div>
                </div>
            </div>
        </div>
    );
};