/* eslint-disable react/jsx-no-comment-textnodes */
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

import { PrismicLink, PrismicText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import * as prismicH from "@prismicio/helpers";

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
import imageLoader from '../../imageLoader';

const inter = Inter({ subsets: ['latin'] })

const Articles = ({ articles, preview }:any) => {

    return(

        <Layout>
       
        <Bounded collapsible={true} as="section" className="px-6 py-20 md:py-20 bg-white override">
        <h1 className="pb-8 font-black text-4xl md:text-6xl mb-6 last:mb-0 border-b border-gray-200 uppercase">LATEST<span style={{ "color": "red"}}> ARTICLES</span></h1>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mb-8">
              <img src="https://placedog.net/650/450/r" className="object-cover w-full col-span-1 bg-center" alt="Doggo" loading="lazy" />
              <div className="col-span-1">
                <p className="mb-2 -mt-1 text-sm font-black text-gray-500">April 16, 2023</p>
                <h1 className="mb-2 text-4xl font-extrabold leading-tightest text-gray-800">
                  <Link href="/articles/videos/single" className="duration-300 transition ease-in-out  text-gray-900 hover:text-red-600 uppercase">Process Documents Using Artificial Intelligence For RPA Bots</Link>
                </h1>
                <p className="mb-3 text-sm font-normal text-gray-500 allArticles_excerpt">
                  Earlier RPA bots used to have some limitations like it would take structured data for processing from excel, database, on these data. But with advancements in technology like OCR (Optical
                  Character Recognition) and Machine Learning, RPA bots are capable of extracting these data …
                </p>
                <p className="mb-3 text-sm font-normal text-gray-500 allArticles_excerpt">
                  Earlier RPA bots used to have some limitations like it would take structured data for processing from excel, database, on these data. But with advancements in technology like OCR (Optical
                  Character Recognition) and Machine Learning, RPA bots are capable of extracting these data …
                </p>
                <a href="#" className="hidden md:visible btn btn-light btn-sm">Read More</a>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:gap-2 gap-2 md:grid-cols-2">
              <div className="grid grid-cols-2 sm:gap-2 gap-2 md:grid-cols-2">
                  <div>
                    <img src="https://placedog.net/650/450/r" className="object-cover w-full col-span-1 bg-center" alt="Doggo" loading="lazy" />
                    <div className="col-span-1">
                      <p className="mb-2 mt-2 text-sm font-normal text-gray-500">April 16, 2023</p>
                      <h1 className="mb-2 md:text-xl font-extrabold leading-snug text-gray-800">
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
                      <p className="mb-2 mt-2 text-sm font-normal text-gray-500">April 16, 2023</p>
                      <h1 className="mb-2 md:text-xl font-extrabold leading-snug text-gray-800">
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
                      <p className="mb-2 mt-2 text-sm font-normal text-gray-500">April 16, 2023</p>
                      <h1 className="mb-2 md:text-xl font-extrabold leading-snug text-gray-800">
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
                      <p className="mb-2 mt-2 text-sm font-normal text-gray-500">April 16, 2023</p>
                      <h1 className="mb-2 md:text-xl font-extrabold leading-snug text-gray-800">
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
        <Bounded collapsible={false} as="section" className="bg-slate-100">
            <div className="grid grid-cols-1 items-end gap-10 md:grid-cols-1 md:gap-10 lg:gap-28">
            <h1 className='text-center'>[ADVERTISEMENT]</h1>
            </div>
        </Bounded>

        
      <Bounded collapsible={true} as="section" className="px-6 py-20 md:py-32 py-20 md:py-32 bg-white">
      
      
      
      <h2 className="pb-8 mb-12 text-2xl font-black leading-tight text-gray-900 border-b border-gray-200 md:text-4xl uppercase">All <span className={'rd_txt'}>Articles</span></h2>
      <div className="flex flex-col md:flex-row md:gap-8">
      
        <div className="w-full  flex flex-col space-y-16">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            <img src="https://placedog.net/175/160/r" className="object-cover w-full md:h-40 col-span-1 bg-center" alt="Doggo" loading="lazy" />
            <div className="col-span-1 md:col-span-3">
              <p className="mb-2 -mt-1 text-sm font-normal text-gray-500">April 16, 2023</p>
              <h2 className="mb-2 md:text-2xl font-extrabold leading-snug text-gray-800">
                <a href="#" className="duration-300 transition ease-in-out  text-gray-900 hover:text-red-500">Process Documents Using Artificial Intelligence For RPA Bots</a>
              </h2>
              <p className="mb-3 text-sm font-normal text-gray-500 allArticles_excerpt ">
                Earlier RPA bots used to have some limitations like it would take structured data for processing from excel, database, on these data. But with advancements in technology like OCR (Optical
                Character Recognition) and Machine Learning, RPA bots are capable of extracting these data …
              </p>
              <a href="#" className="hidden md:visible btn btn-light btn-sm">Read More</a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            <img src="https://placedog.net/175/160/r" className="object-cover w-full md:h-40 col-span-1 bg-center" alt="Doggo" loading="lazy" />
            <div className="col-span-1 md:col-span-3">
              <p className="mb-2 mt-2 text-sm font-normal text-gray-500">April 16, 2023</p>
              <h2 className="mb-2 md:text-2xl font-extrabold leading-snug text-gray-800">
                <a href="#" className="text-gray-900 hover:text-red-500">Implement Dark Mode in Your Android App</a>
              </h2>
              <p className="mb-3 text-sm font-normal text-gray-500 allArticles_excerpt">
                Are you curious to implement the Dark Mode in Android Application? Here’s the perfect guideline to attain the Dark Mode in Android Application. Don’t waste your time; just implement and
                enjoy Dark Mode.
              </p>
              <a href="#" className="hidden md:visible btn btn-light btn-sm">Read More</a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            <img src="https://placedog.net/175/160/r" className="object-cover w-full md:h-40 col-span-1 bg-center" alt="Doggo" loading="lazy" />
            <div className="col-span-1 md:col-span-3">
              <p className="mb-2 -mt-1 text-sm font-normal text-gray-500">April 16, 2023</p>
              <h2 className="mb-2 md:text-2xl font-extrabold leading-snug text-gray-800">
                <a href="#" className="text-gray-900 hover:text-red-500">Why is Mental Health one of the Important Issues to Address?</a>
              </h2>
              <p className="mb-3 text-sm font-normal text-gray-500 allArticles_excerpt">
                Mental health was one of the under spoken topics before this lockdown. After sitting at home for about six months I realized that this is one of the important issues to address not only in
                the work sector but also in daily living.
              </p>
              <a href="#" className="hidden md:visible btn btn-light btn-sm">Read More</a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            <img src="https://placedog.net/175/160/r" className="object-cover w-full md:h-40 col-span-1 bg-center" alt="Doggo" loading="lazy" />
            <div className="col-span-1 md:col-span-3">
              <p className="mb-2 mt-2 text-sm font-normal text-gray-500">April 16, 2023</p>
              <h2 className="mb-2 md:text-2xl font-extrabold leading-snug text-gray-800">
                <a href="#" className="text-gray-900 hover:text-red-500">Pattern Matching In Elixir</a>
              </h2>
              <p className="mb-3 text-sm font-normal text-gray-500 allArticles_excerpt">
                Pattern matching is a great way to write idiomatic functional code. It’s a powerful tenant of functional programming that makes it a joy to write conditional statements. If you don’t want
                your code to be peppered with deeply nested statements or multiple variations of similar business logic, use pattern matching!
              </p>
              <a href="#" className="hidden md:visible btn btn-light btn-sm">Read More</a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            <img src="https://placedog.net/175/160/r" className="object-cover w-full md:h-40 col-span-1 bg-center" alt="Doggo" loading="lazy" />
            <div className="col-span-1 md:col-span-3">
              <p className="mb-2 -mt-1 text-sm font-normal text-gray-500">April 16, 2023</p>
              <h2 className="mb-2 md:text-2xl font-extrabold leading-snug text-gray-800">
                <a href="#" className="text-gray-900 hover:text-red-500">3 things you should change during your focus group interview</a>
              </h2>
              <p className="mb-3 text-sm font-normal text-gray-500 allArticles_excerpt">We changed three things about our feedback sessions, and it changed everything about running customer feedback sessions.</p>
              <a href="#" className="hidden md:visible btn btn-light btn-sm">Read More</a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            <img src="https://placedog.net/175/160/r" className="object-cover w-full md:h-40 col-span-1 bg-center" alt="Doggo" loading="lazy" />
            <div className="col-span-1 md:col-span-3">
              <p className="mb-2 -mt-1 text-sm font-normal text-gray-500">April 16, 2023</p>
              <h2 className="mb-2 md:text-2xl font-extrabold leading-snug text-gray-800">
                <a href="#" className="transition ease-in-out text-gray-900 hover:text-red-500">Using Webpack with React Typescript</a>
              </h2>
              <p className="mb-3 text-sm font-normal text-gray-500 allArticles_excerpt">
                Ever wondered if there is a way to just tie up all your code into one single module for easy usage. If so, in this article I will show you how to bundle all your code into a single
                javascript module that you can easily use in any other project.
              </p>
              <a href="#" className="hidden md:visible btn btn-light btn-sm">Read More</a>
            </div>
            <div className="pb-10 lg:mt-10 border-gray-200">
              <a href="#" className="w-full btn btn-red btn-lg md:w-auto">Load More</a>
            </div>
          </div>
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

  const articles = await client.getAllByTag("reviews");
  
  return {
    props: {
      articles

    },
  };
}
