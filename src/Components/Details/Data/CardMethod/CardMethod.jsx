import React from 'react';
import icons from '../../../../helpers/icons';
import styles from './styles';

const CardMethod = (props) => {
    
    return (
        <div {...styles}>
            <h5>{props.title}</h5>
            <div className="card__divisor"/>
            <div className="card__bank">
                {props.nestedCharges.map(item => (
                    <span>{item.payment_method.bank}</span>
                ))}
                <p>
                    {props.nestedCharges.map(item => (
                        <span>{item.payment_method.brand === "visa" ? icons.visa() : null}</span>
                    ))}
                    <span>{props.type}</span>
                </p>
            </div>
            <div className="card__creditCard">
                    <div>
                        {props.nestedCharges.map(item =>
                            <span>**** **** **** {item.payment_method.last4}</span>
                        )}
                        {props.nestedCharges.map(item => (
                            <span>{item.payment_method.name}</span>
                        ))}
                    </div>
                    <div>
                        <p>
                            Fecha de expiración:
                                {props.nestedCharges.map(item => (
                                <span>{item.payment_method.exp_month} /</span>
                            ))}
                            {props.nestedCharges.map(item => (
                                <span>{item.payment_method.exp_year}</span>
                            ))}
                        </p>
                        <p>
                            Código de autorización:
                                {props.nestedCharges.map(item => (
                                <span>{item.payment_method.auth_code}</span>
                            ))}
                        </p>
                    </div>
            </div> 
        </div>
    );
}

export default CardMethod;