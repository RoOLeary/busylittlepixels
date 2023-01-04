import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from "react";
import { Bounded } from "./Bounded";
import imageLoader from './../imageLoader';
import NavItem from './NavItem';


const MENU_LIST = [
    { text: "Home", href: "/" },
    { text: "About", href: "/" },
    { text: "Tech", href: "/" },
    { text: "Latest", href: "/" },
    { text: "Video", href: "/" },
    { text: "Contact", href: "/contact" },
];

export const Header = () => {
    const [navActive, setNavActive] = useState(false);
    const [activeIdx, setActiveIdx] = useState(-1);

    return (
        <header className="sm:mb-8 px-6 text-black body-font sticky w-full bg-white logoShadow">
            <div className="container mx-auto flex flex-wrap py-5 md:flex-row items-start justify-between">
                <Link href="/">
                    <h1 className="text-2xl font-extrabold leading-tight">busy<span className="rd_txt">little</span>pixels<span className="rd_txt"></span></h1>
                    {/* <span>
                        <Image alt={'Logo'} width={50} height={50} src="../assets/img/logo.png" decoding="async" loader={imageLoader} className="shake" />
                        <noscript>
                            <img srcSet="https://roprismicnxt.cdn.prismic.io/roprismicnxt/8f14afab-6b70-4ac6-a3bc-b7bf0da48f1b_logo.svg?fit=max&amp;w=64 1x, https://roprismicnxt.cdn.prismic.io/roprismicnxt/8f14afab-6b70-4ac6-a3bc-b7bf0da48f1b_logo.svg?fit=max&amp;w=128 2x" src="https://roprismicnxt.cdn.prismic.io/roprismicnxt/8f14afab-6b70-4ac6-a3bc-b7bf0da48f1b_logo.svg?fit=max&amp;w=128" decoding="async" data-nimg="fixed" className="shake" loading="lazy"/>
                        </noscript>
                    </span> */}
                </Link>
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


