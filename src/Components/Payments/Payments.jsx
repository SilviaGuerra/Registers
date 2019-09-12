import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import icons from '../../helpers/icons';
import axios from 'axios';
import moment from 'moment';
import { Tab, Tabs, Table } from 'react-bootstrap/';

import style from './style';

const Payments = () => {
    const [data, setData] = useState({ results: [] });

    //eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        const result = await axios(
            'https://gist.githubusercontent.com/SilviaGuerra/3d1c98f802a1a7909ee69a56425fde75/raw'
        );
        setData({ results: result.data.data.payments });
    }, []);

    return (
        <div {...style}>
            <h2>Payments</h2>
            <Link to="/Details">
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Fecha</th>
                            <th>Estatus de pago</th>
                            <th>Tipo de pago</th>
                            <th>Cliente</th>
                            <th>Monto</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.results.map((item, key) => (
                            <tr key={key}>
                                <td>{icons.view()}</td>
                                <td>{moment.unix(item.created).utc().format('DD MMM YY HH:mm A')}</td>
                                <td>{item.status}</td>
                                <td>{item.type}</td>
                                <td>{item.customer.name}</td>
                                <td>{item.amount}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Link>
        </div>
    );
}

export default Payments;