import React from 'react';
import moment from 'moment';
import { Tab, Tabs, Table,  } from 'react-bootstrap/';

import icons from '../../../../helpers/icons';
import style from './style';

const CardTable = (props) => {
    return (
        <div {...style}>
            <Tabs defaultActiveKey="attemps" id="uncontrolled-tab-example" size="sm" responsive="sm">
                <Tab eventKey="attemps" title="Intentos de pago">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Fecha</th>
                                <th>Estatus</th>
                                <th>Método de pago</th>
                                <th>Monto</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{moment.unix(props.created).utc().format('DD MMM YY HH:mm A')}</td>
                                <td>
                                    <span className="table__status">{props.status}</span>
                                </td>
                                <td>
                                    {props.nestedCharges.map(item =>
                                        <p>
                                            <span>
                                                {item.payment_method.brand === "visa" ? icons.visa() : null}
                                            </span>
                                            {item.payment_method.type}
                                        </p>
                                    )}
                                </td>
                                <td>${props.amount}</td>
                            </tr>
                        </tbody>
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
    );
}

export default CardTable;