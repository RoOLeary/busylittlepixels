import * as prismicH from "@prismicio/helpers";
import { createClient, linkResolver } from "../../prismicio";
/* eslint-disable react/jsx-no-comment-textnodes */
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import { motion } from 'framer-motion';
import { Layout } from '../../components/Layout';
import { Bounded } from "../../components/Bounded";
import imageLoader from '../../imageLoader';
import { PrismicRichText } from '@prismicio/react' 

const inter = Inter({ subsets: ['latin'] })

const Article = ({ article, preview }:any) => {
    console.log(article);
    // let bodyContent = Object.entries(article.data.article_body).map((p, i) => {
    //   let idx:number = 1; // console.log(p[1].text)
    //   return p[idx].text
    // });



    return(

        <Layout>
          <Bounded collapsible={false} as="section" className="px-6 py-20 md:py-32 py-20 md:py-32 bg-white pb-0 md:pb-0">
          <div className="grid grid-cols-1 justify-items-center gap-10 homeAdjust mb-6">
            <div className="max-full text-center leading-relaxed mb-2">
              <h1 className="composedHeading">{article.data.articletitle[0].text}</h1>
            </div>
            <div className="max-full text-center leading-relaxed mb-8">
              <p className="font-semibold tracking-tighter">By <a href="#">Ronan O'Leary</a> | Category: Tech, CMS | Published: {article.data.publish_date}</p>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="w-full mb-2"
          >
              {/* <Video slice={undefined} index={0} slices={[]} context={undefined} /> */}
              <Image alt={'holding'} src={article.data.article_featured_image.url} width={1200} height={500} loader={imageLoader} className="shadow-xl" />
          </motion.div>       
          <div className="py-8 flex flex-col md:flex-row">
          
            <div className="mx-auto w-full max-w-3xl">
              <div className="leading-relaxed">
                <PrismicRichText field={article.data.article_body} />
              </div>
            </div>
          </div>
          
          </Bounded>
          <Bounded collapsible={false} as="section" className="bg-slate-100">
            <div className="grid grid-cols-1 items-end gap-10 md:grid-cols-1 md:gap-10 lg:gap-28">
              <h1 className='text-center'>[ADVERTISEMENT]</h1>
            </div>
          </Bounded>

          <Bounded collapsible={true} as="section" className="px-6 py-20 md:py-20 bg-white">
          <h3 className="pb-8 font-black text-4xl mb-6 last:mb-0 border-b border-gray-200 uppercase">RELATED <span style={{ "color": "red"}}></span> <span style={{ "color": "red"}}>ARTICLES</span></h3>
              
              <div className="grid grid-cols-1 sm:gap-2 gap-2 md:grid-cols-2">
                <div className="grid grid-cols-2 sm:gap-2 gap-2 md:grid-cols-2">
                    <div>
                      <img src="https://placedog.net/650/450/r" className="object-cover w-full col-span-1 bg-center" alt="Doggo" loading="lazy" />
                      <div className="col-span-1">
                        
                        
                        <h1 className="pt-2 mb-2 md:text-xl font-extrabold leading-snug text-gray-800">
                          <Link href="/words/plerp" className="duration-300 transition ease-in-out  text-gray-900 hover:text-red-500">Process Documents Using Artificial Intelligence For RPA Bots</Link>
                        </h1>
                        <p className="mb-3 text-sm hidden md:visible font-normal text-gray-500">
                          Earlier RPA bots used to have some limitations like it would take structured data for processing from excel, database, on these data. But with advancements in technology like OCR (Optical
                          Character Recognition) and Machine Learning, RPA bots are capable of extracting these data …
                        </p>
                        <a href="#" className="hidden md:visible btn btn-light btn-sm">Read More</a>
                      </div>
                    </div>
                    <div>
                      <img src="https://placedog.net/650/450/r" className="object-cover w-full col-span-1 bg-center" alt="Doggo" loading="lazy" />
                      <div className="col-span-1">
                        
                        
                        <h1 className="pt-2 mb-2 md:text-xl font-extrabold leading-snug text-gray-800">
                          <a href="#" className="duration-300 transition ease-in-out  text-gray-900 hover:text-red-500">Process Documents Using Artificial Intelligence For RPA Bots</a>
                        </h1>
                        <p className="mb-3 text-sm hidden md:visible font-normal text-gray-500">
                          Earlier RPA bots used to have some limitations like it would take structured data for processing from excel, database, on these data. But with advancements in technology like OCR (Optical
                          Character Recognition) and Machine Learning, RPA bots are capable of extracting these data …
                        </p>
                        <a href="#" className="hidden md:visible btn btn-light btn-sm">Read More</a>
                      </div>
                    </div> 
                </div>
                <div className="grid grid-cols-2 sm:gap-2 gap-2 md:grid-cols-2">
                    <div>
                      <img src="https://placedog.net/650/450/r" className="object-cover w-full col-span-1 bg-center" alt="Doggo" loading="lazy" />
                      <div className="col-span-1">
                        
                        
                        <h1 className="pt-2 mb-2 md:text-xl font-extrabold leading-snug text-gray-800">
                          <a href="#" className="duration-300 transition ease-in-out  text-gray-900 hover:text-red-500">Process Documents Using Artificial Intelligence For RPA Bots</a>
                        </h1>
                        <p className="mb-3 text-sm hidden md:visible font-normal text-gray-500">
                          Earlier RPA bots used to have some limitations like it would take structured data for processing from excel, database, on these data. But with advancements in technology like OCR (Optical
                          Character Recognition) and Machine Learning, RPA bots are capable of extracting these data …
                        </p>
                        <a href="#" className="hidden md:visible btn btn-light btn-sm">Read More</a>
                      </div>
                    </div>
                    <div>
                      <img src="https://placedog.net/650/450/r" className="object-cover w-full col-span-1 bg-center" alt="Doggo" loading="lazy" />
                      <div className="col-span-1">
                        
                        
                        <h1 className="pt-2 mb-2 md:text-xl font-extrabold leading-snug text-gray-800">
                          <a href="#" className="duration-300 transition ease-in-out  text-gray-900 hover:text-red-500">Process Documents Using Artificial Intelligence For RPA Bots</a>
                        </h1>
                        <p className="mb-3 text-sm hidden md:visible font-normal text-gray-500">
                          Earlier RPA bots used to have some limitations like it would take structured data for processing from excel, database, on these data. But with advancements in technology like OCR (Optical
                          Character Recognition) and Machine Learning, RPA bots are capable of extracting these data …
                        </p>
                        <a href="#" className="hidden md:visible btn btn-light btn-sm">Read More</a>
                      </div>
                    </div> 
                </div>
              </div>
          
          </Bounded>
        </Layout>


    )

}

export default Article

// @ts-ignore
export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  const cat_article = await client.getAllByType("articles", params.uid);
  

  return {
    props: {
      cat_article,
    },
  };
}

export async function getStaticPaths() {
  const client = createClient();

  const mediaArticles = await client.getAllByType("articles");

  return {
    paths: mediaArticles.map((mediaArticle) => prismicH.asLink(mediaArticle, linkResolver)),
    fallback: false,
  };
}