import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

import { Layout } from '../components/Layout';
import { Bounded } from "../components/Bounded";
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

      <Bounded collapsible={false} as="section" className="bg-slate-100">
        <div className="grid grid-cols-1 items-end gap-10 md:grid-cols-2 md:gap-10 lg:gap-28">
          <div className="grid grid-cols-1 gap-8">
            <span style={{ "boxSizing": "border-box", "display": "inline-block", "overflow": "hidden", "width": "128px", "height": "128px", "background": "none", "opacity": 1, "border":0 ,"margin":0, "padding":0 , "position":"relative"}}>
              <Image alt={'folder icon'} src="../assets/img/folder-icon.svg" width={128} height={128} loader={imageLoader}  />
              <noscript>
                <img srcSet="../assets/img/folder-icon.svg" src="../assets/img/folder-icon.svg" decoding="async" data-nimg="fixed" style={{ "position":"absolute", "top":0, "left": 0, "bottom":0, "right": 0, "boxSizing": "border-box", "padding":0, "border": "none", "margin": "auto", "display": "block", "width":0, "height":0, "minWidth": "100%", "maxWidth": "100%", "minHeight": "100%", "maxHeight": "100%" }} loading="lazy" />
              </noscript>
            </span>
            <div className="leading-relaxed">
              <h2 className="font-semibold tracking-tighter text-4xl md:text-6xl mb-4 last:mb-0">More than consulting</h2>
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
      </Bounded>
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
