import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from "react";
import { Bounded } from "./Bounded";
import imageLoader from './../imageLoader';
import NavItem from './NavItem';
import { isActiveLink } from '../lib/utils'
import { useRouter } from 'next/router';
import {isMobile} from 'react-device-detect';

const links = [
    { text: "Latest", href: "/articles" },
    { text: "Tech", href: "/tech" },
    { text: "Reviews", href: "/reviews" },
    { text: "Podcasts", href: "/podcasts" },
    { text: "Merch", href: "/store" },
    { text: "Contact", href: "/contact" },
    { text: "Login", href: "/login" },
];

export const Header = () => {
    const router = useRouter(); 
    const currentRoute = router.asPath; 
    const [panelActive, setPanelActive] = useState(false);
    const [navActive, setNavActive] = useState(false);

    console.log(isMobile); 

    const closeOnClick = () => {
        if(isMobile){
            console.log(isMobile, navActive);
            setTimeout(() => {
            setNavActive(!navActive);
            }, 500)
        }
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
                        className={`nav__menu-bar md:hidden menu__icon cursor-pointer ease-linear ${navActive ? "active" : ""}`}
                    >
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className={`nav__menu-list ${navActive ? "active" : ""}`}>
                        {links.map((link) => (
                            <Link key={link.text} href={link.href} className={`nav__link text-white font-black uppercase ${currentRoute === link.href ? "active" : ""}`} onClick={closeOnClick}>{link.text}</Link>
                        ))}
                    </div>
                </nav>
            </div>
        </header>
    );
};


