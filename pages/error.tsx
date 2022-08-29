import React from 'react';
import Layout from "../app/components/common/Layout";
import Link from "next/link";
import bgImg from '../assets/images/404.png'
import styles from '../assets/styles/Home.module.css'

const ErrorPage = () => {
    return (
        <Layout>
            <div style={{maxWidth: '80%', margin: '0px auto',zIndex: '5', position: "relative", height: '100vh'}}>
                <h2 style={{color: 'white', marginTop: '100px'}}>Путь не найден, <br/>
                    кажется мы заблудились...</h2>
                <Link href='/'>
                    <a style={{
                        backgroundColor: 'rgb(235, 96, 30)',
                        color: 'white',
                        borderRadius: '30px',
                        textAlign:'center',
                        padding: '7px 24px',
                        display: "block",
                        width: 'fit-content',
                        fontSize: '18px',
                        marginTop: '50px'
                    }}
                    >Вернуться на главную</a>
                </Link>
                <div className={styles.title404} style={{color: 'rgb(235, 96, 30)', }}>404</div>
                <div style={{
                    position: "absolute",
                    backgroundImage: `url('${bgImg.src}')`,
                    width: '100%',
                    height: '100%',
                    zIndex: '-1',
                    backgroundRepeat: "no-repeat",
                    bottom: '-31px',
                    right: '0',
                    backgroundPosition: 'center',
                }}></div>
            </div>
        </Layout>
    );
};

export default ErrorPage;
