import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab } from 'react-bootstrap'
import Data from './Data';
import Breakdown from './Breakdown';

import styles from './styles';

const propTypes = {
    key: PropTypes.string,
    setKey: PropTypes.function
};

const Details = () => {
    const [key, setKey] = useState('data');
    return (
        <div {...styles}>
            <h2>Detalles</h2>
            <Tabs id="controlled-tab-example" activeKey={key} onSelect={k => setKey(k)}>
                <Tab eventKey="data" title="Data">
                    <Data />
                </Tab>
                <Tab eventKey="breakdown" title="Breakdown">
                    <Breakdown />
                </Tab>
            </Tabs>
        </div>
    );
}

Details.propTypes = propTypes;
export default Details;