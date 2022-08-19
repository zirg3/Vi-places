import styles from './Footer.module.scss'
import {useRouter} from "next/router";
import React from "react";
import Link from "next/link";

type TypeNavItem = {
    icon: string
    link: string
}

const navItems: TypeNavItem[] = [
    {
        icon: 'home',
        link: '/'
    },
    {
        icon: 'explore',
        link: '/explore'
    },
    {
        icon: 'place',
        link: '/place/kyoto'
    },
    {
        icon: 'person_outline',
        link: '/profile'
    }
]

const Footer = () => {
    const router = useRouter()

    return (
        <footer className={styles.footer}>
            <nav>
                {navItems.map(item => (
                    <Link href={item.link} key={item.icon}>
                        <a className={`material-icons-outlined ${router.pathname === item.link ? styles.active : ''}`}>
                            {item.icon}
                        </a>
                    </Link>
                ))}
            </nav>
        </footer>
    );
};

export default Footer;
