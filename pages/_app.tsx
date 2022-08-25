import '../assets/styles/globals.scss'
import type { AppProps } from 'next/app'
import NextNProgress from "nextjs-progressbar";
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import {SessionProvider} from "next-auth/react";


function MyApp({ Component, pageProps: {session, ...pageProps}}: AppProps) {
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
            <Component {...pageProps} />
            <ToastContainer theme='light'/>
        </SessionProvider>
      </>
  )
}

export default MyApp
