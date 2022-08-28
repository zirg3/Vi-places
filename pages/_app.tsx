import '../assets/styles/globals.scss'
import type { AppProps } from 'next/app'
import NextNProgress from "nextjs-progressbar";
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import {SessionProvider} from "next-auth/react";
import AuthProvider from "../app/providers/AuthProvider/AuthProvider";
import {NextPage} from "next";
import {NextPageAuth} from "../app/types/auth";


// @ts-ignore
function MyApp({ Component, pageProps: {session, ...pageProps}}) {

    return (
      <>
        <NextNProgress
            color="rgb(235, 96, 30)"
            startPosition={0.3}
            stopDelayMs={200}
            height={3}
            showOnShallow={true}
        />
        <SessionProvider session={session}>
            <AuthProvider Component={Component}>
                <Component {...pageProps} />
                <ToastContainer theme='light'/>
            </AuthProvider>
        </SessionProvider>
      </>
  )
}

export default MyApp
