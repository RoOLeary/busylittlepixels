/* eslint-disable react/jsx-no-comment-textnodes */
import { Inter } from '@next/font/google'
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import styles from '../styles/Home.module.css'
import { motion, useAnimation } from 'framer-motion';
import { Layout } from '../components/Layout';
import { Advert } from "../components/Advert"
import { CTA } from "../components/CallToAction"
import { TitleContainer } from '../components/TitleContainer';
import PageBlocks from "../components/PageBlocks";
import { GetStaticProps, GetServerSideProps } from 'next'
import { FormEvent, useState } from 'react';

const inter = Inter({ subsets: ['latin'] })
const Home = ({ page, preview }:any) => {

  const control = useAnimation()
  const [ref, inView] = useInView({triggerOnce: false});
 

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
      // @ts-ignore
      const formData = new FormData(e.target);

      const rawResponse = await fetch("https://getform.io/f/2eaf6034-246d-4ab5-8250-c468bffe71fb", {
          method: "POST",
          body: formData,
          headers: {
              "Accept": "application/json",
          },
      })
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
          <div className="relative mx-auto max-w-md px-6 pb-10 sm:mb-8 sm:max-w-3xl lg:px-0">
            <div className="pt-12 sm:pt-16 lg:pt-20">
              <h2 className="text-3xl font-black tracking-tight text-gray-900 sm:text-4xl">Specialising in: <br /> Technical Discovery. <br /><strong>Modern</strong>, scalable, headless web and mobile applications.<br />Digital/Business strategy.</h2>
              <div className="mt-6 space-y-6 text-gray-500">
                <p className="article_text leading-7">We develop modern, headless CMS websites and applications. Leveraging the latest in web technologies, we create performant, reliable and scaleable solutions, with trusted backend architecture.</p>
              </div>
            </div>       
          </div>
      </div>
      
      {/* Contact */}
      <section className="text-black relative" id="contact">
            <div className="absolute inset-0 bg-gray-300">
              <iframe width="100%" height="100%" frameBorder="0" marginHeight={0} marginWidth={0} title="map" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d77979.83662249324!2d4.833920986955999!3d52.35464494712458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c63fb5949a7755%3A0x6600fd4cb7c0af8d!2sAmsterdam!5e0!3m2!1sen!2snl!4v1673131081468!5m2!1sen!2snl" style={{ "filter": "grayscale(1) contrast(1.2) opacity(0.4)" }} ></iframe>
            </div>
            <div className="container px-5 py-24 mx-auto flex">
                <div className="lg:w-1/3 md:w-2/3 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">          
                {result ? result : 
                <>
                <h2 className="text-black text-lg mb-1 font-black uppercase">Contact <span style={{ "color": "red"}}> US</span></h2>
                <p className="leading-relaxed mb-5 text-black">To contact us, please add your email address and message below.</p>
                <form className="py-4 space-y-4" onSubmit={handleSubmit}>
                    <div className="relative mb-4">
                        <label htmlFor="name" className="leading-7 text-sm text-black">Your Name</label>
                        <input type="text" id="name" name="name" value={name} onChange={e => setName(e.target.value)} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-white-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
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
      </section>
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