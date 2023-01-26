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
import { Advert } from "../components/Advert"
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
  
  {/*    <section className="container pt-20 mx-auto w-full max-w-7xl px-6 md:px-8 relative overflow-hidden bg-white mb-12">
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

      <Advert />
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