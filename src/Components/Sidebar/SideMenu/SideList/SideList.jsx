import React from 'react';
import { Link } from "react-router-dom";
import styles from './styles';

const SideList = () => {
    return (
        <div {...styles}>
            <ul className="sideItem__list">
                <li>
                    <Link to="/">Payments</Link>
                </li>
                <li>
                    <Link to="/">Transfers</Link>
                </li>
                <li>
                    <Link to="/">Chargebacks</Link>
                </li>
            </ul>
        </div>
    );
}

export default SideList;