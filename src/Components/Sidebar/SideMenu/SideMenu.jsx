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
                // open={props.openMenu}
                // onClick={() => props.onCustomClick()}
            />
        </div>
    );
}

export default SideMenu;