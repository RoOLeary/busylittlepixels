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
    { text: "Latest", href: "/articles" },
    { text: "Tech", href: "/tech" },
    { text: "Reviews", href: "/reviews" },
    { text: "Studio", href: "/studio" },
    { text: "Merch", href: "/store" },
    { text: "Contact", href: "/contact" },
    { text: "Login", href: "/login" },
];


export const Header = () => {
    const isMobile = useMediaQuery(768)
    const router = useRouter(); 
    const currentRoute = router.asPath; 
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
                        {isMobile ? <div><input className={'mobileSearch'} type={'text'} name={'search'} placeholder={'Search...'} /></div> : ''}
                        {links.map((link) => (
                            <li key={link.text}><Link href={link.href} className={`nav__link text-white font-black uppercase ${currentRoute === link.href ? "active" : ""}`} onClick={closeMobileNavOnClick}>{link.text}</Link></li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};


