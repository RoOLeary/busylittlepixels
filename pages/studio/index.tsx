/* eslint-disable react/jsx-no-comment-textnodes */
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router';
import { Layout } from '../../components/Layout';
import { Bounded } from "../../components/Bounded";
import CarouselContainer from "../../components/Carousel";
import { CTA } from "../../components/CallToAction";
import imageLoader from '../../imageLoader';
import { useTypingText } from '../../hooks/useTypingText';
import { motion } from 'framer-motion';
import { Key } from 'react'


const inter = Inter({ subsets: ['latin'] })

const Studio = ({ page, preview }:any) => {

    // console.log(page.data[0]);
    const router = useRouter(); 
    const { word } = useTypingText(['SITES, ', 'APPS, ', 'MEDIA, ', 'TEAMS, ', 'STRATEGIES'], 250, 20);

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
            {preview ? <div className={'text-center uppercase bg-red-500 text-white py-6 fixed bottom-0 w-full z-10'}><h3>You are in Preview Mode</h3></div> : null} 
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
                <h1 className="font-black tracking-tighter text-5xl md:text-[5rem] mb-6 last:mb-0 uppercase text-left md:text-center">{page.data[0].studioTitle} <span style={{ "color": "red"}}>{word}</span></h1>
                <p className="studio_intro">
                    {page ? page.data[0].studioIntro.replace(/(<p[^>]+?>|<p>|<\/p>)/img, "") : null}
                </p>
                <div className="relative mx-auto h-full max-w-prose text-lg" aria-hidden="true">
                    <svg className="absolute bottom-12 left-full translate-x-32 transform" width="200" height="485" fill="none" viewBox="0 0 200 485">
                        <defs>
                        <pattern id="d3eb07ae-5182-43e6-857d-35c643af9034" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                            <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
                        </pattern>
                        </defs>
                        <rect width="200" height="384" fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
                    </svg>
                </div>
                <div className="mt-8 flex gap-x-4 justify-start md:justify-center">
                    {/* @ts-ignore */}
                    <a href="#moreinfo" className="inline-block rounded-md bg-red-600 px-4 py-1.5 text-base font-bold leading-7 text-white shadow-sm ring-1 ring-red-600 hover:bg-red-400 hover:ring-red-400" data-scrollto="moreinfo" scrollto="moreinfo" onClick={onScrollClick}>Hmmm...go on</a>
                </div>
                </motion.div>   
            </section>

            <span id={"moreinfo"} className={'mt-8'}></span>
            <section className="px-6 md:py-32 bg-white pb-0 md:pb-0">
                <div className="grid grid-cols-1 justify-items-center gap-10 homeAdjust mb-6">
                    <div className="max-full text-center leading-relaxed mb-2">
                        <h2 className="font-black tracking-tighter text-3xl md:text-[3.5rem] mb-6 last:mb-0 uppercase">A LITTLE BIT <span style={{ "color": "red"}}>MORE </span>{page.data[0].studioMoreAbout}</h2>
                    </div>
                </div>
                {/* <div className="pt-8 flex flex-col md:flex-row">
                    <div className="mx-auto w-full max-w-3xl shadow-sm">
                        <div className="leading-relaxed">
                            <p className="studio_intro">{page.data[0].studioMoreAboutText.replace(/(<p[^>]+?>|<p>|<\/p>)/img, "")}.</p>
                        </div>
                    </div>
                </div> */}
                <div className="flex mx-auto w-full max-w-7xl md:px-8">
                    <div className="pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-10 gap-x-20">
                        <div className="inline-flex flex-col">
                            <div>
                                <h1 className="text-3xl font-black tracking-tight text-gray-900 sm:text-4xl uppercase">SKILL AND <span style={{ "color": "red"}}>Experience</span></h1>
                                <div className="header__underline"></div>
                            </div>
                        </div>
                        <div className="col-span-1 md:col-span-2">
                            <p className="studio_intro">Collectively, we've been developing full-stack applications for almost 20 years. Although, at the time, I didn't know what full-stack meant at that time because the term was still the ubiqutous "web designer" back then. </p>
                            <br />
                            <p className="studio_intro">After learning HTML, PHP, JS and CSS, I came up with a brilliant idea of using Tailwind so that I don't have to style everything by myself and - for obvious reasons - if you know Tailwind, you're all cool by me.</p>
                            <br />
                            <p className="studio_intro">But now, I'm a legend. I've been coding in React, Vue, Node.js, PHP, MySQL, Tailwind, Next.js, Craft CMS, WordPress, Laravel...to name a few. Although I barely know the syntax (Psst, Stack overflow!). Which is what I would say if I were a total douche.</p>
                        </div>
                    </div>
                </div>
                
            </section>
            

                    
            <section className="px-6 md:py-20 bg-white pb-0 md:pb-0">
                <div className="container pt-20 mx-auto w-full max-w-7xl md:px-8">
                    <div className="flex flex-wrap w-full mb-20">
                        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                            <h1 className="text-3xl font-black tracking-tight text-gray-900 sm:text-4xl uppercase">{page.data[0].studioIndustryExpTitle} <span style={{ "color": "red"}}>Experience</span></h1>
                            <div className="header__underline"></div>
                        </div>
                        <p className="lg:w-1/2 w-full studio_intro">{page.data[0].studioIndustryExpIntro.replace(/(<p[^>]+?>|<p>|<\/p>)/img, "")}</p>
                    </div>
                    <div className="flex flex-wrap -m-4 relative z-10">
                        {page.data[0].studioIndustryExpPanels.map((panel: 
                            { 
                                subTitle: Key | null | undefined, 
                                industryTitle: string | null | undefined, 
                                industryBody: string | null | undefined,
                            }):any => {
                            
                            return(
                                <div key={panel.subTitle} className="xl:w-1/4 md:w-1/2 p-2">
                                    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                                        <h3 className="tracking-widest text-red-500 text-xs font-bold title-font">{panel.subTitle}</h3>
                                        <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{panel.industryTitle}</h2>
                                        {/* @ts-ignore */}
                                        <p className="leading-relaxed text-base">{panel.industryBody.replace(/(<p[^>]+?>|<p>|<\/p>)/img, "")}</p>
                                    </div>
                                </div>
                            )
                        })}
                        
                    </div>
                    <div className="relative mx-auto h-full max-w-prose text-lg" aria-hidden="true">
                        <svg className="absolute bottom-12 right-full translate-y-32 transform" width="300" height="485" fill="none" viewBox="0 0 300 350">
                            <defs>
                            <pattern id="d3eb07ae-5182-43e6-857d-35c643af9034" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
                            </pattern>
                            </defs>
                            <rect width="300" height="485" fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
                        </svg>
                    </div>
                </div>
            </section>
            <section className="px-3 container pt-20 mx-auto w-full max-w-7xl md:px-8 bg-white">
                <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                    <div>
                        <h2 className="text-3xl font-black tracking-tight text-gray-900 sm:text-4xl uppercase">Technical <span style={{ "color": "red"}}>Expertise</span></h2>
                        <div className="header__underline"></div>
                        <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                            <div className="pt-4">
                                <dt className="font-medium text-gray-900">Planning/Strategy</dt>
                                <dd className="mt-2 text-sm text-gray-500">Designed by Good Goods, Inc.</dd>
                            </div>

                            <div className="pt-4">
                                <dt className="font-medium text-gray-900">End-to-End Application Development</dt>
                                <dd className="mt-2 text-sm text-gray-500">Solid walnut base with rare earth magnets and powder coated steel card cover</dd>
                            </div>
                            <div className="border-t border-gray-200 pt-4">
                                <dt className="font-medium text-gray-900">Team Development</dt>
                                <dd className="mt-2 text-sm text-gray-500">We're like "The A Team" - but for digital products and web teams.</dd>
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
            
            
            {/* <section className="boundedContainer px-3 md:px-6 py-20 md:py-32 mx-auto w-full max-w-7xl">
                <div className="relative overflow-hidden bg-white">
                    <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
                        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                            <div className="sm:max-w-lg">
                                <h1 className="font text-4xl font-black tracking-tight text-gray-900 sm:text-6xl">Engineering Elastic Solutions</h1>
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
                                                        <img src="https://placedog.net/350/500/r" alt="" className="h-full w-full object-cover object-center" />
                                                    </div>
                                                </div>
                                                <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                                    <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                        <img src="https://placedog.net/200/375/r" alt="" className="h-full w-full object-cover object-center" />
                                                    </div>
                                                    <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                        <img src="https://placedog.net/352/512/r" alt="" className="h-full w-full object-cover object-center" />
                                                    </div>
                                                    <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                        <img src="https://placedog.net/200/375/r" alt="" className="h-full w-full object-cover object-center" />
                                                    </div>
                                                </div>
                                                <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                                    <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                        <img src="https://placedog.net/352/512/r" alt="" className="h-full w-full object-cover object-center" />
                                                    </div>
                                                    <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                        <img src="https://placedog.net/200/375/r" alt="" className="h-full w-full object-cover object-center" />
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
            </Bounded> */}
            {/* <CTA /> */}
    </Layout>
    )
}

export default Studio;

export const getStaticProps = async ({ preview = false, previewData }:any) => {
  
  let url = `https://craft-ezhk.frb.io/api/studio.json`;
  
  const res = await fetch(url)
  const studiopage = await res.json()
  let prevData;

  if(preview){
      const prevResponse = await fetch(`${url}?token=${previewData['token']}`);
      prevData = await prevResponse.json(); 
  } 

  let data = preview ? prevData : studiopage;

  return {
      props: {
          preview: preview ? true : false,
          page: data
      },
      revalidate: 30
    };
}