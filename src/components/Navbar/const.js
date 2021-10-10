import {Link, NavLink} from "react-router-dom";

export const ucpLinks = <>
    <NavLink exact to={process.env.REACT_APP_HOME_URL}>Главная</NavLink>
    <Link className="disabled" to="#">Общая информация</Link>
    <Link className="disabled" to="#">Персонажи</Link>
    <Link className="disabled" to="#">Настройки</Link>
    <NavLink exact to={`${process.env.REACT_APP_HOME_URL}/donate`}>Игровой магазин</NavLink>
</>

export const publicLinks = <>
    <NavLink exact to={process.env.REACT_APP_HOME_URL}>Главная</NavLink>
    <Link className="disabled" to="#">Новости</Link>
    <Link className="disabled" to="#">Форум</Link>
    <Link className="disabled" to="#">Регистрация</Link>
    <Link className="disabled" to="#">О проекте</Link>
    <NavLink exact to={`${process.env.REACT_APP_HOME_URL}/ucp`}>Личный кабинет</NavLink>
    <NavLink exact to={`${process.env.REACT_APP_HOME_URL}/donate`}>Донат</NavLink>
</>