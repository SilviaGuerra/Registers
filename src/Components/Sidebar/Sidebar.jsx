import React, { useState } from 'react';
import HamburgerMenu from 'react-hamburger-menu';
import SideMenu from './SideMenu';
import style from './style';

const Sidebar = () => {
    const [hamburguerMenu, toggleHamburguer] = useState(false);
    const setOpen = () => { toggleHamburguer(!hamburguerMenu) };
    const [menu, dropDownMenu] = useState(false);
    const dropOpen = () => { dropDownMenu(!menu) };

    return (
        <div {...style}>
            <HamburgerMenu
                isOpen={hamburguerMenu}
                menuClicked={setOpen}
                width={18}
                height={15}
                strokeWidth={1}
                rotate={0}
                color='black'
                borderRadius={0}
                animationDuration={0.5}
            />
            <SideMenu
                title={"General"}
                openMenu={menu}
                onCustomClick={dropOpen}
            />
            <SideMenu
                title={"Transactions"}
                openMenu={menu}
                onCustomClick={dropOpen}
            />
            <SideMenu
                title={"Accounting"}
                openMenu={menu}
                onCustomClick={dropOpen}
            />
            <SideMenu
                title={"Developers"}
                openMenu={menu}
                onCustomClick={dropOpen}
            />
        </div>
    );
}

export default Sidebar;