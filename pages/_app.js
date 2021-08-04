// import App from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css'
import NextNprogress from 'nextjs-progressbar';

import Router from "next/router";
import withYM from "next-ym";
// import FacebookPixel from '../components/FacebookPixel/FacebookPixel'

// import styles
import '../styles/main.scss'
import '../styles/global_colors.scss'

const yandexUser = process.env.NEXT_PUBLIC_YANDEX_USER;

export default withYM(yandexUser, Router)(MyApp);

function MyApp({ Component, pageProps }) {
    
    return (
        <>
            <NextNprogress/>
            {/* <FacebookPixel> */}
                <Component {...pageProps} />
            {/* </FacebookPixel> */}
        </>
    )
}
  