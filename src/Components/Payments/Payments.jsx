import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
//import moment from 'moment';
import { Paper, Table, TableHead, TableRow, TableBody, TableCell } from '@material-ui/core';

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
        <div>
            <h2>Payments</h2>
            <Paper>
                <Table size="small">
                    <TableHead>
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
                        <Link to="/Details">
                            {data.results.map((item, key) => (
                                <TableRow key={key}>
                                    <TableCell></TableCell>
                                    <TableCell>{item.created}</TableCell>
                                    <TableCell>{item.status}</TableCell>
                                    <TableCell>{item.type}</TableCell>
                                    <TableCell>{item.customer.name}</TableCell>
                                    <TableCell>{item.amount}</TableCell>
                                </TableRow>
                            ))}
                        </Link>
                    </TableBody>
                </Table>
            </Paper>
        </div>
    );
}

export default Payments;