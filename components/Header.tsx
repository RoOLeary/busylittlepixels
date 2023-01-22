import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useCallback, useEffect } from "react";
import { Bounded } from "./Bounded";
import imageLoader from './../imageLoader';
import NavItem from './NavItem';
import { isActiveLink } from '../lib/utils'
import { useRouter } from 'next/router';
import { useMediaQuery } from '../hooks/useMediaQuery';

const links = [
    { text: "Studio", href: "/studio" },
    { text: "Articles", href: "/articles" },
    { text: "Work", href: "/work" },
    // { text: "Store", href: "/store" },
    { text: "Contact", href: "/contact" },
    { text: "Login", href: "/login" },
];


export const Header = () => {
    const isMobile = useMediaQuery(768)
    const router = useRouter(); 
    const currentRoute = router.asPath; 
    // console.log(currentRoute);
    const [navActive, setNavActive] = useState(false);

    const closeMobileNavOnClick = () => {
        if(isMobile){
            setTimeout(() => {
            setNavActive(!navActive);
            }, 500)
        }
        return;
    }

   
    
    return (
        <header className="px-6 text-black body-font fixed md:sticky w-full bg-black logoShadow">
            <div className="mx-auto flex flex-wrap py-5 md:flex-row items-start justify-between">
                <Link href="/">
                    <h1 className="text-2xl font-extrabold leading-tight shake">busy<span className="rd_txt">little</span>pixels<span className="rd_txt">.</span></h1>
                </Link>
                <nav className={`nav`}>
                    <div
                        onClick={() => setNavActive(!navActive)}
                        className={`nav__menu-bar md:hidden menu__icon cursor-pointer duration-150 ease-linear ${navActive ? "active" : ""}`}
                    >
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <ul className={`nav__menu-list px-6 ${navActive ? "active" : ""}`}>
                        {isMobile ? 
                        <div className={'flex'}>
                            <input className={'mobileSearch'} type={'text'} name={'search'} placeholder={'Search...'} />
                            <button className="btn inline-block px-6 py-2.5 bg-red-500 text-white font-medium text-xs leading-tight uppercase rounded-r rounded-l-none shadow-md hover:bg-red-400 hover:shadow-lg focus:bg-red-500  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-500 active:shadow-lg transition duration-150 ease-in-out flex items-center" type="button" id="button-addon2">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                                </svg>
                            </button>
                        </div> : ''}
                        {links.map((link) => (
                            <li key={link.text}><Link href={link.href} className={`nav__link text-white font-black ${currentRoute.includes(link.href) ? "active" : ""}`} onClick={closeMobileNavOnClick}>{link.text}</Link></li>
                        ))}
                        {isMobile ? 
                            <>
                                <hr className={`border-b border-white border-opacity-25`} />
                                <span className="inline-flex">
                                    <>
                                    <a className="text-white">
                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg>
                                    </a>
                                    <a className="ml-4 text-white">
                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path></svg>
                                    </a>
                                    <a className="ml-4 text-white">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 20 20"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
                                    </a>
                                    </>
                                </span>
                            </>
                        : ''}
                    </ul>
                </nav>
            </div>
        </header>
    );
};


