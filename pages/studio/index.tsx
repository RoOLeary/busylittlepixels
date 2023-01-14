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
// import { useTypingText } from '../../hooks/useTypingText';

const inter = Inter({ subsets: ['latin'] })

export default function Studio() {

    const router = useRouter(); 
    // const { word } = useTypingText(['WEB ', 'APP ', 'DESIGN '], 300, 20);

    return(

        <Layout>
            <section className="isolate bg-white">
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
            </section>



            <Bounded collapsible={true} as="section" className="px-6 py-32 md:py-20 md:override">
                <h1 className="px-0 md:px-6 font-black text-4xl md:text-6xl mb-6 last:mb-0 text-left md:text-center uppercase">busy <span style={{ "color": "red" }}>little</span> pixels<span style={{ "color": "red" }}>.</span><span style={{ "color": "red" }}>STUDIO</span></h1>
                <h3 className="px-0 md:px-6 mt-6 text-2xl leading-8 text-left md:text-center font-light tracking-wide">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</h3>
                <div className="mt-8 flex gap-x-4 justify-start md:justify-center"><a href="#" className="inline-block rounded-md bg-red-600 px-4 py-1.5 text-base font-bold leading-7 text-white shadow-sm ring-1 ring-red-600 hover:bg-red-400 hover:ring-red-400 uppercase">View Showcase</a></div>
            </Bounded>
            <GalleryGrid />
           
            <div className="bg-white">
                <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                    <div>
                        <h2 className="text-3xl font-black tracking-tight text-gray-900 sm:text-4xl uppercase">Technical Expertise</h2>
                        <p className="mt-4 text-gray-500">You know who's into dragons, Morty? Nerds who refuse to admit they're Christian. I couldn't hear you over my own screaming. We've talked about this! 5 more minute of this and I'm going to get mad! You know my name, that's disarming. Not today bitch! You look it up, you don't- you don't even know what it means.</p>

                        <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                            <div className="border-t border-gray-200 pt-4">
                                <dt className="font-medium text-gray-900">Origin</dt>
                                <dd className="mt-2 text-sm text-gray-500">Designed by Good Goods, Inc.</dd>
                            </div>

                            <div className="border-t border-gray-200 pt-4">
                                <dt className="font-medium text-gray-900">Material</dt>
                                <dd className="mt-2 text-sm text-gray-500">Solid walnut base with rare earth magnets and powder coated steel card cover</dd>
                            </div>

                            <div className="border-t border-gray-200 pt-4">
                                <dt className="font-medium text-gray-900">Dimensions</dt>
                                <dd className="mt-2 text-sm text-gray-500">6.25" x 3.55" x 1.15"</dd>
                            </div>

                            <div className="border-t border-gray-200 pt-4">
                                <dt className="font-medium text-gray-900">Finish</dt>
                                <dd className="mt-2 text-sm text-gray-500">Hand sanded and finished with natural oil</dd>
                            </div>

                            <div className="border-t border-gray-200 pt-4">
                                <dt className="font-medium text-gray-900">Includes</dt>
                                <dd className="mt-2 text-sm text-gray-500">Wood card tray and 3 refill packs</dd>
                            </div>

                            <div className="border-t border-gray-200 pt-4">
                                <dt className="font-medium text-gray-900">Considerations</dt>
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
            </div>
            
            <CarouselContainer />

            <Bounded collapsible={true} as="section" className="px-6 py-32 md:py-20 md:override">
            <div className="relative overflow-hidden bg-white">
                <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
                    <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                        <div className="sm:max-w-lg">
                            <h1 className="font text-4xl font-black tracking-tight text-gray-900 sm:text-6xl">Solution Consultancy </h1>
                            <p className="mt-4 text-xl text-gray-500">Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>
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

                                <a href="#" className="inline-block rounded-md border border-transparent bg-red-600 py-3 px-8 text-center font-medium text-white hover:bg-black">Get In Touch</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </Bounded>
            <Bounded collapsible={false} as="section" className="bg-slate-100 mt-8">
                <div className="grid grid-cols-1 items-end gap-10 md:grid-cols-1 md:gap-10 lg:gap-28">
                    <h1 className='text-center'>[ADVERTISEMENT]</h1>
                </div>
            </Bounded>
            <CTA />
    </Layout>


    )

}