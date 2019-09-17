import React from 'react';
import SideItem from './SideItem';


import styles from './styles';

const SideMenu = (props) => {
    const open = props.openMenu ? 'inline' : 'none';
    const title = ["General", "Transactions", "Accounting", "Developers"];

    return (
        <div {...styles(open)}>
            {title.map(item => (
                <SideItem 
                    titleItem={item}
                />
            ))}
        </div>
    );
}

export default SideMenu;