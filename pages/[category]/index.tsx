/* eslint-disable react/jsx-no-comment-textnodes */
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router';
import { Layout } from '../../components/Layout';
import { Bounded } from "../../components/Bounded";
import { GalleryGrid } from "../../components/GalleryGrid";
// import CarouselContainer from "../components/Carousel";
import { CTA } from "../../components/CallToAction";
// import { Video } from "../components/Video";
// import { Faqs } from "../components/Faq/Faqs";
import imageLoader from '../../imageLoader';

const inter = Inter({ subsets: ['latin'] })

export default function Category() {

    const router = useRouter(); 
    // console.log(router.query.category); 

    return(

        <Layout>
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
        <div className="isolate bg-white">
          <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
            <svg className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]" viewBox="0 0 1155 678" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)" fillOpacity=".3" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
              <defs>
                <linearGradient id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#9089FC"></stop>
                  <stop offset="1" stopColor="#FF80B5"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          
          <main>
            <div className="relative px-6 lg:px-8">
              <div className="mx-auto max-w-3xl pt-20 pb-2 sm:pt-48 md:pb-20">
                <div>
                  {/* <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                    <div className="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                      <span className="text-gray-600">
                        Announcing our next round of funding. <a href="#" className="font-semibold text-indigo-600"><span className="absolute inset-0" aria-hidden="true"></span>Read more <span aria-hidden="true">&rarr;</span></a>
                      </span>
                    </div>
                  </div> */}
                  <div>
                    <h1 className="text-4xl font-black tracking-tightest sm:text-center sm:text-6xl uppercase">Snappy <span style={{ "color": "red"}}>{router.query.category}</span><br />Intro Here</h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
                    {/* <div className="mt-8 flex gap-x-4 sm:justify-center">
                      <a href="#" className="inline-block rounded-lg bg-red-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-red-600 hover:bg-black hover:ring-black">
                        Get started 
                        <span className="text-white-200" aria-hidden="true"> &rarr;</span>
                      </a>
                      
                    </div> */}
                  </div>
                  <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                    <svg className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]" viewBox="0 0 1155 678" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)" fillOpacity=".3" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
                      <defs>
                        <linearGradient id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#9089FC"></stop>
                          <stop offset="1" stopColor="#FF80B5"></stop>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>

        <Bounded collapsible={true} as="section" className="px-6 py-20 md:py-20 bg-white md:override">
        <h1 className="pb-8 font-black text-4xl md:text-6xl mb-6 last:mb-0 border-b border-gray-200 uppercase">LATEST <span style={{ "color": "red"}}>{router.query.category}</span></h1>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mb-8">
              <img src="https://placedog.net/650/450/r" className="object-cover w-full col-span-1 bg-center" alt="Doggo" loading="lazy" />
              <div className="col-span-1">
                <p className="mb-2 -mt-1 text-sm font-normal text-gray-500">April 16, 2023</p>
                <h1 className="mb-2 text-4xl font-extrabold leading-tightest text-gray-800">
                  <Link href={`${router.asPath}/single`} className="duration-300 transition ease-in-out  text-gray-900 hover:text-red-600 uppercase">Process Documents Using Artificial Intelligence For RPA Bots</Link>
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
        <Bounded collapsible={false} as="section" className="bg-slate-100 mt-8">
            <div className="grid grid-cols-1 items-end gap-10 md:grid-cols-1 md:gap-10 lg:gap-28">
            <h1 className='text-center'>[ADVERTISEMENT]</h1>
            </div>
        </Bounded>

        
      <Bounded collapsible={true} as="section" className="px-6 py-20 md:py-32 py-20 md:py-32 bg-white">
      
      
      
      <h2 className="pb-8 mb-12 text-2xl font-black leading-tight text-gray-900 border-b border-gray-200 md:text-4xl uppercase">All <span className={'rd_txt'}>Ar</span>ticles</h2>
      <div className="flex flex-col md:flex-row md:gap-8">
      
        <div className="w-full  flex flex-col space-y-16">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
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
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
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
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
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
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
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
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
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
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
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