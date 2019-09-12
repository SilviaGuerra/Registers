import React from 'react';
import InfoClient from './InfoClient';
import icons from '../../../../helpers/icons';
import style from './style';

const CardClient = (props) => {
    return (
        <div {...style}>
            <h5>{props.title}</h5>
            <InfoClient
                icon={icons.user()}
                info="Nombre"
                customer={props.customerName}
            />
            <InfoClient
                icon={icons.email()}
                info="Correo electrónico"
                customer={props.customerEmail}
            />
            <InfoClient
                icon={icons.phone()}
                info="Teléfono"
                customer={props.customerPhone}
            />
        </div>
    );
}

export default CardClient;