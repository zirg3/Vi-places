import {FC} from "react";
import styles from '../Header/Header.module.scss'
import Favorites from "./Favorites";
import Link from "next/link";
import BackButton from "./BackButton";



const Header:FC = () => {


    return (
        <div className={styles.wrapper}>
            <BackButton/>
            <Favorites/>
        </div>
    );
};

export default Header;
