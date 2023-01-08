import { useState } from 'react'
import { Layout } from '../../components/Layout'
import { Bounded } from '../../components/Bounded'
import { Tabs } from '../../components/Tabs'
import type { NextPage } from 'next';




const Product: NextPage = () => {
    
    const [activeTab, setActiveTab] = useState(1);

    return(
        <Layout>
        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                    <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
                    <h1 className="text-gray-900 text-3xl title-font font-black mb-4 uppercase">SHAMELESS PLUG TSHIRT</h1>
                    
                    <div className="flex mb-4">
                        <a className={`flex-grow border-b-2 ${activeTab == 1 ? ` active border-red-500 text-red-500` : `border-gray-300`} hover:border-red-500 hover:text-red-500 py-2 text-lg px-1 cursor-pointer`} 
                            onClick={() => setActiveTab(1)}>Description</a>
                        <a className={`flex-grow border-b-2 ${activeTab == 2 ?` active border-red-500 text-red-500` : `border-gray-300`} hover:border-red-500 hover:text-red-500 py-2 text-lg px-1 cursor-pointer`}  onClick={() => setActiveTab(2)}>Reviews</a>
                        <a className={`flex-grow border-b-2 ${activeTab == 3 ? ` active border-red-500 text-red-500` : `border-gray-300`} hover:border-red-500 hover:text-red-500 py-2 text-lg px-1 cursor-pointer`}  onClick={() => setActiveTab(3)}>Details</a>
                    </div>
                    <div className="tab-content" id="tabs-tabContent">
                        <div className={`tab-pane fade ${activeTab == 1 ? `show active` : ``}`}>
                            <p className="leading-relaxed mb-4">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam inxigo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean.</p>
                            <div className="flex border-t border-gray-200 py-2">
                                <span className="text-gray-500">Color</span>
                                <span className="ml-auto text-gray-900">Blue</span>
                            </div>
                            <div className="flex border-t border-gray-200 py-2">
                                <span className="text-gray-500">Size</span>
                                <span className="ml-auto text-gray-900">Medium</span>
                            </div>
                            <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                                <span className="text-gray-500">Quantity</span>
                                <span className="ml-auto text-gray-900">4</span>
                            </div>
                            
                        </div>
                        <div className={`tab-pane fade ${activeTab == 2 ? `show active` : ``}`}>
                            <p className="leading-relaxed mb-4">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam inxigo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean.</p>
                        </div>
                        <div className={`tab-pane fade ${activeTab == 3 ? `show active` : ``}`}>
                            <p className="leading-relaxed mb-4">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam inxigo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean.</p>
                            <p className="leading-relaxed mb-4">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam inxigo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean.</p>
                        </div>
                        <div className="flex">
                                <span className="title-font font-medium text-2xl text-gray-900">€58.00</span>
                                <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-black rounded">Button</button>
                                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                    </svg>
                                </button>
                            </div>
                    </div>
                </div>
                <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400" />
                </div>
            </div>
            
        </section>
    </Layout>
    ); 

}

export default Product; 