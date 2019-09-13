import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import CardStatus from './CardStatus';
import CardClient from './CardClient';
import CardMethod from './CardMethod';
import CardTable from './CardTable';

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
            <CardTable 
                created={data.created}
                status={data.status}
                nestedCharges={data.nested_charges}
                amount={data.amount}
            />
        </section>
    );
}

Data.prototypes = proptypes;
export default Data;