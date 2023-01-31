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
  
    
      {/* <Advert />
      <CTA /> */}
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