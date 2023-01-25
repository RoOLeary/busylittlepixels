/* eslint-disable react/jsx-no-comment-textnodes */
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import { motion } from 'framer-motion';
import { Layout } from '../../components/Layout';
import { Bounded } from "../../components/Bounded";
import { Video } from "../../components/Video";
import imageLoader from '../../imageLoader';
import { ParsedUrlQuery } from 'querystring'
import { GetStaticPaths, GetStaticProps } from 'next'

const inter = Inter({ subsets: ['latin'] })

const Article = ({ page, preview }:any) => {
    console.log(page);
    // let bodyContent = Object.entries(article.data.article_body).map((p, i) => {
    //   let idx:number = 1; // console.log(p[1].text)
    //   return p[idx].text
    // });



    return(

        <Layout>
          <Bounded collapsible={false} as="section" className="px-6 py-20 md:py-32 py-20 md:py-32 bg-white pb-0 md:pb-0">
          <div className="grid grid-cols-1 justify-items-center gap-10 homeAdjust mb-6">
            <div className="max-full text-center leading-relaxed mb-2">
              <h1 className="composedHeading">{page.articleTitle ? page.articleTitle : ''}</h1>
            </div>
            <div className="max-full text-center leading-relaxed mb-8">
              <p className="font-semibold tracking-tighter">By <a href="#">Ronan O'Leary</a> | Category: Tech, CMS | Published: </p>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="w-full mb-2"
          >
              <Video />
              {/* <Image alt={'holding'} src={article.data.article_featured_image.url} width={1200} height={500} loader={imageLoader} className="shadow-xl" /> */}
          </motion.div>       
          <div className="py-8 flex flex-col md:flex-row">
          
            <div className="mx-auto w-full max-w-3xl">
                <div className="leading-relaxed">
                  {page.articleExcerpt ? <p className="mb-3 text-sm font-normal text-gray-500 allArticles_excerpt">{page.articleExcerp}</p>: '' }
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


interface IParams extends ParsedUrlQuery {
  slug: string
}

export async function getStaticPaths() {
  
  const res = await fetch('https://craft-ezhk.frb.io/api/articles.json');
  const posts = await res.json()
  // Get the paths we want to pre-render based on posts
  const paths = posts && posts.data.map((post: { slug: any; }) => ({
      params: { slug: post.slug },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: true }
}

export const getStaticProps = async ({ params, preview = false, previewData }:any) => {
  
  // @ts-ignore
  let url = `https://craft-ezhk.frb.io/api/articles/${params.slug}.json`;
  
  const res = await fetch(url)
  const page = await res.json()
  let prevData; 

  if(preview){
      // @ts-ignore
      const prevResponse = await fetch(`https://craft-ezhk.frb.io/api/articles/${params.slug}.json?token=${previewData['token']}`);
      prevData = await prevResponse.json();
      
  } 

  let data = preview ? previewData : page;

  return {
      props: {
          preview: preview ? true : false,
          page: data
      },
      revalidate: 10, // In seconds
    };
}

export default Article; 

