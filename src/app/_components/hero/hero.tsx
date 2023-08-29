"use client";

import { Component, ReactNode } from "react";
import Image from 'next/image'

export default class Hero extends Component {
    render(): ReactNode {
        return (
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-2/3 lg:pr-32 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Worried about your mental health?
                        </h1>
                        <p className="mb-8 leading-relaxed">Don’t worry, you’re in safe hands. Find your healerbuddy today and start your journey towards a healthier mind.</p>
                        <div className="flex justify-center">
                            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 bg-cover relative">
                        <Image alt="" src="" width="0"
                            height="0"
                            sizes="100vw"
                            className="w-full h-auto z-0" />
                        <div className="poly-1 z-10 top-1/3 bottom-0 right-0 left-1/3 absolute"></div>
                    </div>
                </div>
            </section>
        )
    }
}