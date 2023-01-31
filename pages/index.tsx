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

  console.log(page['data'][0]['pageBlocks']);
  return (
    <>
     
     <Layout>
      {preview ? <div className={'text-center uppercase bg-red-500 text-white py-6 fixed bottom-0 w-full z-10'}><h3>You are in Preview Mode</h3></div> : null}     
      <TitleContainer title={title} subtitle={subtitle} />
      <PageBlocks content={page['data'][0]['pageBlocks']} />
  
      {/* <Bounded collapsible={true} as="section" className="px-6 py-20 md:py-32 py-20 md:py-32 bg-white">
        <div className="relative overflow-hidden bg-white py-16">
          
          <section className="relative lg:px-8">
            <div className="mx-auto max-w-prose text-lg">
              <h1 className="font-black tracking-tighter text-3xl md:text-[3.5rem] mb-6 last:mb-0 uppercase">
                Text Component <span style={{ "color": "red"}}>V2</span>
              </h1>
              <p className="mt-8 text-xl leading-8 text-gray-500">Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget. Eleifend egestas fringilla sapien.</p>
              <p className="mt-8 text-xl leading-8 text-gray-500">Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget. Eleifend egestas fringilla sapien.</p>
            
            </div>
            
          </section>
        </div>
      </Bounded> */}
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