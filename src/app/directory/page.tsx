"use client;"

import Footer from "@/shared/footer"
import Header from "@/shared/header"
import React from "react"

import profileImageStock from "@/assets/images/profile-image-stock.jpg"
import icon from "@/assets/icons/head-gear.svg"

import Image from "next/image"
import Link from "next/link"

export default function Directory() {
    return (
        <main>
            <Header />


            <div className="">
                <div>
                    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-16">
                            <h1 className="text-4xl font-bold tracking-tight text-gray-900">Find Your Buddy</h1>

                            <div className="flex items-center">
                                <div className="relative inline-block text-left">
                                    <div>
                                        <button type="button" className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900" id="menu-button" aria-expanded="false" aria-haspopup="true">
                                            Sort
                                            <svg className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md hidden bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" data-tabindex="-1">
                                        <div className="py-1" role="none">
                                            <a href="#" className="font-medium text-gray-900 block px-4 py-2 text-sm" role="menuitem" data-tabindex="-1" id="menu-item-0">Most Popular</a>
                                            <a href="#" className="text-gray-500 block px-4 py-2 text-sm" role="menuitem" data-tabindex="-1" id="menu-item-1">Top Rated</a>
                                            <a href="#" className="text-gray-500 block px-4 py-2 text-sm" role="menuitem" data-tabindex="-1" id="menu-item-2">Newcomers</a>
                                        </div>
                                    </div>
                                </div>

                                <button type="button" className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
                                    <span className="sr-only">View grid</span>
                                    <svg className="h-5 w-5" aria-hidden="true" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M4.25 2A2.25 2.25 0 002 4.25v2.5A2.25 2.25 0 004.25 9h2.5A2.25 2.25 0 009 6.75v-2.5A2.25 2.25 0 006.75 2h-2.5zm0 9A2.25 2.25 0 002 13.25v2.5A2.25 2.25 0 004.25 18h2.5A2.25 2.25 0 009 15.75v-2.5A2.25 2.25 0 006.75 11h-2.5zm9-9A2.25 2.25 0 0011 4.25v2.5A2.25 2.25 0 0013.25 9h2.5A2.25 2.25 0 0018 6.75v-2.5A2.25 2.25 0 0015.75 2h-2.5zm0 9A2.25 2.25 0 0011 13.25v2.5A2.25 2.25 0 0013.25 18h2.5A2.25 2.25 0 0018 15.75v-2.5A2.25 2.25 0 0015.75 11h-2.5z" clip-rule="evenodd" />
                                    </svg>
                                </button>
                                <button type="button" className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden">
                                    <span className="sr-only">Filters</span>
                                    <svg className="h-5 w-5" aria-hidden="true" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 01.628.74v2.288a2.25 2.25 0 01-.659 1.59l-4.682 4.683a2.25 2.25 0 00-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 018 18.25v-5.757a2.25 2.25 0 00-.659-1.591L2.659 6.22A2.25 2.25 0 012 4.629V2.34a.75.75 0 01.628-.74z" clip-rule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <section aria-labelledby="products-heading" className="pb-24 pt-6">
                            <h2 id="products-heading" className="sr-only">Products</h2>

                            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                                {/* <!-- Filters --> */}

                                <form className="hidden lg:block">
                                    <div className="border-b border-gray-200 py-6">
                                        <h3 className="-my-3 flow-root">
                                            {/* <!-- Expand/collapse section button --> */}
                                            <button type="button" className="flex w-full items-center justify-between py-3 text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-0" aria-expanded="false">
                                                <span className="font-medium text-gray-900">Specialities</span>
                                                <span className="ml-6 flex items-center">
                                                    {/* <!-- Expand icon, show/hide based on section open state. --> */}
                                                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                        <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                                                    </svg>
                                                    {/* <!-- Collapse icon, show/hide based on section open state. --> */}
                                                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                        <path fill-rule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clip-rule="evenodd" />
                                                    </svg>
                                                </span>
                                            </button>
                                        </h3>
                                        {/* <!-- Filter section, show/hide based on section state. --> */}
                                        <div className="pt-6" id="filter-section-0">
                                            <div className="space-y-4">
                                                <div className="flex items-center">
                                                    <input id="filter-color-0" name="color[]" value="white" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                    <label htmlFor="filter-color-0" className="ml-3 text-sm text-gray-600">ADHD</label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input id="filter-color-1" name="color[]" value="beige" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                    <label htmlFor="filter-color-1" className="ml-3 text-sm text-gray-600">Depression</label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input id="filter-color-2" name="color[]" value="blue" type="checkbox" checked className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                    <label htmlFor="filter-color-2" className="ml-3 text-sm text-gray-600">Couple's Theraphy</label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input id="filter-color-3" name="color[]" value="brown" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                    <label htmlFor="filter-color-3" className="ml-3 text-sm text-gray-600">Anxiety</label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input id="filter-color-4" name="color[]" value="green" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                    <label htmlFor="filter-color-4" className="ml-3 text-sm text-gray-600">BDD</label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input id="filter-color-5" name="color[]" value="purple" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                    <label htmlFor="filter-color-5" className="ml-3 text-sm text-gray-600">Insomnia</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border-b border-gray-200 py-6">
                                        <h3 className="-my-3 flow-root">
                                            {/* <!-- Expand/collapse section button --> */}
                                            <button type="button" className="flex w-full items-center justify-between   py-3 text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-1" aria-expanded="false">
                                                <span className="font-medium text-gray-900">Location</span>
                                                <span className="ml-6 flex items-center">
                                                    {/* <!-- Expand icon, show/hide based on section open state. --> */}
                                                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                        <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                                                    </svg>
                                                    {/* <!-- Collapse icon, show/hide based on section open state. --> */}
                                                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                        <path fill-rule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clip-rule="evenodd" />
                                                    </svg>
                                                </span>
                                            </button>
                                        </h3>
                                        {/* <!-- Filter section, show/hide based on section state. --> */}
                                        <div className="pt-6" id="filter-section-1">
                                            <div className="space-y-4">
                                                <div className="flex items-center">
                                                    <input id="filter-category-0" name="category[]" value="new-arrivals" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                    <label htmlFor="filter-category-0" className="ml-3 text-sm text-gray-600">Toronto</label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input id="filter-category-1" name="category[]" value="sale" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                    <label htmlFor="filter-category-1" className="ml-3 text-sm text-gray-600">Quebec </label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input id="filter-category-2" name="category[]" value="travel" type="checkbox" checked className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                    <label htmlFor="filter-category-2" className="ml-3 text-sm text-gray-600">Whitehorse</label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input id="filter-category-3" name="category[]" value="organization" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                    <label htmlFor="filter-category-3" className="ml-3 text-sm text-gray-600">Montreal</label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input id="filter-category-4" name="category[]" value="accessories" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                    <label htmlFor="filter-category-4" className="ml-3 text-sm text-gray-600">Vancouver</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border-b hidden border-gray-200 py-6">
                                        <h3 className="-my-3 flow-root">

                                            <button type="button" className="flex w-full items-center justify-between  py-3 text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-2" aria-expanded="false">
                                                <span className="font-medium text-gray-900">Size</span>
                                                <span className="ml-6 flex items-center">
                                                    {/* <!-- Expand icon, show/hide based on section open state. --> */}
                                                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                        <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                                                    </svg>
                                                    {/* <!-- Collapse icon, show/hide based on section open state. --> */}
                                                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                        <path fill-rule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clip-rule="evenodd" />
                                                    </svg>
                                                </span>
                                            </button>
                                        </h3>

                                        <div className="pt-6" id="filter-section-2">
                                            <div className="space-y-4">
                                                <div className="flex items-center">
                                                    <input id="filter-size-0" name="size[]" value="2l" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                    <label htmlFor="filter-size-0" className="ml-3 text-sm text-gray-600">2L</label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input id="filter-size-1" name="size[]" value="6l" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                    <label htmlFor="filter-size-1" className="ml-3 text-sm text-gray-600">6L</label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input id="filter-size-2" name="size[]" value="12l" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                    <label htmlFor="filter-size-2" className="ml-3 text-sm text-gray-600">12L</label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input id="filter-size-3" name="size[]" value="18l" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                    <label htmlFor="filter-size-3" className="ml-3 text-sm text-gray-600">18L</label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input id="filter-size-4" name="size[]" value="20l" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                    <label htmlFor="filter-size-4" className="ml-3 text-sm text-gray-600">20L</label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input id="filter-size-5" name="size[]" value="40l" type="checkbox" checked className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                    <label htmlFor="filter-size-5" className="ml-3 text-sm text-gray-600">40L</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>

                                {/* Content */}
                                <div className="lg:col-span-3">
                                    <section className="card p-6 py-10 mb-10 flex bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                        <Image src={profileImageStock} width={300} height={30} className="mr-10" alt="" />
                                        <div className="content">
                                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Dr. Jacob Bran</h5>
                                            <div className="my-3 text-white flex justify-between w-1/2">
                                                <span className="flex" ><Image src={icon} alt="" className="mr-1"/>ADHD</span>
                                                <span className="flex" ><Image src={icon} alt="" className="mr-1"/>ADHD</span>
                                                <span className="flex" ><Image src={icon} alt="" className="mr-1"/>ADHD</span>

                                            </div>
                                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Keith Welsh brings over 20 years of psychotherapy practice including EMDR specialization in a solution focused approach personally tailored to your specific concerns. Keith provides a friendly, focused, and psychologically safe treatment atmosphere with an outstanding record of therapeutic success for the people he serves..</p>
                                            <Link href="/login" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                Book consultation
                                                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </section>

                                    <section className="card p-6 py-10 mb-10 flex bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                        <Image src={profileImageStock} width={300} height={30} className="mr-10" alt="" />
                                        <div className="content">
                                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Dr. Jacob Bran</h5>
                                            <div className="my-3 text-white flex justify-between w-1/2">
                                                <span className="flex" ><Image src={icon} alt="" className="mr-1"/>ADHD</span>
                                                <span className="flex" ><Image src={icon} alt="" className="mr-1"/>ADHD</span>
                                                <span className="flex" ><Image src={icon} alt="" className="mr-1"/>ADHD</span>

                                            </div>
                                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Keith Welsh brings over 20 years of psychotherapy practice including EMDR specialization in a solution focused approach personally tailored to your specific concerns. Keith provides a friendly, focused, and psychologically safe treatment atmosphere with an outstanding record of therapeutic success for the people he serves..</p>
                                            <Link href="/login" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                Book consultation
                                                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </section>

                                    <section className="card p-6 py-10 mb-10 flex bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                        <Image src={profileImageStock} width={300} height={30} className="mr-10" alt="" />
                                        <div className="content">
                                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Dr. Jacob Bran</h5>
                                            <div className="my-3 text-white flex justify-between w-1/2">
                                                <span className="flex" ><Image src={icon} alt="" className="mr-1"/>ADHD</span>
                                                <span className="flex" ><Image src={icon} alt="" className="mr-1"/>ADHD</span>
                                                <span className="flex" ><Image src={icon} alt="" className="mr-1"/>ADHD</span>

                                            </div>
                                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Keith Welsh brings over 20 years of psychotherapy practice including EMDR specialization in a solution focused approach personally tailored to your specific concerns. Keith provides a friendly, focused, and psychologically safe treatment atmosphere with an outstanding record of therapeutic success for the people he serves..</p>
                                            <Link href="/login" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                Book consultation
                                                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </section>

                                    <section className="card p-6 py-10 mb-10 flex bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                        <Image src={profileImageStock} width={300} height={30} className="mr-10" alt="" />
                                        <div className="content">
                                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Dr. Jacob Bran</h5>
                                            <div className="my-3 text-white flex justify-between w-1/2">
                                                <span className="flex" ><Image src={icon} alt="" className="mr-1"/>ADHD</span>
                                                <span className="flex" ><Image src={icon} alt="" className="mr-1"/>ADHD</span>
                                                <span className="flex" ><Image src={icon} alt="" className="mr-1"/>ADHD</span>

                                            </div>
                                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Keith Welsh brings over 20 years of psychotherapy practice including EMDR specialization in a solution focused approach personally tailored to your specific concerns. Keith provides a friendly, focused, and psychologically safe treatment atmosphere with an outstanding record of therapeutic success for the people he serves..</p>
                                            <Link href="/login" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                Book consultation
                                                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </section>

                                    <section className="card p-6 py-10 mb-10 flex bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                        <Image src={profileImageStock} width={300} height={30} className="mr-10" alt="" />
                                        <div className="content">
                                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Dr. Jacob Bran</h5>
                                            <div className="my-3 text-white flex justify-between w-1/2">
                                                <span className="flex" ><Image src={icon} alt="" className="mr-1"/>ADHD</span>
                                                <span className="flex" ><Image src={icon} alt="" className="mr-1"/>ADHD</span>
                                                <span className="flex" ><Image src={icon} alt="" className="mr-1"/>ADHD</span>

                                            </div>
                                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Keith Welsh brings over 20 years of psychotherapy practice including EMDR specialization in a solution focused approach personally tailored to your specific concerns. Keith provides a friendly, focused, and psychologically safe treatment atmosphere with an outstanding record of therapeutic success for the people he serves..</p>
                                            <Link href="/login" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                Book consultation
                                                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </section>
                    </main>
                </div>
            </div>

            <Footer />
        </main>
    )
}