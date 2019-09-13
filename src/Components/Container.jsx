import React from 'react';
import Sidebar from './Sidebar';
import Main from './Main';
import Header from './Header';

 
import styles from './styles';

const Container = () => {
    const [hamburgerMenu, toggleHamburger] = useState(false);
    const setOpen = () => { toggleHamburger(!hamburgerMenu) };

    return (
        <div {...styles}>
            <Sidebar />
            <Header />
            <Main />
        </div>
    );
}

export default Container;