import React from 'react';
import Menu from './Menu';

const Layout = props => {
    return (
        <div>
            <Menu />

            {props.children}
        </div>
    );
};

export default Layout;