import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {routes} from "../router";

export const AppRouter = () => {
    return (
        <div>
            <Switch>
                {routes.map(route =>
                    <Route
                        key={route.path}
                        component={route.component}
                        path={route.path}
                        exact={route.exact}
                    />
                )}
                <Redirect to="/"/>
            </Switch>
        </div>
    );
};
