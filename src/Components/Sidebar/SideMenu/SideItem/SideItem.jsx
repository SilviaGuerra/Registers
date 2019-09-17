import React, { useState } from 'react';
import SideList from '../SideList';
// import icons from '../../../../helpers/icons';
import GeneralIcon from '../../../../helpers/icons/General';
import ArrowDown from '../../../../helpers/icons/ArrowDown';
import ArrowUp from '../../../../helpers/icons/ArrowUp';
 
import styles from './styles';

const SideItem = (props) => {
    const [arrow, toggleArrow] = useState(false);
    const setOpen = () => { toggleArrow(!arrow) };
    const display = arrow ? 'flex' : 'none';
  
    return (
        <div {...styles(display)} onClick={setOpen}>
            <div className="sideItem__title" >
                <GeneralIcon />
                <h6>{props.title}</h6>
                {arrow ? <ArrowDown /> : <ArrowUp />}
            </div>
            <SideList />
        </div>
    );
}

export default SideItem;