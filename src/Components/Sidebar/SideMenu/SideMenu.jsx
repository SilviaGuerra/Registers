import React from 'react';
import SideItem from './SideItem';


import styles from './styles';

const SideMenu = (props) => {
    const open = props.openMenu ? 'translateX(0)' : 'translateX(-100%)';
    // isOpen = { props.openMenu }
    return (
        <div {...styles(open)}>
            <SideItem 
                title="General"
                // open={props.openMenu}
                // onClick={() => props.onCustomClick()}
            />
            <SideItem
                title="Transactions"
                // open={props.openMenu}
                // onClick={() => props.onCustomClick()}
            />
            <SideItem
                title="Accounting"
                // open={props.openMenu}
                // onClick={() => props.onCustomClick()}
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