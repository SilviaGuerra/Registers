import React from 'react';
import SideItem from './SideItem';


import styles from './styles';

const SideMenu = (props) => {
    const open = props.openMenu ? 'inline' : 'none';
    
    return (
        <div {...styles(open)}>
            <SideItem 
                title="General"
            />
            <SideItem
                title="Transactions"
            />
            <SideItem
                title="Accounting"
            />
            <SideItem
                title="Developers"
            />
        </div>
    );
}

export default SideMenu;