import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Table, } from 'react-bootstrap/';

import styles from './styles';

const Breakdown = () => {
    const [data, setData] = useState({ line_items: [], nested_charges: [] });

    //eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        const result = await axios(
            'https://gist.githubusercontent.com/SilviaGuerra/8d888f11c54e7ec9d1e1e7b272aa7594/raw/46fe2315752d961a400e7933d423e7446a37c3ee/details.json'
        );
        const resultData = result.data.data.payment

        setData({
            ...resultData,
            line_items: resultData.line_items,
            nested_charges: resultData.nested_charges
        });
    }, []);

    return(
        <div {...styles}>
            <Table striped borderless hover responsive striped={false}>
                <thead>
                    <tr>
                        <th>SKU</th>
                        <th>Cantidad</th>
                        <th>Artículo</th>
                        <th>Impuestos</th>
                        <th>Envíos</th>
                        <th>Descuentos</th>
                        <th>Precio unitario</th>
                    </tr>
                </thead>
                <tbody>
                    {data.line_items.map(item =>
                        <tr className="table__article">
                            <td></td>
                            <td>{item.quantity}</td>
                            <td>{item.name}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>$ {item.unit_price}</td>
                        </tr>
                    )}
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>Subtotal</td>
                        {data.nested_charges.map(item => (
                            <td>$ {item.amount}</td>
                        ))}
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>IVA</td>
                        {data.nested_charges.map(item => (
                            <td>$ {item.fee}</td>
                        ))}
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>Total</td>
                        {data.nested_charges.map(item => (
                            <td>$ {item.amount - item.fee}</td>
                        ))}
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default Breakdown;