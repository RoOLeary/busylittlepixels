import { SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

import { createClient } from "../../prismicio";

import { PrismicRichText } from '@prismicio/react'
/* eslint-disable react/jsx-no-comment-textnodes */
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router';
import { Layout } from '../../components/Layout';
import { Bounded } from "../../components/Bounded";
import { GalleryGrid } from "../../components/GalleryGrid";
import CarouselContainer from "../../components/Carousel";
import { CTA } from "../../components/CallToAction";
import imageLoader from '../../imageLoader';
import { useTypingText } from '../../hooks/useTypingText';
import { motion } from 'framer-motion';

const inter = Inter({ subsets: ['latin'] })

const Studio = ({ studio, preview }:any) => {
    const router = useRouter(); 
    const { word } = useTypingText(['WEB, ', 'APPS, ', 'MEDIA, '], 250, 20);

    const scrollToSection = (id:any) => {
        window.scrollTo({
            // @ts-ignore
          top: document.getElementById(id).offsetTop - 60,
          behavior: 'smooth',
        });
      };
    
    const onScrollClick = (e:any) => {
        e.preventDefault();
        const goto = e.currentTarget.getAttribute('scrollto');
        setTimeout(() => {
            scrollToSection(goto);
        }, 100);
      }

    return(

        <Layout>
            
            

           
            <section className="px-6 py-24 md:py-32">
                <div className="isolate bg-white">
                    <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
                        <svg className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]" viewBox="0 0 1155 678" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)" fillOpacity=".3" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
                        <defs>
                            <linearGradient id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#9089FC"></stop>
                            <stop offset="1" stopColor="#FF80B5"></stop>
                            </linearGradient>
                        </defs>
                        </svg>
                    </div>
                </div>
                <motion.div initial="hidden" animate="visible" variants={{
                    hidden: {
                        scale: .8,
                        opacity: 0
                    },
                    visible: {
                        scale: 1,
                        opacity: 1,
                        transition: {
                        delay: .5
                        }
                    },
                }}>
                    <h1 className="font-black tracking-tight text-2xl md:text-[3rem] mb-6 md:pb-8 last:mb-0 text-left md:text-center">busy<span style={{ "color": "red" }}>little</span>pixels<span style={{ "color": "red"}}>:</span><span style={{ "color": "red" }}>studio</span></h1>
                    <h1 className="font-black tracking-tighter text-5xl md:text-[5rem] mb-6 last:mb-0 uppercase text-left md:text-center">building the future of <span style={{ "color": "red"}}>{word}</span> today. </h1>
                       
                <p className="studio_intro">
                    {studio.data.studio_intro[0].text}
                </p>

                <div className="mt-8 flex gap-x-4 justify-start md:justify-center">
                    {/* @ts-ignore */}
                    <a href="#moreinfo" className="inline-block rounded-md bg-red-600 px-4 py-1.5 text-base font-bold leading-7 text-white shadow-sm ring-1 ring-red-600 hover:bg-red-400 hover:ring-red-400" data-scrollto="moreinfo" scrollto="moreinfo" onClick={onScrollClick}>Tell me more</a>
                </div>
                </motion.div>   
            </section>
            <GalleryGrid />
            <span id={"moreinfo"} className={'mt-8'}></span>
            <Bounded collapsible={false} as="section" className="px-6 py-20 md:py-32 bg-white pb-0 md:pb-0">
                <div className="grid grid-cols-1 justify-items-center gap-10 homeAdjust mb-6">
                    <div className="max-full text-center leading-relaxed mb-2">
                        <h2 className="font-black tracking-tighter text-3xl md:text-[3.5rem] mb-6 last:mb-0 uppercase">A bit more <span style={{ "color": "red"}}>about us</span></h2>
                    </div>
                </div>
                <div className="py-8 flex flex-col md:flex-row">
                    <div className="mx-auto w-full max-w-3xl border-b">
                        <div className="leading-relaxed">
                            <p className="studio_intro">{studio.data.cta_body_content[0].text}</p>
                        </div>
                        <section className="text-gray-600 body-font">
                            <div className="container pt-4 pb-12 mx-auto"></div>
                        </section>
                    </div>
                </div>
            </Bounded>
            
            <section className="boundedContainer">
                <div className="container pt-20 mx-auto w-full max-w-7xl md:px-8">
                    <div className="flex flex-wrap w-full mb-20">
                    <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                        <h1 className="text-3xl font-black tracking-tight text-gray-900 sm:text-4xl uppercase">Industry <span style={{ "color": "red"}}>Experience</span></h1>
                        <div className="header__underline"></div>
                    </div>
                    <p className="lg:w-1/2 w-full leading-relaxed md:px-2 studio_intro">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
                    </div>
                    <div className="flex flex-wrap -m-4">
                    <div className="xl:w-1/4 md:w-1/2 p-2">
                        <div className="bg-gray-100 p-6 rounded-lg">
                        <h3 className="tracking-widest text-red-500 text-xs font-bold title-font">SUBTITLE</h3>
                        <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Media</h2>
                        <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                        </div>
                    </div>
                    <div className="xl:w-1/4 md:w-1/2 p-2">
                        <div className="bg-gray-100 p-6 rounded-lg">
                        {/* <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/721x401" alt="content" /> */}
                        <h3 className="tracking-widest text-red-500 text-xs font-bold title-font">SUBTITLE</h3>
                        <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Events</h2>
                        <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                        </div>
                    </div>
                    <div className="xl:w-1/4 md:w-1/2 p-2">
                        <div className="bg-gray-100 p-6 rounded-lg">
                        {/* <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/722x402" alt="content" /> */}
                        <h3 className="tracking-widest text-red-500 text-xs font-bold title-font">SUBTITLE</h3>
                        <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Headless CMS Development</h2>
                        <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                        </div>
                    </div>
                    <div className="xl:w-1/4 md:w-1/2 p-2">
                        <div className="bg-gray-100 p-6 rounded-lg">
                        {/* <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/723x403" alt="content" /> */}
                        <h3 className="tracking-widest text-red-500 text-xs font-bold title-font">SUBTITLE</h3>
                        <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Scaling Consultancy</h2>
                        <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
            <section className="px-3 container pt-20 mx-auto w-full max-w-7xl md:px-8 bg-white">
                <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                    <div>
                        <h2 className="text-3xl font-black tracking-tight text-gray-900 sm:text-4xl uppercase">Technical <span style={{ "color": "red"}}>Expertise</span></h2>
                        <div className="header__underline"></div>
                        <p className="mt-4 text-gray-500 studio_intro">You know who's into dragons, Morty? Nerds who refuse to admit they're Christian. I couldn't hear you over my own screaming. We've talked about this! 5 more minute of this and I'm going to get mad! You know my name, that's disarming. Not today bitch! You look it up, you don't- you don't even know what it means.</p>

                        <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                            <div className="border-t border-gray-200 pt-4">
                                <dt className="font-medium text-gray-900">Planning/Strategy</dt>
                                <dd className="mt-2 text-sm text-gray-500">Designed by Good Goods, Inc.</dd>
                            </div>

                            <div className="border-t border-gray-200 pt-4">
                                <dt className="font-medium text-gray-900">End-to-End Application Development</dt>
                                <dd className="mt-2 text-sm text-gray-500">Solid walnut base with rare earth magnets and powder coated steel card cover</dd>
                            </div>
                            <div className="border-t border-gray-200 pt-4">
                                <dt className="font-medium text-gray-900">Devops/Infrastucture</dt>
                                <dd className="mt-2 text-sm text-gray-500">6.25" x 3.55" x 1.15"</dd>
                            </div>

                            <div className="border-t border-gray-200 pt-4">
                                <dt className="font-medium text-gray-900">Data/Web Migrations</dt>
                                <dd className="mt-2 text-sm text-gray-500">Hand sanded and finished with natural oil</dd>
                            </div>

                            <div className="border-t border-gray-200 pt-4">
                                <dt className="font-medium text-gray-900">Solution Architecture</dt>
                                <dd className="mt-2 text-sm text-gray-500">Wood card tray and 3 refill packs</dd>
                            </div>

                            <div className="border-t border-gray-200 pt-4">
                                <dt className="font-medium text-gray-900">Strategic Partnership</dt>
                                <dd className="mt-2 text-sm text-gray-500">Made from natural materials. Grain and color vary with each item.</dd>
                            </div>
                        </dl>
                    </div>
                    <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                        <img src="https://source.unsplash.com/640x640/?code" alt="Walnut card tray with white powder coated steel divider and 3 punchout holes." className="rounded-lg bg-gray-100" />
                        <img src="https://source.unsplash.com/640x640/?tech" alt="Top down view of walnut card tray with embedded magnets and card groove." className="rounded-lg bg-gray-100" />
                        <img src="https://source.unsplash.com/640x640/?mobile" alt="Side of walnut card tray with card groove and recessed card area." className="rounded-lg bg-gray-100" />
                        <img src="https://source.unsplash.com/640x640/?app" alt="Walnut card tray filled with cards and card angled in dedicated groove." className="rounded-lg bg-gray-100" />
                    </div>
                </div>
            </section>
            
            <CarouselContainer />
        
            <section className="boundedContainer px-3 md:px-6 py-20 md:py-32 mx-auto w-full max-w-7xl">
            <div className="relative overflow-hidden bg-white">
                <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
                    <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                        <div className="sm:max-w-lg">
                            <h1 className="font text-4xl font-black tracking-tight text-gray-900 sm:text-6xl">Engineering Solutions</h1>
                            <p className="mt-4 text-xl text-bold00">Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>
                        </div>
                        <div>
                            <div className="mt-10">

                                <div aria-hidden="true" className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
                                    <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                                        <div className="flex items-center space-x-6 lg:space-x-8">
                                            <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                                <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                                                    <img src="https://placedog.net/200/375/r" alt="" className="h-full w-full object-cover object-center" />
                                                </div>
                                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                    <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg" alt="" className="h-full w-full object-cover object-center" />
                                                </div>
                                            </div>
                                            <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                    <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg" alt="" className="h-full w-full object-cover object-center" />
                                                </div>
                                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                    <img src="https://placedog.net/352/512/r" alt="" className="h-full w-full object-cover object-center" />
                                                </div>
                                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                    <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg" alt="" className="h-full w-full object-cover object-center" />
                                                </div>
                                            </div>
                                            <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                    <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg" alt="" className="h-full w-full object-cover object-center" />
                                                </div>
                                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                    <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg" alt="" className="h-full w-full object-cover object-center" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <Link href="/contact" className="inline-block rounded-md border border-transparent bg-red-600 py-3 px-8 text-center font-medium text-white hover:bg-red-400">Get In Touch</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
            <Bounded collapsible={false} as="section" className="bg-slate-100 mt-8">
                <div className="grid grid-cols-1 items-end gap-10 md:grid-cols-1 md:gap-10 lg:gap-28">
                    <h1 className='text-center'>[ADVERTISEMENT]</h1>
                </div>
            </Bounded>
            <CTA />
    </Layout>
    )
}

export default Studio; 

export async function getStaticProps({ preview = false, previewData }:any) {
    const client = createClient({ previewData });
  
    const studio = await client.getSingle("studio");
    
    return {
      props: {
        studio,
        preview
      },
      revalidate: 900
    };
}
    