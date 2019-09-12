import React from 'react';
// import Sidebar from './Sidebar';
import Main from './Main';

import styles from './styles';

const Container = () => {
    return (
        <div {...styles}>
            {/* <Sidebar /> */}
            <Main />
        </div>
    );
}

export default Container;