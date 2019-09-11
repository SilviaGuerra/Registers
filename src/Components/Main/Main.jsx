import React from 'react';
import { Switch, Route } from "react-router-dom";
import Payments from '../Payments';
import Details from '../Details';

const Main = () => {
    return (
        <Switch>
            <Route exact path="/" component={Payments} />
            <Route path="/Details" component={Details} />
        </Switch>
    );
}

export default Main;