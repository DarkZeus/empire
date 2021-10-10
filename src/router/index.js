import {Main} from "../pages/Main";
import {Ucp} from "../pages/UCP";
import {Donate} from "../pages/Donate";

export const routes = [
    {path: `${process.env.REACT_APP_HOME_URL}/`, component: Main, exact: true},
    {path: `${process.env.REACT_APP_HOME_URL}/ucp`, component: Ucp, exact: true},
    {path: `${process.env.REACT_APP_HOME_URL}/donate`, component: Donate, exact: true},
]