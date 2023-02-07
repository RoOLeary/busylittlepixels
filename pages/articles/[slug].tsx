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

const Article = ({ article, preview }:any) => {
   
    // let splitContent = article.articleContent.split("\n\n");
    
    // console.log(splitContent);

    return(

        <Layout>
          {preview ? <div className={'text-center uppercase bg-red-500 text-white py-6 fixed bottom-0 w-full z-10'}><h3>You are in Preview Mode</h3></div> : null} 
          <Bounded collapsible={false} as="section" className="px-6 py-20 md:py-32 py-20 md:py-32 bg-white pb-0 md:pb-0">
          <div className="grid grid-cols-1 justify-items-center gap-10 homeAdjust mb-6">
            <div className="max-full text-center leading-relaxed mb-2">
              <h1 className="composedHeading">{article ? article.articleTitle : ''}</h1>
            </div>
            {/* <div className="max-full text-center leading-relaxed mb-8">
              <p className="font-semibold tracking-tighter">By <a href="#">Ronan O'Leary</a> | Category: Tech, CMS | Published: </p>
            </div> */}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="w-full mb-2"
          >
          {(article && article.articleType.value == "text") ? <Image alt={article ? article.articleImageAlt : null} src={article ? article.articleImageUrl : null} width={1200} height={500} loader={imageLoader} className="shadow-xl" /> : <Video videoEmbedCode={article ? article.articleVideoEmbed : null} />}
          </motion.div>       
          <div className="py-8 flex flex-col md:flex-row">
            <div className="mx-auto w-full max-w-3xl">
                <div className="leading-relaxed">
                  {article ? <p style={{ "lineHeight": "2.5rem", "fontSize": "20px", "display": "flex", "fontWeight": "bold", "textAlign": "justify" }} className="article_text text-md leading-8">{article.articleExcerpt.replace(/(<p[^>]+?>|<p>|<\/p>)/img, "")}</p>: '' }
                </div>

                <div dangerouslySetInnerHTML={{__html: article ? article.articleContent : null }} className={'article_text mt-8 flex-col'} />
                
            </div>
          </div>
          
          </Bounded>
          {/* <section id="author" aria-labelledby="author-title" className="relative scroll-mt-14 pb-3 pt-8 sm:scroll-mt-32 sm:pb-16 sm:pt-10 lg:pt-16">
            <div className="absolute inset-x-0 bottom-0 top-1/2 text-slate-900/10 [mask-image:linear-gradient(transparent,white)]">
              <svg aria-hidden="true" className="absolute inset-0 h-full w-full">
                <defs>
                  <pattern id=":ra:" width="128" height="128" patternUnits="userSpaceOnUse" x="50%" y="100%">
                    <path d="M0 128V.5H128" fill="none" stroke="currentColor"></path>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#:ra:)"></rect>
              </svg>
            </div>
            <div className="relative mx-auto max-w-5xl pt-16 sm:px-6">
              <div className="bg-slate-50 pt-px sm:rounded-6xl">
                <div className="relative mx-auto -mt-16 h-44 w-44 overflow-hidden rounded-full bg-slate-200 md:float-right md:h-64 md:w-64 md:[shape-outside:circle(40%)] lg:mr-20 lg:h-72 lg:w-72">
                  <img alt="" sizes="(min-width: 1024px) 18rem, (min-width: 768px) 16rem, 11rem" src="/assets/img/ro-bw.jpeg" width="576" height="576" decoding="async" data-nimg="1" className="absolute inset-0 h-full w-full object-cover" loading="lazy" style={{ "color": "transparent"}} />
                </div>
                <div className="px-4 py-10 sm:px-10 sm:py-16 md:py-20 lg:px-20 lg:py-32">
                    
                    <p className="mt-8 font-display text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
                      <span className="block text-red-600">Ro O'Leary –</span> Hey there, I’m the author behind 'Through the Keystroke'.</p>
                      <p className="mt-4 text-lg tracking-tight text-slate-700">I’ve been designing and developing professionally for over a decade and have worked with dozens of the biggest brands to create custom sets for their products. I’ve worked with devel of all skill levels and honed my way of teaching to really click for anyone who has the itch to start designing their own icons.</p>
                      <p className="mt-8">
                        <a className="inline-flex items-center text-base font-medium tracking-tight text-red-600" href="/#">
                          <svg aria-hidden="true" viewBox="0 0 40 40" className="h-10 w-10 fill-current">
                            <path d="M13.817 33.753c12.579 0 19.459-10.422 19.459-19.458 0-.297 0-.592-.02-.884a13.913 13.913 0 0 0 3.411-3.543 13.65 13.65 0 0 1-3.928 1.077 6.864 6.864 0 0 0 3.007-3.784 13.707 13.707 0 0 1-4.342 1.66 6.845 6.845 0 0 0-11.655 6.239A19.417 19.417 0 0 1 5.654 7.915a6.843 6.843 0 0 0 2.117 9.128 6.786 6.786 0 0 1-3.104-.853v.086a6.842 6.842 0 0 0 5.487 6.704 6.825 6.825 0 0 1-3.088.116 6.847 6.847 0 0 0 6.39 4.75A13.721 13.721 0 0 1 3.334 30.68a19.36 19.36 0 0 0 10.483 3.066"></path>
                          </svg>
                          <span className="ml-4">Follow on Twitter</span>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </section> */}
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
  const article = await res.json()
  let prevData; 

  if(preview){
      // @ts-ignore
      const prevResponse = await fetch(`${url}?token=${previewData['token']}`);
      prevData = await prevResponse.json();
      
  } 

  let data = preview ? prevData : article;

  return {
      props: {
          preview: preview ? true : false,
          article: data
      },
      revalidate: 10, // In seconds
    };
}

export default Article; 

