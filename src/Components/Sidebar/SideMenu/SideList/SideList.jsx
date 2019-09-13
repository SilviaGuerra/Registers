import React from 'react';
import { Link } from "react-router-dom";
import styles from './styles';

const SideList = (props) => {
    const display = props.openMenu ? 'flex' : 'none';
    console.log(display)
    console.log(props.openMenu)
    return (
        <div {...styles(display)}>
            <ul className="sideItem__list">
                <li>
                    <Link to="/Payments">Payments</Link>
                </li>
                <li>
                    <Link to="/Payments">Transfers</Link>
                </li>
                <li>
                    <Link to="/Payments">Chargebacks</Link>
                </li>
            </ul>
        </div>
    );
}

export default SideList;