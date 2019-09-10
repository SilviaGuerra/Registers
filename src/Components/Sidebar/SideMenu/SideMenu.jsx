import React from 'react';
import SideItem from './SideItem';
import SideList from './SideList';

import styles from './styles';

const SideMenu = (props) => {
    return (
        <div {...styles}>
            <SideItem 
                title={props.title}
                open={props.openMenu}
                onClick={() => props.onCustomClick()}
            />
            {/* {console.log(props.open, props.onCustomClick)} */}
            {props.openMenu ? <SideList /> : null}
        </div>
    );
}

export default SideMenu;