import styles from './Footer.module.scss'
import {useRouter} from "next/router";
import React from "react";
import Link from "next/link";
import {signOut, useSession} from "next-auth/react";
import {toast} from "react-toastify";

type TypeNavItem = {
    icon: string
    link: string
    auth?: boolean
}

const navItems: TypeNavItem[] = [
    {
        icon: 'home',
        link: '/'
    },
    {
        icon: 'favorite_outline',
        link: '/favorites'
    },
    {
        icon: 'manage_accounts',
        link: '/profile'
    },
    // {
    //     icon: 'person_outline',
    //     link: '/auth',
    //     auth: true
    // }
]

const Footer = () => {
    const router = useRouter()
    const {data} = useSession()

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
                <a onClick={async () => {
                    if (data) {
                        await signOut({redirect: false})
                        toast.success("Вы вышли из аккаунта")
                        router.push('/auth')
                    } else {
                        router.push('/auth')
                    }
                }} className={`material-icons-outlined ${router.pathname === '/auth' ? styles.active : ''}`}>
                    {data ? 'logout' : 'account_circle'}
                </a>
            </nav>
        </footer>
    );
};

export default Footer;
