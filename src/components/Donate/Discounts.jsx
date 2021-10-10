import React from 'react';
import {Link} from "react-router-dom";

export const Discounts = () => {
    return (
        <div className="donate-section__discounts">
            <div className="discounts">
                <span className="discounts-header">Акции и скидки</span>
                <div className="discounts-body">
                    <div className="discount">
                        <span className="month">7 января</span>
                        <span className="description">День открытия проекта</span>
                        <div className="discount-label">25%</div>
                    </div>
                    <div className="discount">
                        <span className="month">1 февраля</span>
                        <span className="description">День Великой Победы</span>
                        <div className="discount-label">10%</div>
                    </div>
                    <div className="discount">
                        <span className="month">1 июня</span>
                        <span className="description">Открытие летнего сезона</span>
                        <div className="discount-label">10%</div>
                    </div>
                    <Link to="#" className="all-discounts">Все скидки и акции</Link>
                </div>
            </div>
        </div>
    );
};