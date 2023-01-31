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
           
            <div className="bg-white pt-16 lg:py-24">
              <div className="bg-red-600 pb-16 lg:relative lg:z-10 lg:pb-0">
                  <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-8">
                  <div className="relative lg:-my-8">
                      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden"></div>
                      <div className="mx-auto max-w-md px-6 sm:max-w-3xl lg:h-full lg:p-0">
                      <div className="aspect-w-10 aspect-h-6 overflow-hidden rounded-xl shadow-xl sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
                          <img className="object-cover lg:h-full lg:w-full" src="/assets/img/doggo.jpeg" alt="" />
                      </div>
                      </div>
                  </div>
                  <div className="mt-12 lg:col-span-2 lg:m-0 lg:pl-8">
                      <div className="mx-auto max-w-md px-6 sm:max-w-2xl lg:max-w-none lg:px-0 lg:py-20">
                      <blockquote>
                          <div>
                          <svg className="h-12 w-12 text-white opacity-25" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                          </svg>
                          <p className="mt-6 text-2xl font-medium text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit.</p>
                          </div>
                          <footer className="mt-6">
                          <p className="text-base font-medium text-white">Doggo</p>
                          <p className="text-base font-medium text-red-100">CED at Doggo Inc.</p>
                          </footer>
                      </blockquote>
                      </div>
                  </div>
                  </div>
              </div>
            </div>


            <div className="bg-white">
              <div>
                

                <main className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-4">
                  <div className="flex items-baseline justify-between border-b border-gray-200 pt-24 pb-6">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900">All Jobs</h1>

                    <div className="flex items-center">
                      <div className="relative inline-block text-left">
                        <div>
                          <button type="button" className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900" id="menu-button" aria-expanded="false" aria-haspopup="true">
                            Sort
                            
                            <svg className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                              <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                            </svg>
                          </button>
                        </div>
                      </div>

                      <button type="button" className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
                        <span className="sr-only">View grid</span>
                        
                        <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M4.25 2A2.25 2.25 0 002 4.25v2.5A2.25 2.25 0 004.25 9h2.5A2.25 2.25 0 009 6.75v-2.5A2.25 2.25 0 006.75 2h-2.5zm0 9A2.25 2.25 0 002 13.25v2.5A2.25 2.25 0 004.25 18h2.5A2.25 2.25 0 009 15.75v-2.5A2.25 2.25 0 006.75 11h-2.5zm9-9A2.25 2.25 0 0011 4.25v2.5A2.25 2.25 0 0013.25 9h2.5A2.25 2.25 0 0018 6.75v-2.5A2.25 2.25 0 0015.75 2h-2.5zm0 9A2.25 2.25 0 0011 13.25v2.5A2.25 2.25 0 0013.25 18h2.5A2.25 2.25 0 0018 15.75v-2.5A2.25 2.25 0 0015.75 11h-2.5z" clipRule="evenodd" />
                        </svg>
                      </button>
                      <button type="button" className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden">
                        <span className="sr-only">Filters</span>
                        
                        <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 01.628.74v2.288a2.25 2.25 0 01-.659 1.59l-4.682 4.683a2.25 2.25 0 00-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 018 18.25v-5.757a2.25 2.25 0 00-.659-1.591L2.659 6.22A2.25 2.25 0 012 4.629V2.34a.75.75 0 01.628-.74z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <section aria-labelledby="products-heading" className="pt-6 pb-24">
                    <h2 id="products-heading" className="sr-only">Products</h2>

                    <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                      
                      <form className="hidden lg:block">
                        <h3 className="sr-only">Categories</h3>
                        <ul role="list" className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">
                          <li>
                            <a href="#">Operators</a>
                          </li>

                          <li>
                            <a href="#">Runners</a>
                          </li>

                          <li>
                            <a href="#">Shoppers</a>
                          </li>

                          <li>
                            <a href="#">Drivers</a>
                          </li>

                          <li>
                            <a href="#">Headquarters</a>
                          </li>
                        </ul>

                        <div className="border-b border-gray-200 py-6">
                          <h3 className="-my-3 flow-root">
                          
                            <button type="button" className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-0" aria-expanded="false">
                              <span className="font-medium text-gray-900">Availabilty</span>
                              <span className="ml-6 flex items-center">
                                
                                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                  <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                                </svg>
                                
                                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                  <path fill-rule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clipRule="evenodd" />
                                </svg>
                              </span>
                            </button>
                          </h3>
                        
                          <div className="pt-6" id="filter-section-0">
                            <div className="space-y-4">
                              <div className="flex items-center">
                                <input id="filter-color-0" name="color[]" value="white" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500" />
                                <label htmlFor="filter-color-0" className="ml-3 text-sm text-gray-600">Full time</label>
                              </div>

                              <div className="flex items-center">
                                <input id="filter-color-1" name="color[]" value="beige" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500" />
                                <label htmlFor="filter-color-1" className="ml-3 text-sm text-gray-600">Part time</label>
                              </div>

                              <div className="flex items-center">
                                <input id="filter-color-2" name="color[]" value="blue" type="checkbox" defaultChecked className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500" />
                                <label htmlFor="filter-color-2" className="ml-3 text-sm text-gray-600">Weekend</label>
                              </div>

                              <div className="flex items-center">
                                <input id="filter-color-3" name="color[]" value="brown" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500" />
                                <label htmlFor="filter-color-3" className="ml-3 text-sm text-gray-600">Evenings</label>
                              </div>

                              
                            </div>
                          </div>
                        </div>

                        <div className="border-b border-gray-200 py-6">
                          <h3 className="-my-3 flow-root">
                          
                            <button type="button" className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-1" aria-expanded="false">
                              <span className="font-medium text-gray-900">Location</span>
                              <span className="ml-6 flex items-center">
                                
                                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                  <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                                </svg>
                                
                                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                  <path fill-rule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clipRule="evenodd" />
                                </svg>
                              </span>
                            </button>
                          </h3>
                        
                          <div className="pt-6" id="filter-section-1">
                            <div className="space-y-4">
                              <div className="flex items-center">
                                <input id="filter-category-0" name="category[]" value="new-arrivals" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500" />
                                <label htmlFor="filter-category-0" className="ml-3 text-sm text-gray-600">The Netherlands</label>
                              </div>

                              <div className="flex items-center">
                                <input id="filter-category-1" name="category[]" value="sale" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500" />
                                <label htmlFor="filter-category-1" className="ml-3 text-sm text-gray-600">France</label>
                              </div>

                              <div className="flex items-center">
                                <input id="filter-category-2" name="category[]" value="travel" type="checkbox" defaultChecked className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500" />
                                <label htmlFor="filter-category-2" className="ml-3 text-sm text-gray-600">Germany</label>
                              </div>

                              
                            </div>
                          </div>
                        </div>

                        {/* <div className="border-b border-gray-200 py-6">
                          <h3 className="-my-3 flow-root">
                            <button type="button" className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-2" aria-expanded="false">
                              <span className="font-medium text-gray-900">Size</span>
                              <span className="ml-6 flex items-center">
                                
                                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                  <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                                </svg>
                                
                                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                  <path fill-rule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clipRule="evenodd" />
                                </svg>
                              </span>
                            </button>
                          </h3>
                        
                          <div className="pt-6" id="filter-section-2">
                            <div className="space-y-4">
                              <div className="flex items-center">
                                <input id="filter-size-0" name="size[]" value="2l" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500" />
                                <label htmlFor="filter-size-0" className="ml-3 text-sm text-gray-600">2L</label>
                              </div>

                              <div className="flex items-center">
                                <input id="filter-size-1" name="size[]" value="6l" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500" />
                                <label htmlFor="filter-size-1" className="ml-3 text-sm text-gray-600">6L</label>
                              </div>

                              <div className="flex items-center">
                                <input id="filter-size-2" name="size[]" value="12l" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500" />
                                <label htmlFor="filter-size-2" className="ml-3 text-sm text-gray-600">12L</label>
                              </div>

                              <div className="flex items-center">
                                <input id="filter-size-3" name="size[]" value="18l" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500" />
                                <label htmlFor="filter-size-3" className="ml-3 text-sm text-gray-600">18L</label>
                              </div>

                              <div className="flex items-center">
                                <input id="filter-size-4" name="size[]" value="20l" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500" />
                                <label htmlFor="filter-size-4" className="ml-3 text-sm text-gray-600">20L</label>
                              </div>

                              <div className="flex items-center">
                                <input id="filter-size-5" name="size[]" value="40l" type="checkbox" defaultChecked className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500" />
                                <label htmlFor="filter-size-5" className="ml-3 text-sm text-gray-600">40L</label>
                              </div>
                            </div>
                          </div>
                        </div> */}
                      </form>

                      <div className="lg:col-span-3">
                        <div className="h-96 rounded-lg lg:h-full">

                        <div className="overflow-hidden bg-white shadow sm:rounded-md">
                        <div className="overflow-hidden bg-white shadow sm:rounded-md">
                            <ul role="list" className="divide-y divide-gray-200">
                              <li>
                                <a href="#" className="block hover:bg-gray-50">
                                  <div className="px-4 py-4 sm:px-6">
                                    <div className="flex items-center justify-between">
                                      <p className="truncate text-sm font-medium text-red-600">Java Developer</p>
                                      <div className="ml-2 flex flex-shrink-0">
                                        <p className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">Full-time</p>
                                      </div>
                                    </div>
                                    <div className="mt-2 sm:flex sm:justify-between">
                                      <div className="sm:flex">
                                        <p className="flex items-center text-sm text-gray-500">
                                          <svg className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path d="M7 8a3 3 0 100-6 3 3 0 000 6zM14.5 9a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM1.615 16.428a1.224 1.224 0 01-.569-1.175 6.002 6.002 0 0111.908 0c.058.467-.172.92-.57 1.174A9.953 9.953 0 017 18a9.953 9.953 0 01-5.385-1.572zM14.5 16h-.106c.07-.297.088-.611.048-.933a7.47 7.47 0 00-1.588-3.755 4.502 4.502 0 015.874 2.636.818.818 0 01-.36.98A7.465 7.465 0 0114.5 16z" />
                                          </svg>
                                          Engineering
                                        </p>
                                        <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                                          <svg className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fill-rule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" clipRule="evenodd" />
                                          </svg>
                                          Remote
                                        </p>
                                      </div>
                                      <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                                        <svg className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                          <path fill-rule="evenodd" d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z" clipRule="evenodd" />
                                        </svg>
                                        <p>
                                          Closing on 
                                          <time dateTime="2020-01-14"> Feb 14, 2023</time>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a href="#" className="block hover:bg-gray-50">
                                  <div className="px-4 py-4 sm:px-6">
                                    <div className="flex items-center justify-between">
                                      <p className="truncate text-sm font-medium text-red-600">Back End Developer</p>
                                      <div className="ml-2 flex flex-shrink-0">
                                        <p className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">Full-time</p>
                                      </div>
                                    </div>
                                    <div className="mt-2 sm:flex sm:justify-between">
                                      <div className="sm:flex">
                                        <p className="flex items-center text-sm text-gray-500">
                                          <svg className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path d="M7 8a3 3 0 100-6 3 3 0 000 6zM14.5 9a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM1.615 16.428a1.224 1.224 0 01-.569-1.175 6.002 6.002 0 0111.908 0c.058.467-.172.92-.57 1.174A9.953 9.953 0 017 18a9.953 9.953 0 01-5.385-1.572zM14.5 16h-.106c.07-.297.088-.611.048-.933a7.47 7.47 0 00-1.588-3.755 4.502 4.502 0 015.874 2.636.818.818 0 01-.36.98A7.465 7.465 0 0114.5 16z" />
                                          </svg>
                                          Engineering
                                        </p>
                                        <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                                          <svg className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fill-rule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" clipRule="evenodd" />
                                          </svg>
                                          Remote
                                        </p>
                                      </div>
                                      <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                                        <svg className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                          <path fill-rule="evenodd" d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z" clipRule="evenodd" />
                                        </svg>
                                        <p>
                                          Closing on 
                                          <time dateTime="2020-01-14"> Feb 14, 2023</time>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a href="#" className="block hover:bg-gray-50">
                                  <div className="px-4 py-4 sm:px-6">
                                    <div className="flex items-center justify-between">
                                      <p className="truncate text-sm font-medium text-red-600">Back End Developer</p>
                                      <div className="ml-2 flex flex-shrink-0">
                                        <p className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">Full-time</p>
                                      </div>
                                    </div>
                                    <div className="mt-2 sm:flex sm:justify-between">
                                      <div className="sm:flex">
                                        <p className="flex items-center text-sm text-gray-500">
                                          <svg className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path d="M7 8a3 3 0 100-6 3 3 0 000 6zM14.5 9a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM1.615 16.428a1.224 1.224 0 01-.569-1.175 6.002 6.002 0 0111.908 0c.058.467-.172.92-.57 1.174A9.953 9.953 0 017 18a9.953 9.953 0 01-5.385-1.572zM14.5 16h-.106c.07-.297.088-.611.048-.933a7.47 7.47 0 00-1.588-3.755 4.502 4.502 0 015.874 2.636.818.818 0 01-.36.98A7.465 7.465 0 0114.5 16z" />
                                          </svg>
                                          Engineering
                                        </p>
                                        <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                                          <svg className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fill-rule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" clipRule="evenodd" />
                                          </svg>
                                          Remote
                                        </p>
                                      </div>
                                      <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                                        <svg className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                          <path fill-rule="evenodd" d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z" clipRule="evenodd" />
                                        </svg>
                                        <p>
                                          Closing on 
                                          <time dateTime="2020-01-14"> Feb 14, 2023</time>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a href="#" className="block hover:bg-gray-50">
                                  <div className="px-4 py-4 sm:px-6">
                                    <div className="flex items-center justify-between">
                                      <p className="truncate text-sm font-medium text-red-600">Back End Developer</p>
                                      <div className="ml-2 flex flex-shrink-0">
                                        <p className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">Full-time</p>
                                      </div>
                                    </div>
                                    <div className="mt-2 sm:flex sm:justify-between">
                                      <div className="sm:flex">
                                        <p className="flex items-center text-sm text-gray-500">
                                          <svg className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path d="M7 8a3 3 0 100-6 3 3 0 000 6zM14.5 9a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM1.615 16.428a1.224 1.224 0 01-.569-1.175 6.002 6.002 0 0111.908 0c.058.467-.172.92-.57 1.174A9.953 9.953 0 017 18a9.953 9.953 0 01-5.385-1.572zM14.5 16h-.106c.07-.297.088-.611.048-.933a7.47 7.47 0 00-1.588-3.755 4.502 4.502 0 015.874 2.636.818.818 0 01-.36.98A7.465 7.465 0 0114.5 16z" />
                                          </svg>
                                          Engineering
                                        </p>
                                        <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                                          <svg className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fill-rule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" clipRule="evenodd" />
                                          </svg>
                                          Remote
                                        </p>
                                      </div>
                                      <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                                        <svg className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                          <path fill-rule="evenodd" d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z" clipRule="evenodd" />
                                        </svg>
                                        <p>
                                          Closing on 
                                          <time dateTime="2020-01-14"> Feb 14, 2023</time>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a href="#" className="block hover:bg-gray-50">
                                  <div className="px-4 py-4 sm:px-6">
                                    <div className="flex items-center justify-between">
                                      <p className="truncate text-sm font-medium text-red-600">Back End Developer</p>
                                      <div className="ml-2 flex flex-shrink-0">
                                        <p className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">Full-time</p>
                                      </div>
                                    </div>
                                    <div className="mt-2 sm:flex sm:justify-between">
                                      <div className="sm:flex">
                                        <p className="flex items-center text-sm text-gray-500">
                                          <svg className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path d="M7 8a3 3 0 100-6 3 3 0 000 6zM14.5 9a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM1.615 16.428a1.224 1.224 0 01-.569-1.175 6.002 6.002 0 0111.908 0c.058.467-.172.92-.57 1.174A9.953 9.953 0 017 18a9.953 9.953 0 01-5.385-1.572zM14.5 16h-.106c.07-.297.088-.611.048-.933a7.47 7.47 0 00-1.588-3.755 4.502 4.502 0 015.874 2.636.818.818 0 01-.36.98A7.465 7.465 0 0114.5 16z" />
                                          </svg>
                                          Engineering
                                        </p>
                                        <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                                          <svg className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fill-rule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" clipRule="evenodd" />
                                          </svg>
                                          Remote
                                        </p>
                                      </div>
                                      <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                                        <svg className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                          <path fill-rule="evenodd" d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z" clipRule="evenodd" />
                                        </svg>
                                        <p>
                                          Closing on 
                                          <time dateTime="2020-01-14"> Feb 14, 2023</time>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </a>
                              </li>

                              <li>
                                <a href="#" className="block hover:bg-gray-50">
                                  <div className="px-4 py-4 sm:px-6">
                                    <div className="flex items-center justify-between">
                                      <p className="truncate text-sm font-medium text-red-600">Front End Developer</p>
                                      <div className="ml-2 flex flex-shrink-0">
                                        <p className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">Full-time</p>
                                      </div>
                                    </div>
                                    <div className="mt-2 sm:flex sm:justify-between">
                                      <div className="sm:flex">
                                        <p className="flex items-center text-sm text-gray-500">
                                          <svg className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path d="M7 8a3 3 0 100-6 3 3 0 000 6zM14.5 9a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM1.615 16.428a1.224 1.224 0 01-.569-1.175 6.002 6.002 0 0111.908 0c.058.467-.172.92-.57 1.174A9.953 9.953 0 017 18a9.953 9.953 0 01-5.385-1.572zM14.5 16h-.106c.07-.297.088-.611.048-.933a7.47 7.47 0 00-1.588-3.755 4.502 4.502 0 015.874 2.636.818.818 0 01-.36.98A7.465 7.465 0 0114.5 16z" />
                                          </svg>
                                          Engineering
                                        </p>
                                        <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                                          <svg className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fill-rule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" clipRule="evenodd" />
                                          </svg>
                                          Remote
                                        </p>
                                      </div>
                                      <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                                        <svg className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                          <path fill-rule="evenodd" d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z" clipRule="evenodd" />
                                        </svg>
                                        <p>
                                          Closing on 
                                          <time dateTime="2020-01-14"> Feb 14, 2023</time>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </a>
                              </li>

                              <li>
                                <a href="#" className="block hover:bg-gray-50">
                                  <div className="px-4 py-4 sm:px-6">
                                    <div className="flex items-center justify-between">
                                      <h2 className="truncate text-sm font-medium text-red-600">User Interface Designer</h2>
                                      <div className="ml-2 flex flex-shrink-0">
                                        <p className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">Full-time</p>
                                      </div>
                                    </div>
                                    <div className="mt-2 sm:flex sm:justify-between">
                                      <div className="sm:flex">
                                        <p className="flex items-center text-sm text-gray-500">
                                          <svg className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path d="M7 8a3 3 0 100-6 3 3 0 000 6zM14.5 9a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM1.615 16.428a1.224 1.224 0 01-.569-1.175 6.002 6.002 0 0111.908 0c.058.467-.172.92-.57 1.174A9.953 9.953 0 017 18a9.953 9.953 0 01-5.385-1.572zM14.5 16h-.106c.07-.297.088-.611.048-.933a7.47 7.47 0 00-1.588-3.755 4.502 4.502 0 015.874 2.636.818.818 0 01-.36.98A7.465 7.465 0 0114.5 16z" />
                                          </svg>
                                          Design
                                        </p>
                                        <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                                          <svg className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fill-rule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" clipRule="evenodd" />
                                          </svg>
                                          Remote
                                        </p>
                                      </div>
                                      <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                                        <svg className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                          <path fill-rule="evenodd" d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z" clipRule="evenodd" />
                                        </svg>
                                        <p>
                                          Closing on 
                                          <time dateTime="2020-01-14"> Feb 14, 2023</time>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </a>
                              </li>
                            </ul>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                  </section>
                </main>
              </div>
            </div>


          
            


            <Bounded collapsible={true} as="section" className="px-6 py-20 bg-white override">
            {/* <div className="sm:flex">
                <div className="mb-4 flex-shrink-0 sm:mb-0 sm:mr-4">
                    <svg className="h-32 w-full border border-gray-300 bg-white text-gray-300 sm:w-32" preserveAspectRatio="none" stroke="currentColor" fill="none" viewBox="0 0 200 200" aria-hidden="true">
                    <path vector-effect="non-scaling-stroke" strokeWidth="1" d="M0 0l200 200M0 200L200 0" />
                    </svg>
                </div>
                <div>
                    <h4 className="text-lg font-bold">Lorem ipsum</h4>
                    <p className="mt-1">Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis voluptatem. Minus quidem ipsam quia iusto.</p>
                </div>
            </div> */}

            <h1 className="pb-8 font-black text-4xl md:text-6xl mb-6 last:mb-0 border-b border-gray-200 uppercase">St<span className={'rd_txt'}>or</span>e</h1> 
            <h3 className="pb-2 font-black text-2xl mb-6 last:mb-0 uppercase">BECOME THE <span className={'rd_txt'}>ENVY OF YOUR FRIENDS</span> WITH SOME GENUINE BUSY<span className={'rd_txt'}>LITTLE</span>PIXELS GOODIES!</h3> 
            <p className="text-lg font-normal text-gray-500 studo_intro">Earlier RPA bots used to have some limitations like it would take structured data for processing from excel, database, on these data. But with advancements in technology like OCR (Optical Character Recognition) and Machine Learning, RPA bots are capable of extracting these data …</p>
            <br />

            




            <div className="py-6 pb-24 mx-auto">
            <div className="flex flex-wrap -m-4">
                <div className="lg:w-1/4 md:w-1/4 p-2 w-1/2">
                    <Link className="block relative md:h-48 overflow-hidden" href={'/store/product'}><img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260"/></Link>
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
