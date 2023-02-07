/* eslint-disable react/jsx-no-comment-textnodes */
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import imageLoader from '../../imageLoader'
import { motion } from 'framer-motion';
import styles from '../styles/Home.module.css'
import { GetStaticProps } from 'next'
import { Layout } from '../../components/Layout';
import { Bounded } from "../../components/Bounded";
import Date from '../../lib/utils';

const inter = Inter({ subsets: ['latin'] })

const Articles = ({ page, preview }:any) => {

    let articles = Object.values(page.data);

    return(
        <Layout>
          <Bounded collapsible={true} as="section" className="px-6 py-20 md:py-32 py-20 md:py-32 bg-white override mb-12">
            <h1 className="font-black tracking-tight text-3xl md:text-[3rem] mb-6 md:pb-8 last:mb-0 text-left">busy<span style={{ "color": "red"}}>little</span>pixels<span style={{ "color": "red"}}>:articles</span></h1>
            <div className="flex flex-col md:flex-row md:gap-8">
              <div className="w-full  flex flex-col space-y-16">
              
                {articles.map((article:any, i:number) => {
                
                  return(
                    <div key={i} className="grid grid-cols-2 gap-6 md:grid-cols-4">
                      <Image src={`/${article.articleFeaturedImage}`} alt={'article featured image'} width={160} height={200} className="h-40 object-cover w-full col-span-1 bg-center" loading="lazy" loader={imageLoader} />
                      <div className="col-span-1 md:col-span-3">
                        <><p className="mb-2 -mt-1 text-sm font-normal text-gray-500"></p></>
                        <h1 className="mb-2 text-2xl md:text-3xl font-extrabold leading-snug text-gray-800">
                          <Link href={{ pathname: `articles/${article.slug}` }} className="duration-300 transition ease-in-out  text-gray-900 hover:text-red-500">{article.articleTitle}</Link>
                        </h1>
                        <p className="tmd:text-1xl font-bold"><Date dateString={article.articleTypePostDate} /></p>
                        <p className="mb-3 text-md font-normal text-gray-500 allArticles_excerpt leading-8" dangerouslySetInnerHTML={{__html: article.articleExcerpt}} />
                        
                        <Link href={`/articles/${article.slug}`} className="hidden md:visible btn btn-light btn-sm">Read More</Link>
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
              </div>*/}
            </div>   
          </Bounded>
        </Layout>

    )
}


export const getStaticProps: GetStaticProps = async ({ preview = false, previewData }:any) => {
  
  let url = `https://craft-ezhk.frb.io/api/articles.json`;
  
  const res = await fetch(url)
  const page = await res.json()
  let prevData;

  if(preview){
      const prevResponse = await fetch(`${url}?token=${previewData['token']}`);
      prevData = await prevResponse.json(); 
  } 

  let data = preview ? prevData : page;

  return {
      props: {
          preview: preview ? true : false,
          page: data
      },
      revalidate: 10, // In seconds
    };
}


export default Articles; 
