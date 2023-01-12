/* eslint-disable react/jsx-no-comment-textnodes */
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { useScroll, useTransform, motion } from 'framer-motion';
import { Layout } from './../../../components/Layout';
import { Bounded } from "./../../../components/Bounded";
import { GalleryGrid } from "../../../components/GalleryGrid";
// import CarouselContainer from "../components/Carousel";
// import { CTA } from "../components/CTA";
import { Video } from "../../../components/Video";
// import { Faqs } from "../components/Faq/Faqs";
import imageLoader from './../../../imageLoader';

const inter = Inter({ subsets: ['latin'] })

export default function Words() {

    return(

        <Layout>
        <Bounded collapsible={false} as="section" className="px-6 py-20 md:py-32 py-20 md:py-32 bg-white pb-0 md:pb-0">
        <div className="grid grid-cols-1 justify-items-center gap-10 homeAdjust mb-6">
          <div className="max-full text-center leading-relaxed mb-2">
            <h1 className="composedHeading">Hello and int<span style={{ "color": "red"}}>ro</span> text. Only a string here please.</h1>
          </div>
          <div className="max-full text-center leading-relaxed mb-8">
            <p className="font-semibold tracking-tighter">By <a href="#">Ronan O'Leary</a> | Category: Tech, CMS | Published: 02-01-2023 19:15 CET</p>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="w-full mb-2"
        >
          <Video />
            {/* <Image alt={'holding'} src="https://placedog.net/1200/400/r" width={1200} height={500} loader={imageLoader} className="shadow-xl" /> */}
        </motion.div>       
        <div className="py-8 flex flex-col md:flex-row">
         
          <div className="mx-auto w-full max-w-3xl">
            <div className="leading-relaxed">
              <h1 style={{ "lineHeight": "2.5rem", "fontSize": "24px", "display": "flex", "fontWeight": "bold", "textAlign": "justify" }}>Woke master cleanse drinking vinegar</h1>
              <br />
              <p className="article_text text-md leading-8">So park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer. Glossiesr echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.
              </p>
              <br />
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
              >
              <img alt="content" className="object-cover object-center h-full w-full mb-4 shadow-xl" src="https://source.unsplash.com/350x250/?tech" />
              </motion.div>
              <br />
              
              <p className="article_text text-md leading-8">Jerry! I just killed my family! I don’t care who they were! You know who's into dragons, Morty? Nerds who refuse to admit they're Christian. I couldn't hear you over my own screaming. We've talked about this! 5 more minute of this and I'm going to get mad! You know my name, that's disarming. Not today bitch! You look it up, you don't- you don't even know what it means.</p><br />
              <blockquote className="relative p-4 text-xl italic border-l-4 bg-neutral-100 text-neutral-600 border-red-500 quote rounded mb-8">
                <div className="stylistic-quote-mark" aria-hidden="true">
                  &ldquo;
                </div>
                <p className="mb-8 px-6">Oh, we're welllll past that, Jerry! I just killed my family! I don\’t care who they were! You know who's into dragons, Morty? Nerds who refuse to admit they're Christian. I couldn't hear you over my own screaming. We've talked about this! 5 more minute of this and I'm going to get mad! You know my name, that's disarming. Not today bitch! You look it up, you don't- you don't even know what it means.</p>
                <cite className="flex items-center px-6">
                  <img
                    alt="Avatar of Dog"
                    className="w-12 mr-4 rounded-full bg-neutral-500"
                    src="https://placedog.net/75/75"
                  />
                  <div className="flex flex-col items-start px-6">
                    <span className="mb-1 text-sm italic font-bold">Dog</span>
                    <a
                      href="..."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm"
                    >
                      Draft
                    </a>
                  </div>
                </cite>
              </blockquote>
              <p className="article_text text-md leading-8">Listen to your sister Morty; to live is to risk it all; otherwise you're just an inert chunk of randomly assembled molecules drifting wherever the universe blows you. Oh, I'm sorry, Jerry, I didn't see you there, how much of that did you hear? Sorry I didn't listen to you and tried to kill the whole world and stuff. Guess I gotta learn how to live in the moment a little more. Cause he roped me into this! Morty, can you get to the left nipple? You know who's into dragons, Morty? Nerds who refuse to admit they're Christian. I know you're real because i have a ton of bad memories with you. There is no god, in your face! One dot muthafucka! Morty! The principal and I have discussed it, a-a-and we're both insecure enough to agree to a three-way!</p>
            </div>
            <section className="text-gray-600 body-font">
              <div className="container pt-4 pb-12 mx-auto"></div>
            </section>
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
                      <p className="mb-2 mt-2 text-sm font-normal text-gray-500">April 16, 2023</p>
                      <h1 className="mb-2 md:text-xl font-extrabold leading-snug text-gray-800">
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
        </Layout>


    )

}