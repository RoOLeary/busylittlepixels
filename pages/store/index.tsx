import Link from 'next/link'
import { Layout } from '../../components/Layout'
import { Bounded } from '../../components/Bounded'
import type { NextPage } from 'next';
import {FormEvent, useState} from "react";

const Store: NextPage = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [result, setResult] = useState('');

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        setResult('Processing...');
        e.preventDefault();

        let form = {
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
        setEmail('')
        setResult('Your Message has sent!')
    }
   
    return(
        <Layout>
            <Bounded collapsible={true} as="section" className="px-6 py-20 bg-white override">

            <h1 className="pb-8 font-black text-4xl md:text-6xl mb-6 last:mb-0 border-b border-gray-200 uppercase">Merch <span className={'rd_txt'}>Store</span></h1> 
            <h3 className="pb-2 font-black text-2xl mb-6 last:mb-0 uppercase">NO. <span className={'rd_txt'}>F@#CKING.</span> WAY!!! YOU LIKE <span className={'rd_txt'}>MERCH</span> TOO??? THAT'S <span className={'rd_txt'}>F@#KING AWESOME!!!</span> YOU OUGHT TO CHECK OUT OUR <span className={'rd_txt'}>STORE!</span> BECOME THE <span className={'rd_txt'}>ENVY OF YOUR FRIENDS</span> WITH SOME GENUINE BUSY<span className={'rd_txt'}>LITTLE</span>PIXELS GOODIES!</h3> 
            <p className="text-lg font-normal text-gray-500">Earlier RPA bots used to have some limitations like it would take structured data for processing from excel, database, on these data. But with advancements in technology like OCR (Optical Character Recognition) and Machine Learning, RPA bots are capable of extracting these data …</p>
            <br />
            <div className="py-6 pb-24 mx-auto">
            <div className="flex flex-wrap -m-4">
                <div className="lg:w-1/4 md:w-1/4 p-2 w-1/2">
                <a className="block relative md:h-48 overflow-hidden">
                    <Link href={'/store/product'}><img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260"/></Link>
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

    </Layout>
    )
}


export default Store
