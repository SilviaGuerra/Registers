import React, { useState } from 'react';
import HamburgerMenu from 'react-hamburger-menu';
import SideMenu from './SideMenu';

import icons from '../../helpers/icons';
import style from './style';

const Sidebar = () => {
    const [hamburgerMenu, toggleHamburger] = useState(false);
    const setOpen = () => { toggleHamburger(!hamburgerMenu) };
    
    const widthSideBar = hamburgerMenu ? '40%' : '0%';
    const logo = hamburgerMenu ? 'inline' : 'none';

    return (
        <div {...style(widthSideBar, logo)}>
            <HamburgerMenu
                isOpen={hamburgerMenu}
                menuClicked={setOpen}
                width={18}
                height={15}
                strokeWidth={1}
                rotate={0}
                color='black'
                borderRadius={0}
                animationDuration={0.5}
            />
            {icons.logoComplete()}
            <SideMenu 
                openMenu={hamburgerMenu}
            />
        </div>
    )
}

export default Sidebar;