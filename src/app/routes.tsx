
import * as React from 'react';
import { Route, Switch } from 'react-router';

import HomeView from './views/HomeView';
import NotFoundView from './views/NotFoundView';

export const RouteMap = () => (
    <div className="app-background">
        <Switch>
            <Route path="/" exact component={HomeView}/>
            <Route component={NotFoundView} />
        </Switch>
    </div>
);
