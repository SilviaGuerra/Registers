import React from 'react';
import { Route, Switch } from 'react-router-dom';

const browserRouter = () => (
    <Switch>
        <Route exact path="/" component={Container} />
        <Route path="/" component={Payments} />
        <Route path="/payments" component={Details} />
        <Route path="/details" component={Data} />
        <Route path="/details" component={Breakdown} />
    </Switch>
);

export default browserRouter;