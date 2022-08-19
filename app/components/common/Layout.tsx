import React, {FC} from 'react';
import Footer from "./footer/Footer";

const Layout = ({children}: any) => {
    return (
        <div style={{maxWidth: '1440px', margin: '0 auto'}}>
            <div>{children}</div>

            <Footer/>
        </div>
    );
};

export default Layout;
