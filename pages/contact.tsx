import { Layout } from '../components/Layout'
import { Bounded } from '../components/Bounded'
import { Faqs } from '../components/Faq/Faqs'
import type { NextPage } from 'next';
import {FormEvent, useState} from "react";


const Contact: NextPage = ({ page, preview }:any) => {

    console.log(page.data[0].contactFaqs);
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


        const content = await rawResponse.json();
       
        setMessage('')
        setName('')
        setEmail('')
        setResult('Your Message has been sent!')
    }
   
    return(
        <Layout>
           {/* / We're a team of enthusiastic and well rounded experts, technologist, developers, strategists, team-builders and futurists. Founded by former CTO of The Next Web, Ronan O'Leary, and current CTO of X, Paddy Ryan; Busy Little Pixels is more than a Digital Development and [] company. We have the experience and know how to steer your digital fortunes to the horizon. */}
            
            <Bounded collapsible={true} as="section" className="override">
                <h1 className="pb-8 font-black text-4xl md:text-6xl mb-6 last:mb-0 border-b border-gray-200 uppercase">WE <span style={{ "color": "red"}}>heart</span> HEARING FROM <span style={{ "color": "red"}}>YOU</span></h1>
                <p className="contact_intro">We're always happy to hear from you - feedback, comments, questions or the odd SOS. That's our game! That's what we do!</p>
                <p className="contact_intro">Below is a list of our most frequently asked questions, please check to see if we've already mentioned your query here, or feel free to get in contact anyway.</p>
            </Bounded>
            <Bounded collapsible={true} as="section" className="override">
                <Faqs items={page.data[0].contactFaqs} />
            </Bounded>
            <br />
            <div className="text-black mt-2 body-font relative">
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
        </div>
        
   
    

    
    {/* <section aria-labelledby="offices-heading">
      <div className="mx-auto max-w-7xl py-24 px-6 sm:py-32 lg:px-8">
        <h2 id="offices-heading" className="text-3xl font-bold tracking-tight text-warm-gray-900">Our offices</h2>
        <p className="mt-6 max-w-3xl text-lg text-warm-gray-500">Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.</p>
        <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-medium text-warm-gray-900">Los Angeles</h3>
            <p className="mt-2 text-base text-warm-gray-500">
              <span className="block">4556 Brendan Ferry</span>

              <span className="block">Los Angeles, CA 90210</span>
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium text-warm-gray-900">New York</h3>
            <p className="mt-2 text-base text-warm-gray-500">
              <span className="block">886 Walter Streets</span>

              <span className="block">New York, NY 12345</span>
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium text-warm-gray-900">Toronto</h3>
            <p className="mt-2 text-base text-warm-gray-500">
              <span className="block">7363 Cynthia Pass</span>

              <span className="block">Toronto, ON N3Y 4H8</span>
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium text-warm-gray-900">London</h3>
            <p className="mt-2 text-base text-warm-gray-500">
              <span className="block">114 Cobble Lane</span>

              <span className="block">London N1 2EF</span>
            </p>
          </div>
        </div>
      </div>
    </section> */}
    </Layout>
    )
}

export default Contact;


export const getStaticProps = async ({ preview = false, previewData }:any) => {
  
    let url = `https://craft-ezhk.frb.io/api/contact.json`;
    
    const res = await fetch(url)
    const contact = await res.json()
    let prevData;
  
    if(preview){
        const prevResponse = await fetch(`${url}?token=${previewData['token']}`);
        prevData = await prevResponse.json(); 
    } 
  
    let data = preview ? prevData : contact;
  
    return {
        props: {
            preview: preview ? true : false,
            page: data
        },
        revalidate: 30
      };
}