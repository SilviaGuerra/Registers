import React from 'react';
import { Switch, Route } from "react-router-dom";
import Payments from '../Payments';
import Details from '../Details';

import style from './style';

const Main = () => {
    return (
        <div {...style}>
            <Switch>
                <Route exact path="/" component={Payments} />
                <Route path="/Details" component={Details} />
            </Switch>
        </div>
    );
}

export default Main;