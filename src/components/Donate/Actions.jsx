import React from 'react';
import {Link} from "react-router-dom";

export const Actions = () => {
    return (
        <nav className="donate-section__menu">
            <Link to="#" className="active">Пополнение счета</Link>
            <Link to="#" className="disabled">VIP статус</Link>
            <Link to="#" className="disabled">Товары и услуги</Link>
            <Link to="#" className="disabled">Уникальный транспорт</Link>
            <Link to="#" className="disabled">Частые вопросы</Link>
        </nav>
    );
};