import React, { useState } from 'react';
import SideList from '../SideList';
import GeneralIcon from '../../../../helpers/icons/General';
import ArrowDown from '../../../../helpers/icons/ArrowDown';
import ArrowUp from '../../../../helpers/icons/ArrowUp';

import styles from './styles';

const SideItem = (props) => {
    // const [arrow, toggleArrow] = useState(props.open);
    // const setOpen = () => { toggleArrow(!arrow) };
    // onClick = { setOpen }

    return (
        <div {...styles}>
            <div className="sideItem__title">
                <GeneralIcon />
                <h6>{props.title}</h6>
            </div>
            {/* {arrow ? <ArrowDown /> : <ArrowUp />}
            {arrow ? <SideList openMenu={props.open}/> : null} */}
        </div>
    );
}

export default SideItem;