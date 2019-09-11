import React from 'react';
import { Link } from "react-router-dom";
import styles from './styles';
import Payments from '../../../Payments/Payments';

const SideList = () => {
    return (
        <div {...styles}>
            <ul className="sideItem__list">
                <li>
                    <Link to="/Payments">Payments</Link>
                </li>
                <li>
                    <p>Transfers</p>
                </li>
                <li>
                    <p>Chargebacks</p>
                </li>
            </ul>
        </div>
    );
}

export default SideList;