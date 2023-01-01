import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from "react";
import { Bounded } from "./Bounded";
import imageLoader from './../imageLoader';
import NavItem from './NavItem';


const MENU_LIST = [
    { text: "Home", href: "/" },
    { text: "Posts", href: "/posts" },
    { text: "Contact", href: "/contact" },
];

export const Header = () => {
    const [navActive, setNavActive] = useState(null);
    const [activeIdx, setActiveIdx] = useState(-1);

    return (
        <header className="sm:mb-8 px-6 text-black body-font schticky">
            <div className="container mx-auto flex flex-wrap py-5 md:flex-row items-center justify-between">
                <a href="/">
                    <span>
                        <Image alt={'Logo'} width={50} height={50} src="../assets/img/logo.png" decoding="async" loader={imageLoader} className="shake" />
                        <noscript>
                            <img srcSet="https://roprismicnxt.cdn.prismic.io/roprismicnxt/8f14afab-6b70-4ac6-a3bc-b7bf0da48f1b_logo.svg?fit=max&amp;w=64 1x, https://roprismicnxt.cdn.prismic.io/roprismicnxt/8f14afab-6b70-4ac6-a3bc-b7bf0da48f1b_logo.svg?fit=max&amp;w=128 2x" src="https://roprismicnxt.cdn.prismic.io/roprismicnxt/8f14afab-6b70-4ac6-a3bc-b7bf0da48f1b_logo.svg?fit=max&amp;w=128" decoding="async" data-nimg="fixed" className="shake" loading="lazy"/>
                        </noscript>
                    </span>
                </a>
                <nav className={`nav`}>
                    <div
                        onClick={() => setNavActive(!navActive)}
                        className={`nav__menu-bar md:hidden menu__icon cursor-pointer ${navActive ? "active" : ""} shake`}
                    >
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className={`${navActive ? "active" : ""} nav__menu-list`}>
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


