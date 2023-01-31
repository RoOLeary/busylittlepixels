/* eslint-disable react/jsx-no-comment-textnodes */
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { motion } from 'framer-motion';
import { Layout } from '../components/Layout';
import { Advert } from "../components/Advert"
import { CTA } from "../components/CallToAction"
import { TitleContainer } from '../components/TitleContainer';
import PageBlocks from "../components/PageBlocks";
import { GetStaticProps, GetServerSideProps } from 'next'

const inter = Inter({ subsets: ['latin'] })
const Home = ({ page, preview }:any) => {

  let title = page ? page.data[0].homeTitle : null;
  let subtitle = page ? page.data[0].homeSubTitle : null;

  return (
    <>
     
     <Layout>
      {preview ? <div className={'text-center uppercase bg-red-500 text-white py-6 fixed bottom-0 w-full z-10'}><h3>You are in Preview Mode</h3></div> : null}     
      <TitleContainer title={title} subtitle={subtitle} />
      <PageBlocks content={page['data'][0]['pageBlocks']} />
      <CTA />
      <div className="relative isolate overflow-hidden bg-black">
        <div className="py-24 px-6 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-center font-black tracking-tighter text-4xl md:text-6xl mb-4 text-white last:mb-0 uppercase">SIGN UP FOR OUR <br />BUSYLITTLEUPDATES</h2>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="#" className="rounded-md bg-red-500 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Get started</a>
            </div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" className="absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2" aria-hidden="true">
          <circle cx="512" cy="512" r="512" fill="url(#8d958450-c69f-4251-94bc-4e091a323369)" fill-opacity="0.7" />
          <defs>
            <radialGradient id="8d958450-c69f-4251-94bc-4e091a323369" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(512 512) rotate(90) scale(512)">
              <stop stop-color="#F00"></stop>
              <stop offset="1" stop-color="#f00" stop-opacity="0"></stop>
            </radialGradient>
          </defs>
        </svg>
      </div>

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