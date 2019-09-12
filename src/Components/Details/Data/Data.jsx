import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Tab, Tabs } from 'react-bootstrap/';
import { Table, TableHead, TableRow, TableBody, TableCell } from '@material-ui/core';
import CardStatus from './CardStatus';
import CardClient from './CardClient';

import styles from './styles';

const proptypes = {
    data: PropTypes.object
}

const Data = () => {
    const [data, setData] = useState({nested_charges: [], customer: [], });
    
    //eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        const result = await axios(
            'https://gist.githubusercontent.com/SilviaGuerra/8d888f11c54e7ec9d1e1e7b272aa7594/raw/46fe2315752d961a400e7933d423e7446a37c3ee/details.json'
        );
        const resultData = result.data.data.payment

        setData({
            ...resultData,
            customer: resultData.customer,
            nested_charges: resultData.nested_charges
        });
    }, []);

    return (
        <section {...styles}>
            <CardStatus 
                title="Payment status"
                amount={data.amount}
                created={data.created}
                paidAt={data.paid_at}
                status={data.status}
                nestedCharges={data.nested_charges}
                id={data.id}
            />
            <CardClient 
                title="Client"
                customerName={data.customer.name}
                customerEmail={data.customer.email}
                customerPhone={data.customer.phone}
            />
            <div className="data__card">
                <h3>Payment method</h3>
                <div className="data__card__amount">
                    {data.nested_charges.map(item => (
                        <span>{item.payment_method.bank}</span>
                    ))}
                    {data.nested_charges.map(item => (
                        <span>{item.payment_method.brand}</span>
                    ))}
                </div>
                <div className="data__card__amount">
                    {data.nested_charges.map(item => 
                        <span>{item.payment_method.last4}</span>
                    )}
                    {data.nested_charges.map(item => (
                        <span>{item.payment_method.name}</span>
                    ))}
                    <p>
                        Fecha de expiración:
                        {data.nested_charges.map(item => (
                            <span>{item.payment_method.exp_month} /</span>
                        ))}
                        {data.nested_charges.map(item => (
                            <span>{item.payment_method.exp_year}</span>
                        ))}
                    </p>
                    <p>
                        Código de autorización:
                        {data.nested_charges.map(item => (
                            <span>{item.payment_method.auth_code}</span>
                        ))}
                    </p>
                </div> 
            </div>
            <div className="data__card">
                <Tabs defaultActiveKey="attemps" id="uncontrolled-tab-example">
                    <Tab eventKey="attemps" title="Intentos de pago">
                        <Table size="small">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Date</TableCell>
                                    <TableCell>Status</TableCell>
                                    <TableCell>Payment method</TableCell>
                                    <TableCell>Amount</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>{data.created}</TableCell>
                                    <TableCell>{data.status}</TableCell>
                                    {data.nested_charges.map(item => 
                                        <TableCell>
                                            {item.payment_method.type}
                                        </TableCell>
                                    )}
                                    <TableCell></TableCell>
                                    <TableCell>{data.amount}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </Tab>
                    <Tab eventKey="refunds" title="Reembolsos" disabled>
                        profile
                    </Tab>
                    <Tab eventKey="notifications" title="Notificaciones" disabled>
                        inactivo
                        </Tab>
                </Tabs>
            </div> 
        </section>
    );
}

Data.prototypes = proptypes;
export default Data;