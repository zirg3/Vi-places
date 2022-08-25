import React, {FC, ReactNode} from 'react';
import Footer from "./footer/Footer";

const Layout:FC<{children: ReactNode, isMaxWidth?: boolean}> = ({children, isMaxWidth = true}) => {
    return (
        <>
            <div style={{maxWidth: isMaxWidth ? '1440px' : "none", margin: '0 auto', paddingBottom: '100px'}}>
                <div style={{height: '100%'}}>{children}</div>
            </div>
            <Footer/>
        </>
    );
};

export default Layout;
