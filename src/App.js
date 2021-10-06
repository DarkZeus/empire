import React from 'react';
import './assets/scss/App.scss';
import {BrowserRouter} from "react-router-dom";
import {AppRouter} from "./components/AppRouter";


export const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <AppRouter />
            </BrowserRouter>
        </div>
    );
};
