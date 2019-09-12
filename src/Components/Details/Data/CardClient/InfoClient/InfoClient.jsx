import React from 'react';

import style from './style';

const InfoClient = (props) => {
    return (
        <div {...style}>
            {props.icon}
            <div>
                <p>{props.info}:</p>
                <p>{props.customer}</p>
            </div>
        </div>
    );
}

export default InfoClient;