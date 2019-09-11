import React, { useState } from 'react';

import GeneralIcon from '../../../../helpers/icons/General';
import ArrowDown from '../../../../helpers/icons/ArrowDown';
import ArrowUp from '../../../../helpers/icons/ArrowUp';

import styles from './styles';

const SideItem = (props) => {
    const [arrow, toggleArrow] = useState(false);
    const setOpen = () => { toggleArrow(!arrow) };
    
    return (
        <div {...styles} onClick={setOpen}>
            <div className="sideItem__title">
                <GeneralIcon />
                <h6>{props.title}</h6>
            </div>
            {arrow ? <ArrowDown /> : <ArrowUp />}
        </div>
    );
}

export default SideItem;