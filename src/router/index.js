import {Main} from "../pages/Main";
import {Ucp} from "../pages/UCP";
import {Donate} from "../pages/Donate";

export const routes = [
    {path: '/', component: Main, exact: true},
    {path: '/ucp', component: Ucp, exact: true},
    {path: '/donate', component: Donate, exact: true},
]