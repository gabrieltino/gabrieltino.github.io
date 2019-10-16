import React from 'react';

import Header from './header'
import Footer from './footer'

import '../styles/main.scss'

const Layout = (props) => {
    return (
      
        <div className="wrapper">
            <Header />
            {props.children}
            <Footer/>
        </div>
    );
}


export default Layout;