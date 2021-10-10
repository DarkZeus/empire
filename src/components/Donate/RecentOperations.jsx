import React from 'react';
import Render1 from '../../assets/img/render1.png'
import Render2 from '../../assets/img/render2.png'
import {Link} from "react-router-dom";

export const RecentOperations = () => {
    return (
        <div className="last-operations">
            <span className="last-operations__header">Последние операции</span>
            <div className="last-operations__body">
                <div className="operation">
                    <span className="date"><span className="month">7 янв</span><span className="time">21:54</span></span>
                    <div className="details">
                        <img src={Render1} alt="" />
                            <p className="text">Покупка VIP статуса</p>
                    </div>
                    <span className="price withdrawal">– 270 ₽</span>
                </div>
                <div className="operation">
                    <span className="date"><span className="month">7 янв</span><span className="time">21:52</span></span>
                    <div className="details">
                        <img src={Render1} alt="" />
                            <p className="text">Пополнение игрового счета</p>
                    </div>
                    <span className="price success">+ 5000 ₽</span>
                </div>
                <div className="operation">
                    <span className="date"><span className="month">6 янв</span><span className="time">14:10</span></span>
                    <div className="details">
                        <img src={Render2} alt="" />
                            <p className="text">Пополнение игрового счета</p>
                    </div>
                    <span className="price success">+ 1000 ₽</span>
                </div>
            </div>
            <div className="last-operations__footer">
                <Link to="#" className="lasts">Вся история по операциям</Link>
            </div>
        </div>
);
};