import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import icons from '../../helpers/icons';
import axios from 'axios';
import moment from 'moment';
import { Table, TableHead, TableRow, TableBody, TableCell } from '@material-ui/core';

import { style, stylesMaterial } from './style';

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
                <Table size="small" padding="none">
                    <TableHead classes={stylesMaterial.tableBody}>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell>Date</TableCell>
                            <TableCell>Payment status</TableCell>
                            <TableCell>Payment type</TableCell>
                            <TableCell>Customer</TableCell>
                            <TableCell>Amount</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.results.map((item, key) => (
                            <TableRow key={key}>
                                <TableCell>{icons.view()}</TableCell>
                                <TableCell>{moment.unix(item.created).utc().format('DD MMM YY HH:mm A')}</TableCell>
                                <TableCell>{item.status}</TableCell>
                                <TableCell>{item.type}</TableCell>
                                <TableCell>{item.customer.name}</TableCell>
                                <TableCell>{item.amount}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Link>
        </div>
    );
}

export default Payments;