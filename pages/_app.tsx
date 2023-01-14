import type { AppProps, NextWebVitalsMetric } from 'next/app';
import { AnimatePresence } from 'framer-motion';
import Loader from '../components/Loader';
import { Header } from '../components/Header';
import { PrismicLink, PrismicProvider } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";
import { useState, useEffect } from 'react';
import NProgress from 'nprogress';
import Router from 'next/router'
import Link from "next/link";

import '../styles/globals.css'

import { repositoryName, linkResolver } from "../prismicio";

declare const window: any
// @ts-ignore
const NextLinkShim = ({ href, children, ...props }:any) => {
  return (
    <Link href={href}>
      <a {...props}>{children}</a>
    </Link>
  );
};

const richTextComponents = {
// @ts-ignore
  paragraph: ({ children }) => <p className="mb-7 last:mb-0">{children}</p>,
// @ts-ignore
  oList: ({ children }) => (
    <ol className="mb-7 pl-4 last:mb-0 md:pl-6">{children}</ol>
  ),
// @ts-ignore
  oListItem: ({ children }) => (
    <li className="mb-1 list-decimal pl-1 last:mb-0 md:pl-2">{children}</li>
  ),
// @ts-ignore
  list: ({ children }) => (
    <ul className="mb-7 pl-4 last:mb-0 md:pl-6">{children}</ul>
  ),
// @ts-ignore
  listItem: ({ children }) => (
    <li className="mb-1 list-disc pl-1 last:mb-0 md:pl-2">{children}</li>
  ),
// @ts-ignore
  preformatted: ({ children }) => (
    <pre className="mb-7 rounded bg-slate-100 p-4 text-sm last:mb-0 md:p-8 md:text-lg">
      <code>{children}</code>
    </pre>
  ),
  // @ts-ignore
  strong: ({ children }) => (
    <strong className="font-semibold">{children}</strong>
  ),
  // @ts-ignore
  hyperlink: ({ children, node }) => (
    <PrismicLink
      field={node.data}
      className="underline decoration-1 underline-offset-2"
    >
      {children}
    </PrismicLink>
  ),
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
      console.log('route changing.')
    });

    Router.events.on("routeChangeComplete", (url)=>{
      console.log('route changed')
      setIsLoading(false);
      NProgress.done(false);
      router.events.on('routeChangeComplete', handleRouteChange)
     
    });

    Router.events.on("routeChangeError", (url) =>{
      console.log('something is bollocksed.')
    });

  }, [router.events])

  return (
    <PrismicProvider
      linkResolver={linkResolver}
      internalLinkComponent={NextLinkShim}
      richTextComponents={richTextComponents}
    >
      <PrismicPreview repositoryName={repositoryName}>
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
      </PrismicPreview>
    </PrismicProvider>
  );
}