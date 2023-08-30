"use client";

import { Component, ReactNode } from "react";
import Image from 'next/image'

import "./hero.css"
import heroImg from "@/assets/hero-right-image.svg"
import { useRouter } from "next/navigation";

export default function Hero(params:any) {
    
    const router = useRouter();

    return(
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
                <div className="left-flex lg:flex-grow md:w-2/3 lg:pr-32 md:pr-16 2xl:pl-20 flex flex-col top-1/2 bottom-0 left-0 right-0 md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Worried about your mental health?
                    </h1>
                    <p className="mb-8 leading-relaxed">Don’t worry, you’re in safe hands. Find your healerbuddy today and start your journey towards a healthier mind.</p>
                    <div className="flex justify-center">
                        <button onClick={() => router.push('/login')} className="start-button inline-flex rounded-3xl text-white border-0 py-2 px-6 focus:outline-none text-lg">Start your journey</button>
                    </div>
                </div>
                <div className="right-flex lg:max-w-lg lg:w-full md:w-1/2 overflow-hidden w-5/6 bg-cover relative">
                    <Image alt="heroImg" src={heroImg}
                        sizes="100vw"
                        className="w-full h-auto pr-20 z-0" />
                    </div>
            </div>
        </section>
    );
}