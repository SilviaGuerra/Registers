import React from 'react';

import styles from './styles';

const SideList = () => {
    return (
        <div {...styles}>
            <ul className="sideItem__list">
                <li>
                    <a href="#">Payments</a>
                </li>
                <li>
                    <a href="#">Transfers</a>
                </li>
                <li>
                    <a href="#">Chargebacks</a>
                </li>
            </ul>
        </div>
    );
}

export default SideList;