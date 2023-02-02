/* eslint-disable react/jsx-no-comment-textnodes */
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { motion } from 'framer-motion';
import { Layout } from '../components/Layout';
import { Advert } from "../components/Advert"
import { CTA } from "../components/CallToAction"
import { TitleContainer } from '../components/TitleContainer';
import PageBlocks from "../components/PageBlocks";
import { GetStaticProps, GetServerSideProps } from 'next'
import { FormEvent, useState } from 'react';

const inter = Inter({ subsets: ['latin'] })
const Home = ({ page, preview }:any) => {

  let title = page ? page.data[0].homeTitle : null;
  let subtitle = page ? page.data[0].homeSubTitle : null;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
      setResult('Processing...');
      e.preventDefault();

      let form = {
          name, 
          email,
          message
      }

      const rawResponse = await fetch('/api/submit', {
          method: 'POST',
          headers: {
              'Access-Control-Allow-Origin': '*',
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(form)
      });
      const content = await rawResponse.json();
      // print to screen
      // console.log(content.data.tableRange)
      // Reset the form fields
      setMessage('')
      setName('')
      setEmail('')
      setResult('Your Message has sent!')
  }

  const scrollToSection = (id:any) => {
    window.scrollTo({
        // @ts-ignore
      top: document.getElementById(id).offsetTop - 60,
      behavior: 'smooth',
    });
  };

  const onScrollClick = (e:any) => {
    e.preventDefault();
    const goto = e.currentTarget.getAttribute('scrollto');
    setTimeout(() => {
        scrollToSection(goto);
    }, 100);
  }

  return (
    <>
     
     <Layout>
      {preview ? <div className={'text-center uppercase bg-red-500 text-white py-6 fixed bottom-0 w-full z-10'}><h3>You are in Preview Mode</h3></div> : null}     
      <TitleContainer title={title} subtitle={subtitle} />
      <PageBlocks content={page['data'][0]['pageBlocks']} />
      <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8 mt-8">
          <div className="relative sm:py-16 lg:py-0">
            <div aria-hidden="true" className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
              <div className="absolute inset-y-0 right-1/2 w-full rounded-r-3xl bg-gray-50 lg:right-72"></div>
              <svg className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12" width="404" height="392" fill="none" viewBox="0 0 404 392">
                <defs>
                  <pattern id="02f20b47-fd69-4224-a62a-4c9de5c763f7" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor"></rect>
                  </pattern>
                </defs>
                <rect width="404" height="392" fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"></rect>
              </svg>
            </div>
            <div className="relative mx-auto max-w-md px-6 sm:max-w-3xl lg:max-w-none lg:px-0 lg:py-20">
              
              <div className="relative overflow-hidden rounded-2xl pt-64 pb-10 shadow-xl">
                <img className="absolute inset-0 h-full w-full object-cover" src="/assets/img/doggo.jpeg" alt="" />
                <div className="absolute inset-0 bg-red-500 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-red-600 via-red-600 opacity-90"></div>
                <div className="relative px-8">
                  
                  <blockquote className="mt-8">
                    <div className="relative text-lg font-medium text-white md:flex-grow">
                      <svg className="absolute top-0 left-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-red-600" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"></path>
                      </svg>
                      <p className="relative">Tincidunt integer commodo, cursus etiam aliquam neque, et. Consectetur pretium in volutpat, diam. Montes, magna cursus nulla feugiat dignissim id lobortis amet.</p>
                    </div>

                    <footer className="mt-4">
                      <p className="text-base font-semibold text-rose-200">Doggo, CEO at Doggo</p>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="relative mx-auto max-w-md px-6 sm:max-w-3xl lg:px-0">
           
            <div className="pt-12 sm:pt-16 lg:pt-20">
              <h2 className="text-3xl font-black tracking-tight text-gray-900 sm:text-4xl">Specialising in Technical Discovery, Digital and eCommerce strategy and <strong>modern</strong>, scalable web development.</h2>
              <div className="mt-6 space-y-6 text-gray-500">
                <p className="text-base leading-7">We develop modern, headless CMS websites and applications. Leveraging the latest in web technologies, we create performant, reliable and scaleable solutions, with trusted backend architecture.</p>
              </div>
            </div>

            
            {/* <div className="mt-10">
              <dl className="grid grid-cols-2 gap-x-4 gap-y-8">
                
                  <div className="border-t-2 border-gray-100 pt-6">
                    <dt className="text-base font-medium text-gray-500">Founded</dt>
                    <dd className="text-3xl font-bold tracking-tight text-gray-900">2021</dd>
                  </div>
                
                  <div className="border-t-2 border-gray-100 pt-6">
                    <dt className="text-base font-medium text-gray-500">Employees</dt>
                    <dd className="text-3xl font-bold tracking-tight text-gray-900">5</dd>
                  </div>
                
              </dl>
            </div> */}
          </div>
        </div>
      <CTA />
      {/* <div className="relative isolate overflow-hidden bg-black">
        <div className="py-24 px-6 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-center font-black tracking-tighter text-4xl md:text-6xl mb-4 text-white last:mb-0 uppercase">SIGN UP FOR OUR <br />BUSYLITTLEUPDATES</h2>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="#" className="rounded-md bg-red-500 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Get started</a>
            </div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" className="absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2" aria-hidden="true">
          <circle cx="512" cy="512" r="512" fill="url(#8d958450-c69f-4251-94bc-4e091a323369)" fillOpacity="0.7" />
          <defs>
            <radialGradient id="8d958450-c69f-4251-94bc-4e091a323369" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(512 512) rotate(90) scale(512)">
              <stop stop-color="#F00"></stop>
              <stop offset="1" stop-color="#f00" stop-opacity="0"></stop>
            </radialGradient>
          </defs>
        </svg>
      </div>
          
      <div className="relative bg-gray-900">
        <div className="relative h-80 overflow-hidden bg-red-600 md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
          <img className="h-full w-full object-cover" src="https://ronan-oleary.com/wp-content/uploads/2021/09/ro-flip2.jpg" alt="" />
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 926 676" aria-hidden="true" className="absolute left-24 -bottom-24 w-[57.875rem] transform-gpu blur-[118px]">
            <path fill="url(#60c3c621-93e0-4a09-a0e6-4c228a0116d8)" fillOpacity=".4" d="m254.325 516.708-90.89 158.331L0 436.427l254.325 80.281 163.691-285.15c1.048 131.759 36.144 345.144 168.149 144.613C751.171 125.508 707.17-93.823 826.603 41.15c95.546 107.978 104.766 294.048 97.432 373.585L685.481 297.694l16.974 360.474-448.13-141.46Z" />
            <defs>
              <linearGradient id="60c3c621-93e0-4a09-a0e6-4c228a0116d8" x1="926.392" x2="-109.635" y1=".176" y2="321.024" gradientUnits="userSpaceOnUse">
                <stop stop-color="#ffffff"></stop>
                <stop offset="1" stop-color="#f00"></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:py-40 lg:px-8">
          <div className="pr-6 pl-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
            <h2 className="text-base font-bold leading-7 text-red-500">Expertise and Dedication</h2>
            <p className="mt-2 text-4xl font-extrabold tracking-tight text-white">We’re here to help you succeed</p>
            <p className="mt-6 text-base leading-7 text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat quisque ut interdum tincidunt duis.</p>
            <div className="mt-8">
              <a href="#contact" className="inline-block rounded-md bg-red-600 px-4 py-1.5 text-base font-bold leading-7 text-white shadow-sm ring-1 ring-red-600 hover:bg-red-400 hover:ring-red-400" data-scrollto="contact" scrollto="contact" onClick={onScrollClick}>Tell me more</a>
               
            </div>
          </div>
        </div>
      </div> */}

        {/* <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8">
            <div className="relative sm:py-16 lg:py-0">
              <div aria-hidden="true" className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
                <div className="absolute inset-y-0 right-1/2 w-full rounded-r-3xl bg-gray-50 lg:right-72"></div>
                <svg className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12" width="404" height="392" fill="none" viewBox="0 0 404 392">
                  <defs>
                    <pattern id="02f20b47-fd69-4224-a62a-4c9de5c763f7" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                      <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor"></rect>
                    </pattern>
                  </defs>
                  <rect width="404" height="392" fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"></rect>
                </svg>
              </div>
              <div className="relative mx-auto max-w-md px-6 sm:max-w-3xl lg:max-w-none lg:px-0 lg:py-20">
                
                <div className="relative overflow-hidden rounded-2xl pt-64 pb-10 shadow-xl">
                  <img className="absolute inset-0 h-full w-full object-cover" src="/assets/img/doggo.jpeg" alt="" />
                  <div className="absolute inset-0 bg-rose-500 mix-blend-multiply"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-rose-600 via-rose-600 opacity-90"></div>
                  <div className="relative px-8">
                    
                    <blockquote className="mt-8">
                      <div className="relative text-lg font-medium text-white md:flex-grow">
                        <svg className="absolute top-0 left-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-rose-400" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"></path>
                        </svg>
                        <p className="relative">Tincidunt integer commodo, cursus etiam aliquam neque, et. Consectetur pretium in volutpat, diam. Montes, magna cursus nulla feugiat dignissim id lobortis amet.</p>
                      </div>

                      <footer className="mt-4">
                        <p className="text-base font-semibold text-rose-200">Doggo, CEO at Doggo</p>
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative mx-auto max-w-md px-6 sm:max-w-3xl lg:px-0">
            
              <div className="pt-12 sm:pt-16 lg:pt-20">
                <h2 className="text-3xl font-black tracking-tight text-gray-900 sm:text-4xl">Specialising in Technical Discovery, Digital and eCommerce strategy and <strong>modern</strong>, scalable web development.</h2>
                <div className="mt-6 space-y-6 text-gray-500">
                  <p className="text-base leading-7">We develop modern, headless CMS websites and applications. Leveraging the latest in web technologies, we create performant, reliable and scaleable solutions, with trusted backend architecture.</p>
                </div>
              </div>

              
              <div className="mt-10">
                <dl className="grid grid-cols-2 gap-x-4 gap-y-8">
                  
                    <div className="border-t-2 border-gray-100 pt-6">
                      <dt className="text-base font-medium text-gray-500">Founded</dt>
                      <dd className="text-3xl font-bold tracking-tight text-gray-900">2021</dd>
                    </div>
                  
                    <div className="border-t-2 border-gray-100 pt-6">
                      <dt className="text-base font-medium text-gray-500">Employees</dt>
                      <dd className="text-3xl font-bold tracking-tight text-gray-900">5</dd>
                    </div>
                  
                </dl>
              </div>
            </div>
        </div> */}
      
        {/* <section className="relative bg-white py-20" aria-labelledby="join-heading">
          <div className="absolute inset-x-0 hidden h-1/2 bg-blue-gray-50 lg:block" aria-hidden="true"></div>
            <div className="mx-auto max-w-7xl bg-red-600 lg:bg-transparent lg:px-8">
              <div className="lg:grid lg:grid-cols-12">
                <div className="relative z-10 lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:bg-transparent lg:py-16">
                  <div className="absolute inset-x-0 h-1/2 bg-blue-gray-50 lg:hidden" aria-hidden="true"></div>
                  <div className="mx-auto max-w-md px-6 sm:max-w-3xl lg:max-w-none lg:p-0">
                    <div className="aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1">
                      <img className="rounded-3xl object-cover object-center shadow-2xl" src="/assets/img/doggo.jpeg" alt="" />
                    </div>
                  </div>
                </div>

                <div className="relative bg-red-600 lg:col-span-10 lg:col-start-3 lg:row-start-1 lg:grid lg:grid-cols-10 lg:items-center lg:rounded-3xl">
                  <div className="absolute inset-0 hidden overflow-hidden rounded-3xl lg:block" aria-hidden="true">
                    <svg className="absolute bottom-full left-full translate-y-1/3 -translate-x-2/3 transform xl:bottom-auto xl:top-0 xl:translate-y-0" width="404" height="384" fill="none" viewBox="0 0 404 384" aria-hidden="true">
                      <defs>
                        <pattern id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                          <rect x="0" y="0" width="4" height="4" className="text-red-500" fill="currentColor"></rect>
                        </pattern>
                      </defs>
                      <rect width="404" height="384" fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"></rect>
                    </svg>
                    <svg className="absolute top-full -translate-y-1/3 -translate-x-1/3 transform xl:-translate-y-1/2" width="404" height="384" fill="none" viewBox="0 0 404 384" aria-hidden="true">
                      <defs>
                        <pattern id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                          <rect x="0" y="0" width="4" height="4" className="text-red-500" fill="currentColor"></rect>
                        </pattern>
                      </defs>
                      <rect width="404" height="384" fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"></rect>
                    </svg>
                  </div>
                  <div className="relative mx-auto max-w-md space-y-6 py-12 px-6 sm:max-w-3xl sm:py-16 lg:col-span-6 lg:col-start-4 lg:max-w-none lg:p-0">
                    <h2 className="text-3xl font-bold tracking-tight text-white" id="join-heading">Join our team</h2>
                    <p className="text-lg text-white">Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.</p>
                    <a className="block w-full rounded-md border border-transparent bg-white py-3 px-5 text-center text-base font-medium text-red-500 shadow-md hover:bg-blue-gray-50 sm:inline-block sm:w-auto" href="#">Explore open positions</a>
                  </div>
                </div>
              </div>
          </div>
        </section> */}
       
        {/* <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <div>
              <h2 className="text-lg font-black leading-8 tracking-tight text-red-600">Engineering Modernity</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Elastic Web Solutions & Strategy</p>
            </div>
            <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:gap-y-16">
              <div className="relative pl-9">
                <dt className="font-semibold text-gray-900">
                  
                  <svg className="absolute top-1 left-0 h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                  </svg>
                  Multiple-CMS Platform knowledge/experience
                </dt>
                <dd className="mt-2">Rerum repellat labore necessitatibus reprehenderit molestiae praesentium.</dd>
              </div>

              <div className="relative pl-9">
                <dt className="font-semibold text-gray-900">
                  
                  <svg className="absolute top-1 left-0 h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                  </svg>
                  List view
                </dt>
                <dd className="mt-2">Corporis asperiores ea nulla temporibus asperiores non tempore assumenda aut.</dd>
              </div>

              <div className="relative pl-9">
                <dt className="font-semibold text-gray-900">
                  
                  <svg className="absolute top-1 left-0 h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                  </svg>
                  Keyboard shortcuts
                </dt>
                <dd className="mt-2">In sit qui aliquid deleniti et. Ad nobis sunt omnis. Quo sapiente dicta laboriosam.</dd>
              </div>

              <div className="relative pl-9">
                <dt className="font-semibold text-gray-900">
                  
                  <svg className="absolute top-1 left-0 h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                  </svg>
                  Calendars
                </dt>
                <dd className="mt-2">Sed rerum sunt dignissimos ullam. Iusto iure occaecati voluptate eligendi fugiat sequi.</dd>
              </div>

              <div className="relative pl-9">
                <dt className="font-semibold text-gray-900">
                  
                  <svg className="absolute top-1 left-0 h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                  </svg>
                  Notifications
                </dt>
                <dd className="mt-2">Quos inventore harum enim nesciunt. Aut repellat rerum omnis adipisci.</dd>
              </div>

              <div className="relative pl-9">
                <dt className="font-semibold text-gray-900">
                  
                  <svg className="absolute top-1 left-0 h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                  </svg>
                  Boards
                </dt>
                <dd className="mt-2">Quae sit sunt excepturi fugit veniam voluptatem ipsum commodi.</dd>
              </div>

              <div className="relative pl-9">
                <dt className="font-semibold text-gray-900">
                  
                  <svg className="absolute top-1 left-0 h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                  </svg>
                  Reporting
                </dt>
                <dd className="mt-2">Eos laudantium repellat sed architecto earum unde incidunt. Illum sit dolores voluptatem.</dd>
              </div>

              <div className="relative pl-9">
                <dt className="font-semibold text-gray-900">
                  <svg className="absolute top-1 left-0 h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                  </svg>
                  Mobile app
                </dt>
                <dd className="mt-2">Nulla est saepe accusamus nostrum est est. Fugit voluptatum omnis quidem voluptatem.</dd>
              </div>
            </dl>
          </div>
        </div>
      </div> */}
      <div className="text-black relative" id="contact">
            <div className="absolute inset-0 bg-gray-300">
                    <iframe width="100%" height="100%" frameBorder="0" marginHeight={0} marginWidth={0} title="map" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d77979.83662249324!2d4.833920986955999!3d52.35464494712458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c63fb5949a7755%3A0x6600fd4cb7c0af8d!2sAmsterdam!5e0!3m2!1sen!2snl!4v1673131081468!5m2!1sen!2snl" style={{ "filter": "grayscale(1) contrast(1.2) opacity(0.4)" }} ></iframe>
                </div>
                <div className="container px-5 py-24 mx-auto flex">
                    <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
                    
                    {result ? result : 
                    <>
                    <h2 className="text-black text-lg mb-1 font-black uppercase">Contact <span style={{ "color": "red"}}> US</span></h2>
                    <p className="leading-relaxed mb-5 text-black">To contact us, please add your email address and message below.</p>
                    <form className="py-4 space-y-4" onSubmit={handleSubmit}>
                        <div className="relative mb-4">
                            <label htmlFor="name" className="leading-7 text-sm text-black">Your Name</label>
                            <input type="text" id="name" name="name" value={email} onChange={e => setName(e.target.value)} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-white-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="email" className="leading-7 text-sm text-black">Email</label>
                            <input type="email" id="email" name="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-white-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="message" className="leading-7 text-sm text-black">Message</label>
                            <textarea value={message} onChange={e => setMessage(e.target.value)} id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-white-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" required></textarea>
                        </div>
                        <button className="w-full btn btn-red btn-lg md:w-auto">SUBMIT</button>
                        <p className="text-xs text-white-500 mt-3">We will not pass your data to third parties.</p>
                    </form>
                    </>
                    }
                </div>
            </div>
        </div>
        

    </Layout>
    </>
  )
}

export default Home;

export const getStaticProps = async ({ preview = false, previewData }:any) => {
  
  let url = `https://craft-ezhk.frb.io/api/homepage.json`;
  
  const res = await fetch(url)
  const homepage = await res.json()
  let prevData;

  if(preview){
      const prevResponse = await fetch(`${url}?token=${previewData['token']}`);
      prevData = await prevResponse.json(); 
  } 

  let data = preview ? prevData : homepage;

  return {
      props: {
          preview: preview ? true : false,
          page: data
      },
      revalidate: 30
    };
}