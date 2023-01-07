import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from "react";
import { Bounded } from "./Bounded";
import imageLoader from './../imageLoader';
import NavItem from './NavItem';
import { isActiveLink } from '../lib/utils'
import { useRouter } from 'next/router'

const MENU_LIST = [
    { text: "Words", href: "/words" },
    { text: "Tech", href: "/words/tech" },
    { text: "Apps", href: "/apps" },
    { text: "Design", href: "/words/design" },
    { text: "Store", href: "/store" },
    { text: "Contact", href: "/contact" },
];

export const Header = () => {
    const router = useRouter(); 
    
    const [navActive, setNavActive] = useState(false);
    const [activeIdx, setActiveIdx] = useState(-1);
    
    return (
        <header className="px-6 text-black body-font fixed md:sticky w-full bg-black logoShadow">
            <div className="mx-auto flex flex-wrap py-5 md:flex-row items-start justify-between">
                <Link href="/" onClick={() => setActiveIdx(-1)}>
                    <h1 className="text-2xl font-extrabold leading-tight shake uppercase">busy<span className="rd_txt">little</span>pixels<span className="rd_txt">.</span></h1>
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
                        {MENU_LIST.map((menu, idx) => (

                            <div
                                onClick={() => {
                                    setActiveIdx(idx);
                                    setNavActive(false);
                                }}
                                key={menu.text}
                            >
                                <NavItem active={activeIdx === idx} {...menu} />
                            </div>
                        ))}
                    </div>
                </nav>
            </div>
        </header>
    );
};


