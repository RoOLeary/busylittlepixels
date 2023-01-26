/* eslint-disable react/jsx-no-comment-textnodes */
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { motion } from 'framer-motion';
import { Layout } from '../components/Layout';
import { Bounded } from "../components/Bounded";
import { GalleryGrid } from "../components/GalleryGrid";
import CarouselContainer from "../components/Carousel";
import { CTA } from "../components/CallToAction"
// import { ProjectSlider } from "../components/ProjectSlider";
import { Video } from "../components/Video";
import imageLoader from '../imageLoader';
import { TitleContainer } from '../components/TitleContainer';

import PageBlocks from "../components/PageBlocks";
import { GetStaticProps, GetServerSideProps } from 'next'

const inter = Inter({ subsets: ['latin'] })

const Home = ({ page, preview }:any) => {

  console.log(page);
  let title = page ? page.data[0].homeTitle : null;
  let subtitle = page ? page.data[0].homeSubTitle : null;

  return (
    <>
     
     <Layout>
      {preview ? <div className={'text-center uppercase bg-red-500 text-white py-6 fixed bottom-0 w-full z-10'}><h3>You are in Preview Mode</h3></div> : null}     
      <TitleContainer title={title} subtitle={subtitle} />
      <PageBlocks content={page['data'][0]['pageBlocks']} />
      {/* <div className="container pt-20 mx-auto w-full max-w-7xl px-3 md:px-8 bg-white">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-black tracking-tight text-gray-900 sm:text-4xl uppercase">Technical <span style={{ "color": "red"}}>Expertise</span></h2>
            <div className="header__underline"></div>
            <p className="mt-4 text-gray-500">You know who's into dragons, Morty? Nerds who refuse to admit they're Christian. I couldn't hear you over my own screaming. We've talked about this! 5 more minute of this and I'm going to get mad! You know my name, that's disarming. Not today bitch! You look it up, you don't- you don't even know what it means.</p>

            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Headless CMS/web solutions</dt>
                <dd className="mt-2 text-sm text-gray-500">Designed by Good Goods, Inc.</dd>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Mobile Development</dt>
                <dd className="mt-2 text-sm text-gray-500">Solid walnut base with rare earth magnets and powder coated steel card cover</dd>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Cloud Infrastructure</dt>
                <dd className="mt-2 text-sm text-gray-500">6.25" x 3.55" x 1.15"</dd>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Building the web of the future</dt>
                <dd className="mt-2 text-sm text-gray-500">Hand sanded and finished with natural oil</dd>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Solutions Architecture</dt>
                <dd className="mt-2 text-sm text-gray-500">Wood card tray and 3 refill packs</dd>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Consultancy</dt>
                <dd className="mt-2 text-sm text-gray-500">Made from natural materials. Grain and color vary with each item.</dd>
              </div>
            </dl>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
            <img src="https://source.unsplash.com/640x640/?code" alt="Walnut card tray with white powder coated steel divider and 3 punchout holes." className="rounded-lg bg-gray-100" />
            <img src="https://source.unsplash.com/640x640/?tech" alt="Top down view of walnut card tray with embedded magnets and card groove." className="rounded-lg bg-gray-100"/>
            <img src="https://source.unsplash.com/640x640/?mobile" alt="Side of walnut card tray with card groove and recessed card area." className="rounded-lg bg-gray-100"/>
            <img src="https://source.unsplash.com/640x640/?app" alt="Walnut card tray filled with cards and card angled in dedicated groove." className="rounded-lg bg-gray-100"/>
          </div>
        </div>
      </div>

      <section className="container pt-20 mx-auto w-full max-w-7xl px-6 md:px-8 relative overflow-hidden bg-white mb-12">
        <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="font text-4xl font-black tracking-tight text-gray-900 sm:text-6xl">BEHOLD!! </h1>
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
                <Link href="/contact" className="inline-block rounded-md border border-transparent bg-red-600 py-3 px-8 text-center font-medium text-white hover:bg-red-500">Get in touch</Link>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <Bounded collapsible={false} as="section" className="bg-slate-100">
        <div className="grid grid-cols-1 items-end gap-10 md:grid-cols-1 md:gap-10 lg:gap-28">
          <h1 className='text-center'>[ADVERTISEMENT]</h1>
        </div>
      </Bounded>
      <CTA />
    </Layout>
    </>
  )
}

export default Home;

export const getStaticProps = async ({ preview = false, previewData }:any) => {
  
  let url = `https://craft-ezhk.frb.io/api/homepage.json`;
  
  const res = await fetch(url)
  const homepage = await res.json()
  let prevData;

  if(preview){
      const prevResponse = await fetch(`${url}?token=${previewData['token']}`);
      prevData = await prevResponse.json(); 
  } 

  let data = preview ? prevData : homepage;

  return {
      props: {
          preview: preview ? true : false,
          page: data
      },
      revalidate: 30
    };
}