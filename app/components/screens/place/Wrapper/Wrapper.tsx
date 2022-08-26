import {FC, ReactNode} from 'react';
import styles from '../Wrapper/Wrapper.module.scss'
import {url} from "inspector";

const Wrapper:FC<{ imagePath: string, children: ReactNode }> = ({imagePath,children}) => {
    return (
        <div
            className={styles.wrapper}
            // style={{backgroundImage: `url(${imagePath})`}}
        >
            <div className={styles.bg} style={{backgroundImage: `url(${imagePath})`}}></div>
            {children}
        </div>
    );
};

export default Wrapper;
