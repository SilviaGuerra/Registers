import React, { useState } from 'react';
import HamburgerMenu from 'react-hamburger-menu';
import SideMenu from './SideMenu';
import style from './style';

const Sidebar = () => {
    const [hamburgerMenu, toggleHamburger] = useState(false);
    const setOpen = () => { toggleHamburger(!hamburgerMenu) };
    const widthSideBar = hamburgerMenu ? '20%' : '0%';
    // const [menu, dropDownMenu] = useState(false);
    // const dropOpen = () => { dropDownMenu(!menu) };
    return (
        <div {...style(widthSideBar)}>
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
            <SideMenu />
        </div>
    )
}

export default Sidebar;