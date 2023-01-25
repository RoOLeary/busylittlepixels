import type { AppProps, NextWebVitalsMetric } from 'next/app';
import { AnimatePresence } from 'framer-motion';
import Loader from '../components/Loader';
import { Header } from '../components/Header';
import { useState, useEffect } from 'react';
import NProgress from 'nprogress';
import Router from 'next/router'
import Link from "next/link";
import { DefaultSeo } from 'next-seo';

import '../styles/globals.css'


declare const window: any
// @ts-ignore
const NextLinkShim = ({ href, children, ...props }:any) => {
  return (
    <Link href={href}>
      <a {...props}>{children}</a>
    </Link>
  );
};


// @ts-ignore
export default function App({ Component, pageProps }) {

  const handleRouteChange = () => {
    document.body.scrollIntoView();
  }

  const [isLoading, setIsLoading] = useState(false);

  const router = Router;
  useEffect(() => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (
        localStorage.theme === 'dark' ||
        (!('theme' in localStorage) &&
            window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }
  })

  useEffect(() => {
    Router.events.on("routeChangeStart", (url)=>{
      setIsLoading(true);
      NProgress.start();
      // console.log('route changing.')
    });

    Router.events.on("routeChangeComplete", (url)=>{
      // console.log('route changed')
      setIsLoading(false);
      NProgress.done(false);
      router.events.on('routeChangeComplete', handleRouteChange)
     
    });

    Router.events.on("routeChangeError", (url) =>{
      // console.log('something is bollocksed.')
    });

  }, [router.events])

  return (
    <>  
    <DefaultSeo
        title="Busy Little Pixels"
        description="Busy Little Pixels is a Digital Media and Technology company based in Amsterdam and specialising in the development of headless CMS and applications."
        openGraph={{
            type: 'website',
            locale: 'en_IE',
            url: 'https://busylittlepixels.com/',
            siteName: 'Busy Little Pixels',
        }}
        twitter={{
            handle: '@handle',
            site: '@site',
            cardType: 'summary_large_image',
        }}
    />
        <Header />
        <AnimatePresence
          mode='wait'
          initial={false}
          // @ts-ignore
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 300, opacity: 0 }}
          transition={{
            type: "smooth",
            stiffness: 260,
            damping: 20,
          }}
        > 
        <>
        {isLoading && <Loader /> } 
        <Component {...pageProps} />
        </>
        </AnimatePresence>
    </>
  );
}