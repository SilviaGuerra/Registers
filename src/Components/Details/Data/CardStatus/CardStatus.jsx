import React from 'react';
import moment from 'moment';
import style from './style';

const CardStatus = (props) => {
    return (
        <div {...style}>
            <h5>{props.title}</h5>
            <div className="card__amount">
                <div>
                    <h6>Amount: </h6>
                    <span>$ {props.amount}</span>
                </div>
                <div>
                    <p>Created at: {moment.unix(props.created).utc().format('DD MMM YY HH:mm A')}</p>
                    <p>Paid at: {props.paidAt === null ? 'Sin pago aún' : props.paidAt}</p>
                </div>
            </div>
            <div className="card__status">
                <span> {props.status} </span>
                {props.nestedCharges.map(item => (
                    <span>{item.failure_message}</span>
                ))}
            </div>
            <div className="card__order">
                <div>
                    <h6>Order ID: </h6>
                    <span>{props.id}</span>
                </div>
                <div>
                    <a>View transfer</a>
                    <a>View chargeback</a>
                </div>
            </div>
        </div>
    );
}

export default CardStatus;