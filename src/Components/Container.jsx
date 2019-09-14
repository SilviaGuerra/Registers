import React from 'react';
import Sidebar from './Sidebar';
import Main from './Main';
import Header from './Header';

 
import styles from './styles';

const Container = () => {
    return (
        <div {...styles}>
            <Sidebar />
            <Header />
            <Main />
        </div>
    )
    
}

export default Container;