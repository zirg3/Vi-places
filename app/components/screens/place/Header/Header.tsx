import {FC} from "react";
import styles from '../Header/Header.module.scss'
import FavoritesPlace from "./FavoritesPlace";
import Link from "next/link";
import BackButton from "./BackButton";



const Header:FC = () => {


    return (
        <div className={styles.wrapper}>
            <BackButton/>
            <FavoritesPlace/>
        </div>
    );
};

export default Header;
