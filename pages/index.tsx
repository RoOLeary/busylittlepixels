/* eslint-disable react/jsx-no-comment-textnodes */
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

import { Layout } from '../components/Layout';
import { Bounded } from "../components/Bounded";
import { GalleryGrid } from "../components/GalleryGrid";
import CarouselContainer from "../components/Carousel";
import { Faqs } from "../components/Faq/Faqs";
import imageLoader from '../imageLoader';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
     <Layout>
      <Bounded as="section" collapsible={false} className="bg-white pb-0 md:pb-0">
        <div className="grid grid-cols-1 justify-items-center gap-10 homeAdjust">
          <div className="max-w-2xl text-center leading-relaxed">
            <h1 className="font-semibold tracking-tighter text-5xl md:text-[5rem] mb-6 last:mb-0">Hello and int<span style={{ "color": "red"}}>ro</span> text. Only a string here please.</h1>
            <p className="mb-6 last:mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec faucibus metus, non aliquet nisi. Aenean fermentum libero nec volutpat semper. Quisque tellus neque, molestie in magna et, lobortis accumsan nisl. Suspendisse lacinia velit et dolor dictum ornare. Pellentesque justo nulla, fermentum vel ante non, condimentum aliquam justo.<br /><br />Okay, I think I'm starting to grasp it.</p>
          </div>
          <div className="w-full mb-6">
            <Image alt={'holding'} src="https://placedog.net/1200/500/r" width={1200} height={500} loader={imageLoader} layout="responsive" />
          </div>
        </div>
      </Bounded>

      <Bounded collapsible={false} as="section" className="px-6 py-20 md:py-32 py-20 md:py-32 bg-white pb-0 md:pb-0">
        <div className="grid grid-cols-1 justify-items-center gap-10 homeAdjust mb-6">
          <div className="max-full text-center leading-relaxed mb-8">
            <h1 className="font-semibold tracking-tighter text-5xl md:text-[5rem] mb-6 last:mb-0">Hello and int<span style={{ "color": "red"}}>ro</span> text.<br/> Only a string here please.</h1>
          </div>
          <div className="max-full text-center leading-relaxed mb-8">
            <p className="font-semibold tracking-tighter">By <a href="#">Ronan O'Leary</a> | Category: Tech, CMS | Published: 02-01-2023 19:15 CET</p>
          </div>
        </div> 
        <div className="w-full mb-8">
            <Image alt={'holding'} src="https://placedog.net/1200/400/r" width={1200} height={500} loader={imageLoader} layout="responsive" />
        </div>       
        <div className="py-8 flex flex-col md:flex-row">
         
          <div className="mx-auto w-full max-w-3xl">
            <div className="leading-relaxed">
              <h1 style={{ "lineHeight": "2.5rem", "letterSpacing": "1px", "fontSize": "24px", "display": "flex", "fontWeight": "bold", "textAlign": "justify" }}>Woke master cleanse drinking vinegar</h1>
              <br />
              <p style={{ "lineHeight": "2.5rem", "letterSpacing": "1px", "fontSize": "20px", "display": "flex" }}>
                Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer. Glossiesr echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.
              </p>
              <br />
              <img alt="content" className="object-cover object-center h-full w-full pb-4" src="https://source.unsplash.com/350x250/?tech" />
              <br />
              
              <p style={{ "lineHeight": "2.5rem", "letterSpacing": "1px", "fontSize": "20px", "display": "flex" }}>Oh, we're welllll past that, Jerry! I just killed my family! I don’t care who they were! You know who's into dragons, Morty? Nerds who refuse to admit they're Christian. I couldn't hear you over my own screaming. We've talked about this! 5 more minute of this and I'm going to get mad! You know my name, that's disarming. Not today bitch! You look it up, you don't- you don't even know what it means.</p><br />
              <blockquote className="relative p-4 text-xl italic border-l-4 bg-neutral-100 text-neutral-600 border-red-500 quote mb-8">
                <div className="stylistic-quote-mark" aria-hidden="true">
                  &ldquo;
                </div>
                <p className="mb-6 px-6">Oh, we're welllll past that, Jerry! I just killed my family! I don\’t care who they were! You know who's into dragons, Morty? Nerds who refuse to admit they're Christian. I couldn't hear you over my own screaming. We've talked about this! 5 more minute of this and I'm going to get mad! You know my name, that's disarming. Not today bitch! You look it up, you don't- you don't even know what it means.</p>
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
              <p style={{ "lineHeight": "2.5rem", "letterSpacing": "1px", "fontSize": "20px", "display": "flex" }}>Listen to your sister Morty; to live is to risk it all; otherwise you're just an inert chunk of randomly assembled molecules drifting wherever the universe blows you. Oh, I'm sorry, Jerry, I didn't see you there, how much of that did you hear? Sorry I didn't listen to you and tried to kill the whole world and stuff. Guess I gotta learn how to live in the moment a little more. Cause he roped me into this! Morty, can you get to the left nipple? You know who's into dragons, Morty? Nerds who refuse to admit they're Christian. I know you're real because i have a ton of bad memories with you. There is no god, in your face! One dot muthafucka! Morty! The principal and I have discussed it, a-a-and we're both insecure enough to agree to a three-way!</p>
            </div>
            <section className="text-gray-600 body-font">
              <div className="container pt-4 pb-12 mx-auto"></div>
            </section>
          </div>
        </div>
        
      </Bounded>

      <CarouselContainer /> 

      <Bounded collapsible={false} as="section" className="md:px-6 md:pt-8 bg-white pb-8 md:pb-8">
        <Faqs />
      </Bounded>


      {/* <Bounded collapsible={false} as="section" className="bg-slate-100"> */}
      <GalleryGrid />
      {/* </Bounded> */}
      <Bounded collapsible={true} as="section" className="px-6 py-20 md:py-32 py-20 md:py-32 bg-white">
      
      
      
      <h2 className="pb-8 mb-12 text-2xl font-extrabold leading-tight text-gray-900 border-b border-gray-200 md:text-4xl">All <span className={'rd_txt'}>Ar</span>ticles</h2>
      <div className="w-full xl:w-4/6">
       
        <div className="flex flex-col space-y-16">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            <img src="https://placedog.net/175/160/r" className="object-cover w-full h-40 col-span-1 bg-center" alt="Kutty" loading="lazy" />
            <div className="col-span-1 md:col-span-3">
              <p className="mb-2 -mt-1 text-sm font-normal text-gray-500">April 16, 2023</p>
              <h2 className="mb-2 text-xl font-extrabold leading-snug text-gray-800">
                <a href="#" className="text-gray-900 hover:text-red-500">Process Documents Using Artificial Intelligence For RPA Bots</a>
              </h2>
              <p className="mb-3 text-sm font-normal text-gray-500">
                Earlier RPA bots used to have some limitations like it would take structured data for processing from excel, database, on these data. But with advancements in technology like OCR (Optical
                Character Recognition) and Machine Learning, RPA bots are capable of extracting these data …
              </p>
              <a href="#" className="btn btn-light btn-sm">Read More</a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            <img src="https://placedog.net/175/160/r" className="object-cover w-full h-40 col-span-1 bg-center" alt="Kutty" loading="lazy" />
            <div className="col-span-1 md:col-span-3">
              <p className="mb-2 -mt-1 text-sm font-normal text-gray-500">April 16, 2023</p>
              <h2 className="mb-2 text-xl font-extrabold leading-snug text-gray-800">
                <a href="#" className="text-gray-900 hover:text-red-500">Implement Dark Mode in Your Android App</a>
              </h2>
              <p className="mb-3 text-sm font-normal text-gray-500">
                Are you curious to implement the Dark Mode in Android Application? Here’s the perfect guideline to attain the Dark Mode in Android Application. Don’t waste your time; just implement and
                enjoy Dark Mode.
              </p>
              <a href="#" className="btn btn-light btn-sm">Read More</a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            <img src="https://placedog.net/175/160/r" className="object-cover w-full h-40 col-span-1 bg-center" alt="Kutty" loading="lazy" />
            <div className="col-span-1 md:col-span-3">
              <p className="mb-2 -mt-1 text-sm font-normal text-gray-500">April 16, 2023</p>
              <h2 className="mb-2 text-xl font-extrabold leading-snug text-gray-800">
                <a href="#" className="text-gray-900 hover:text-red-500">Why is Mental Health one of the Important Issues to Address?</a>
              </h2>
              <p className="mb-3 text-sm font-normal text-gray-500">
                Mental health was one of the under spoken topics before this lockdown. After sitting at home for about six months I realized that this is one of the important issues to address not only in
                the work sector but also in daily living.
              </p>
              <a href="#" className="btn btn-light btn-sm">Read More</a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            <img src="https://placedog.net/175/160/r" className="object-cover w-full h-40 col-span-1 bg-center" alt="Kutty" loading="lazy" />
            <div className="col-span-1 md:col-span-3">
              <p className="mb-2 -mt-1 text-sm font-normal text-gray-500">April 16, 2023</p>
              <h2 className="mb-2 text-xl font-extrabold leading-snug text-gray-800">
                <a href="#" className="text-gray-900 hover:text-red-500">Pattern Matching In Elixir</a>
              </h2>
              <p className="mb-3 text-sm font-normal text-gray-500">
                Pattern matching is a great way to write idiomatic functional code. It’s a powerful tenant of functional programming that makes it a joy to write conditional statements. If you don’t want
                your code to be peppered with deeply nested statements or multiple variations of similar business logic, use pattern matching!
              </p>
              <a href="#" className="btn btn-light btn-sm">Read More</a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            <img src="https://placedog.net/175/160/r" className="object-cover w-full h-40 col-span-1 bg-center" alt="Kutty" loading="lazy" />
            <div className="col-span-1 md:col-span-3">
              <p className="mb-2 -mt-1 text-sm font-normal text-gray-500">April 16, 2023</p>
              <h2 className="mb-2 text-xl font-extrabold leading-snug text-gray-800">
                <a href="#" className="text-gray-900 hover:text-red-500">3 things you should change during your focus group interview</a>
              </h2>
              <p className="mb-3 text-sm font-normal text-gray-500">We changed three things about our feedback sessions, and it changed everything about running customer feedback sessions.</p>
              <a href="#" className="btn btn-light btn-sm">Read More</a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            <img src="https://placedog.net/175/160/r" className="object-cover w-full h-40 col-span-1 bg-center" alt="Kutty" loading="lazy" />
            <div className="col-span-1 md:col-span-3">
              <p className="mb-2 -mt-1 text-sm font-normal text-gray-500">April 16, 2023</p>
              <h2 className="mb-2 text-xl font-extrabold leading-snug text-gray-800">
                <a href="#" className="text-gray-900 hover:text-red-500">Using Webpack with React Typescript</a>
              </h2>
              <p className="mb-3 text-sm font-normal text-gray-500">
                Ever wondered if there is a way to just tie up all your code into one single module for easy usage. If so, in this article I will show you how to bundle all your code into a single
                javascript module that you can easily use in any other project.
              </p>
              <a href="#" className="btn btn-light btn-sm">Read More</a>
            </div>
          </div>
        </div>
        <div className="pt-10 mt-10 border-t border-gray-200">
          <a href="#" className="w-full btn btn-light btn-lg md:w-auto">Load More</a>
        </div>
        
      </div>
     
      
    </Bounded>
      {/* <Bounded collapsible={false} as="section" className="bg-slate-100">
        <div className="grid grid-cols-1 items-end gap-10 md:grid-cols-2 md:gap-10 lg:gap-28">
          <div className="grid grid-cols-1 gap-8">
            <span style={{ "boxSizing": "border-box", "display": "inline-block", "overflow": "hidden", "width": "128px", "height": "128px", "background": "none", "opacity": 1, "border":0 ,"margin":0, "padding":0 , "position":"relative"}}>
              <Image alt={'folder icon'} src="../assets/img/folder-icon.svg" width={128} height={128} loader={imageLoader}  />
              <noscript>
                <img srcSet="../assets/img/folder-icon.svg" src="../assets/img/folder-icon.svg" decoding="async" data-nimg="fixed" style={{ "position":"absolute", "top":0, "left": 0, "bottom":0, "right": 0, "boxSizing": "border-box", "padding":0, "border": "none", "margin": "auto", "display": "block", "width":0, "height":0, "minWidth": "100%", "maxWidth": "100%", "minHeight": "100%", "maxHeight": "100%" }} loading="lazy" />
              </noscript>
            </span>
            <div className="leading-relaxed">
              <h2 className="font-semibold tracking-tighter text-4xl md:text-6xl mb-4 last:mb-0">Poor Rickless Bastards</h2>
              <p className="mb-7 last:mb-0">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mttis eroas. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non.</p>
            </div>
          </div>
          <ul className="grid gap-10">
            <li className="leading-relaxed">
              <h3 className="font-semibold tracking-tighter text-2xl mb-2 last:mb-0">Never worry about forgetting things again</h3>
              <p className="mb-7 last:mb-0">Let Todoist remember it all for you. You can get tasks out of your head and onto your to-do list anytime, anywhere, on any device – even offline.</p>
            </li>
            <li className="leading-relaxed">
              <h3 className="font-semibold tracking-tighter text-2xl mb-2 last:mb-0">Todoist helps millions of people feel more in control of their lives</h3>
              <p className="mb-7 last:mb-0">Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Morbi in sem quis dui placerat ornare.</p>
            </li>
            <li className="leading-relaxed">
              <h3 className="font-semibold tracking-tighter text-2xl mb-2 last:mb-0">Focus your energy on the right things</h3>
              <p className="mb-7 last:mb-0">Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Morbi in sem quis dui placerat ornare.</p>
            </li>
          </ul>
        </div>
      </Bounded> */}
      <Bounded collapsible={true} as="section" className="px-6 py-20 md:py-32 py-20 md:py-32 bg-white">
      
        <div className="mx-auto w-full max-w-6xl flex flex-row">
          <div className="flex-col text-center w-full mb-20">
            <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">ROOF PARTY POLAROID</h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Master Cleanse Reliac Heirloom</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
          </div>
          
          
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/3">
            <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                  
                </div>
                <h2 className="text-gray-900 text-lg title-font font-medium">Shooting Stars</h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                  
                </a>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                  
                </div>
                <h2 className="text-gray-900 text-lg title-font font-medium">Shooting Stars</h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                  
                </a>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                  
                </div>
                <h2 className="text-gray-900 text-lg title-font font-medium">Shooting Stars</h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                  
                </a>
              </div>
            </div>
          </div>
        </div>
      </Bounded>
      <section data-collapsible="true" className="px-6 py-20 md:py-32 py-20 md:py-32 bg-slate-100">
        <div className="mx-auto w-full max-w-6xl">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-1/3">
              <div className="aspect-w-1 aspect-h-1 bg-slate-200/50"></div>
            </div>
            <span className={"bgImgShelf"}>
              <Image alt={'panel'} src="../assets/img/panel-img.png" width={1200} height={600} loader={imageLoader} unoptimized />
            </span>
            </div>
          </div>
      </section>
      
    </Layout>
    </>
  )
}
