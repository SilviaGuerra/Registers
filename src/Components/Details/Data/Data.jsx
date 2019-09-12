import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Tab, Tabs } from 'react-bootstrap/';
import { Table, TableHead, TableRow, TableBody, TableCell } from '@material-ui/core';
import CardStatus from './CardStatus';
import CardClient from './CardClient';
import CardMethod from './CardMethod';

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
                title="Estatus de pago"
                amount={data.amount}
                created={data.created}
                paidAt={data.paid_at}
                status={data.status}
                nestedCharges={data.nested_charges}
                id={data.id}
            />
            <CardClient 
                title="Cliente"
                customerName={data.customer.name}
                customerEmail={data.customer.email}
                customerPhone={data.customer.phone}
            />
            <CardMethod 
                title="Método de pago"
                nestedCharges={data.nested_charges}
                type={data.type}
            />
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