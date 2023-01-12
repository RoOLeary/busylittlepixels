import { SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

import { createClient } from "../prismicio";

import { PrismicRichText } from '@prismicio/react'
/* eslint-disable react/jsx-no-comment-textnodes */
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { motion } from 'framer-motion';
import { Layout } from '../components/Layout';
import { Bounded } from "../components/Bounded";
import { GalleryGrid } from "../components/GalleryGrid";
import CarouselContainer from "../components/Carousel";
import { CTA } from "../components/CallToAction"
import ProjectSlider from "../components/ProjectSlider";
import { Video } from "../components/Video";
import imageLoader from '../imageLoader';
import { TitleContainer } from '../components/TitleContainer';

const inter = Inter({ subsets: ['latin'] })

const Home = ({ homepage, preview }:any) => {

  return (
    <>
     
     <Layout>
     {preview ? <div className={'text-center uppercase bg-red-500 text-white py-6 fixed bottom-0 w-full z-10'}><h3>You are in Preview Mode</h3></div> : null}     
      {/* <Bounded as="section" collapsible={false} className="bg-white pb-0 md:pb-0">
        <div className="grid grid-cols-1 justify-items-center gap-10 homeAdjust">
          <div className="max-w-2xl text-center leading-relaxed">
            <h1 className="font-semibold tracking-tighter text-5xl md:text-[5rem] mb-6 last:mb-0">Hello and int<span style={{ "color": "red"}}>ro</span> text. Only a string here please.</h1>
            <p className="mb-6 last:mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec faucibus metus, non aliquet nisi. Aenean fermentum libero nec volutpat semper. Quisque tellus neque, molestie in magna et, lobortis accumsan nisl. Suspendisse lacinia velit et dolor dictum ornare. Pellentesque justo nulla, fermentum vel ante non, condimentum aliquam justo.<br /><br />Okay, I think I'm starting to grasp it.</p>
          </div>
          <div className="w-full mb-6">
            <Image alt={'holding'} src="https://placedog.net/1200/500/r" width={1200} height={500} loader={imageLoader} />
          </div>
        </div>
      </Bounded> */}
      <TitleContainer />
      <GalleryGrid />
      <ProjectSlider />
      <div className="bg-white">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl uppercase">Technical Expertise</h2>
            <p className="mt-4 text-gray-500">The walnut wood card tray is precision milled to perfectly fit a stack of Focus cards. The powder coated steel divider separates active cards from new ones, or can be used to archive important task lists.</p>

            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Origin</dt>
                <dd className="mt-2 text-sm text-gray-500">Designed by Good Goods, Inc.</dd>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Material</dt>
                <dd className="mt-2 text-sm text-gray-500">Solid walnut base with rare earth magnets and powder coated steel card cover</dd>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Dimensions</dt>
                <dd className="mt-2 text-sm text-gray-500">6.25" x 3.55" x 1.15"</dd>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Finish</dt>
                <dd className="mt-2 text-sm text-gray-500">Hand sanded and finished with natural oil</dd>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Includes</dt>
                <dd className="mt-2 text-sm text-gray-500">Wood card tray and 3 refill packs</dd>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Considerations</dt>
                <dd className="mt-2 text-sm text-gray-500">Made from natural materials. Grain and color vary with each item.</dd>
              </div>
            </dl>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
            <img src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg" alt="Walnut card tray with white powder coated steel divider and 3 punchout holes." className="rounded-lg bg-gray-100" />
            <img src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg" alt="Top down view of walnut card tray with embedded magnets and card groove." className="rounded-lg bg-gray-100"/>
            <img src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg" alt="Side of walnut card tray with card groove and recessed card area." className="rounded-lg bg-gray-100"/>
            <img src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg" alt="Walnut card tray filled with cards and card angled in dedicated groove." className="rounded-lg bg-gray-100"/>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden bg-white">
        <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">BEHOLD!! </h1>
              <p className="mt-4 text-xl text-gray-500">Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>
            </div>
            <div>
              <div className="mt-10">
                
                <div aria-hidden="true" className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <img src="https://placedog.net/200/375/r" alt="" className="h-full w-full object-cover object-center" />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg" alt="" className="h-full w-full object-cover object-center" />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg" alt="" className="h-full w-full object-cover object-center" />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img src="https://placedog.net/352/512/r" alt="" className="h-full w-full object-cover object-center" />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg" alt="" className="h-full w-full object-cover object-center" />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg" alt="" className="h-full w-full object-cover object-center" />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg" alt="" className="h-full w-full object-cover object-center" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <a href="#" className="inline-block rounded-md border border-transparent bg-red-600 py-3 px-8 text-center font-medium text-white hover:bg-black">Shop Collection</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Bounded collapsible={false} as="section" className="px-6 py-20 md:py-32 py-20 md:py-32 bg-white pb-0 md:pb-0">
        <div className="grid grid-cols-1 justify-items-center gap-10 homeAdjust mb-6">
          <div className="max-full text-center leading-relaxed mb-2">
            <h1 className="font-black tracking-tighter text-5xl md:text-[5rem] mb-6 last:mb-0 uppercase">Hello and int<span style={{ "color": "red"}}>ro</span> text. Only a string here please.</h1>
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
            <Image alt={'holding'} src="https://placedog.net/1200/400/r" width={1200} height={500} loader={imageLoader} className="shadow-xl" />
        </motion.div>       
        <div className="py-8 flex flex-col md:flex-row">
         
          <div className="mx-auto w-full max-w-3xl">
            <div className="leading-relaxed">
              <h1 style={{ "lineHeight": "2.5rem", "fontSize": "24px", "display": "flex", "fontWeight": "bold", "textAlign": "justify" }}>Woke master cleanse drinking vinegar</h1>
              <br />
              <p className="article_text text-md leading-8">So park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer. Glossiesr echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.
              </p>
              <br />
              <img alt="content" className="object-cover object-center h-full w-full mb-4 shadow-xl" src="https://source.unsplash.com/350x250/?tech" />
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

      {/* <Bounded collapsible={false} as="section" className="bg-slate-100"> */}
      {/* <GalleryGrid /> */}
      <CarouselContainer /> 
      {/* </Bounded> */}
      <Bounded collapsible={true} as="section" className="px-6 py-20 md:py-32 py-20 md:py-32 bg-white">
        <h2 className="pb-8 mb-12 text-2xl font-black leading-tight text-gray-900 border-b border-gray-200 md:text-4xl uppercase">Featured <span className={'rd_txt'}>Ar</span>ticles</h2>
        
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mb-8">
              <img src="https://placedog.net/650/450/r" className="object-cover w-full col-span-1 bg-center" alt="Doggo" loading="lazy" />
              <div className="col-span-1">
                <p className="mb-2 -mt-1 text-sm font-normal text-gray-500">April 16, 2023</p>
                <h1 className="mb-2 text-4xl font-extrabold leading-tightest text-gray-800">
                  <a href="#" className="duration-300 transition ease-in-out  text-gray-900 hover:text-red-500 uppercase">Process Documents Using Artificial Intelligence For RPA Bots</a>
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
      
      
      
      <h2 className="pb-8 mb-12 text-2xl font-black leading-tight text-gray-900 border-b border-gray-200 md:text-4xl uppercase">All <span className={'rd_txt'}>Ar</span>ticles</h2>
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
      <Bounded collapsible={true} as="section" className="px-6 py-20 md:py-32 py-20 md:py-32 bg-white">

        <h2 className="pb-8 mb-12 text-2xl font-black leading-tight text-gray-900 border-b border-gray-200 md:text-4xl uppercase">St<span className={'rd_txt'}>or</span>e</h2> 
        <div className="pb-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/4 md:w-1/4 p-2 w-1/2">
              <a className="block relative md:h-48 overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260"/>
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">T-Shirt</h2>
                <p className="mt-1">€16.00</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/4 p-2 w-1/2">
              <a className="block relative md:h-48 overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/421x261" />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Coffee Mug</h2>
                <p className="mt-1">€21.15</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/4 p-2 w-1/2">
              <a className="block relative md:h-48 overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/422x262" />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Hats</h2>
                <p className="mt-1">€12.00</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/4 p-2 w-1/2">
              <a className="block relative md:h-48 overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/423x263" />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Accessories</h2>
                <p className="mt-1">€18.40</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/4 p-2 w-1/2">
              <a className="block relative md:h-48 overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/424x264" />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Hoodies</h2>
                <p className="mt-1">€16.00</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/4 p-2 w-1/2">
              <a className="block relative md:h-48 overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/425x265" />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Hoodies</h2>
                <p className="mt-1">€21.15</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/4 p-2 w-1/2">
              <a className="block relative md:h-48 overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/427x267" />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Neptune</h2>
                <p className="mt-1">€12.00</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-2 w-1/2">
              <a className="block relative md:h-48 overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/428x268" />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
                <p className="mt-1">€18.40</p>
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

     
      
    </Layout>
    </>
  )
}

export default Home;

export async function getStaticProps({ preview = false, previewData }:any) {
  const client = createClient({ previewData });

  const homepage = await client.getSingle("home");
  
  return {
    props: {
      homepage,
      preview
    },
  };
}
