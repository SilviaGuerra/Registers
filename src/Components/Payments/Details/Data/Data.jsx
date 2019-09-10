import React from 'react';
// import { Card } from 'react-bootstrap'; 
import styles from './styles';

const Data = () => {
    return (
        <section {...styles}>
            {/* <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                </Card.Body>
            </Card> */}
            {/* El siguiente div es un componente */}
            <div className="data__card">
                <h3>Payment status</h3>
                <div className="data__card__amount">
                    <div>
                        <h6>Amount</h6>
                        <span>$100</span>
                    </div>
                    <div>
                        <p>
                            Created at:
                            <span>14-08-2019. 11:35 am</span>
                        </p>
                        <p>
                            Paid at: <span>Not yet paid</span>
                        </p>
                    </div>
                </div>
                <div className="data__card__status">
                    <span>declined</span>
                    <span>the card does not have the funds to perform the payment</span>
                </div>
            </div>
        </section>
    );
}

export default Data;