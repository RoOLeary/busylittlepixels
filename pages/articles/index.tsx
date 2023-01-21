/* eslint-disable react/jsx-no-comment-textnodes */
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import imageLoader from '../../imageLoader'
import { motion } from 'framer-motion';
import styles from '../styles/Home.module.css'

import { PrismicLink, PrismicText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import * as prismicH from "@prismicio/helpers";
import { PrismicRichText } from '@prismicio/react';

import { createClient } from "../../prismicio";

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});


import { Layout } from '../../components/Layout';
import { Bounded } from "../../components/Bounded";
import { GalleryGrid } from "../../components/GalleryGrid";
// import CarouselContainer from "../components/Carousel";
import { CTA } from "../../components/CallToAction";
// import { Video } from "../components/Video";
// import { Faqs } from "../components/Faq/Faqs";

const inter = Inter({ subsets: ['latin'] })

const Articles = ({ articles, preview }:any) => {

    

    return(
        <Layout>
        {preview ? <div className={'text-center uppercase bg-red-500 text-white py-6 fixed bottom-0 w-full z-10'}><h3>You are in Preview Mode</h3></div> : null}     
          <Bounded collapsible={true} as="section" className="px-6 py-20 md:py-32 py-20 md:py-32 bg-white override mb-12">
      
      
      
        <h1 className="pb-8 font-black text-4xl md:text-6xl mb-6 last:mb-0 border-b border-gray-200 uppercase">BUSY<span style={{ "color": "red"}}>LITTLE</span>ARTICLES<span style={{ "color": "red"}}>.</span></h1>
        <div className="flex flex-col md:flex-row md:gap-8">
      
        <div className="w-full  flex flex-col space-y-16">
         
          {articles.map((article:any, i:number) => {
            // console.log(article.data.article_excerpt)
            return(
              <div key={i} className="grid grid-cols-2 gap-6 md:grid-cols-4">
                <Image src={article.data.article_featured_image.url} alt={'article featured image'} width={160} height={200} className="h-full object-cover w-full md:h-40 col-span-1 bg-center" loading="lazy" loader={imageLoader} />
                <div className="col-span-1 md:col-span-3">
                  <><p className="mb-2 -mt-1 text-sm font-normal text-gray-500">{article.data.publish_date}, <Link href={`/${article.data.category}`}>{article.data.category}</Link></p></>
                  <h2 className="mb-2 md:text-2xl font-extrabold leading-snug text-gray-800">
                    <Link href={`/articles/${article.uid}`} className="duration-300 transition ease-in-out  text-gray-900 hover:text-red-500">{article.data.articletitle[0].text}</Link>
                  </h2>
                  <p className="mb-3 text-sm font-normal text-gray-500 allArticles_excerpt ">
                      <PrismicRichText field={article.data.article_excerpt} />
                  </p>
                  <Link href={`/articles/${article.uid}`} className="hidden md:visible btn btn-light btn-sm">Read More</Link>
                </div>
              </div>
            )
          })}
          
          
          
      
        </div>
        {/* <div className="w-full md:w-0 xl:w-2/6 flex flex-col space-y-16">
          <div className="sticky md:visible">
            <img className="w-full" src="https://place-hold.it/350x1200/black/white.png&text=Advert&bold&fontsize=18" />
          </div>
          <div className="sticky">
            <img className="w-full" src="https://place-hold.it/350x350/black/white.png&text=Advert&bold&fontsize=18" />
          </div>
        </div> */}
      </div> 
      </Bounded>
      <CTA />
    </Layout>

    )

}

export default Articles; 

// @ts-ignore
export async function getStaticProps({ preview = false, previewData }) {
  
  const client = createClient({ previewData });

  const articles = await client.getAllByType("articles", {
    limit: 5,
    orderings: [
      { field: "article.first_publication_date", direction: "asc" }
    ],
  });
  
  return {
    props: {
      articles,
      preview
    },
    revalidate: 900
  };
}
