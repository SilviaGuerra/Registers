import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const browserRouter = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Container} />
            <Route path="/payments" component={Payments} />
            <Route path="/details" component={Details} />
            <Route path="/data" component={Data} />
            <Route path="/breakdown" component={Breakdown} />
        </Switch>
    </BrowserRouter>
);

export default browserRouter;