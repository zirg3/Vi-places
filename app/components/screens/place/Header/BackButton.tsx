import {FC} from 'react';
import styles from "./Header.module.scss";
import Link from "next/link";
import {BsChevronLeft} from 'react-icons/bs'

const BackButton:FC = () => {
    return (
        <Link href='/'>
            <a>
                <span className={styles.buttonWrapper}>
                    <BsChevronLeft size={20} color='#e8e8e8'/>
                </span>
            </a>
        </Link>
    );
};

export default BackButton;
