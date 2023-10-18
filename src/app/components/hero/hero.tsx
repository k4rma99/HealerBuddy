"use client";


import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

import img from "@/assets/images/logo-text-v24.png"
import { HeroImages } from "@/app/constants";

import "./hero.css"

export default function Hero() {

    const router = useRouter();
    const [keyIndex, setIndex] = useState(1);
    let carouselRef = React.useRef<HTMLDivElement>(null)
    const isHidden: boolean = false;

    useEffect(() => {
        const interval = setInterval(() => {
            console.log(keyIndex);
            if (keyIndex === Object.keys(HeroImages).length) {
                setIndex(1)
            } else {
                setIndex(keyIndex + 1)
            }
        }, 3000)

        return () => clearInterval(interval);;
    }, [keyIndex])

    return (
        <section className="relative h-screen overflow-hidden">
            <div className="container mx-auto flex flex-wrap p-5 px-20 flex-col md:flex-row items-center justify-between text-fi-midnight absolute z-40 ">
                <Link href="/" className="flex title-font font-medium items-center mb-4 md:mb-0">
                    <Image
                        src={img}
                        alt="logo"
                        height={50}
                    />
                </Link>
                <div className={isHidden ? "hidden" : "flex flex-row"}>
                    <Link href={"/for-buddies"}>
                        <button className="inline-flex items-center rounded text-base mt-4 md:mt-0 mr-5">For Buddies</button>
                    </Link>

                    <Link href={"/login"}>
                        <button className="inline-flex items-center rounded text-base mt-4 md:mt-0 mr-5">Login</button>
                    </Link>
                </div>
            </div>

            <div className="carousel relative w-full" ref={carouselRef}>
                {
                    <div id={"slide" + keyIndex as string} className="carousel-item relative w-full">
                        <Image
                            className="z-10 opacity-50 h-full w-full transition-opacity duration-5000"
                            src={HeroImages[keyIndex]}
                            alt=""
                            key={keyIndex}
                        />
                    </div>
                }
            </div>

            <div className="text-content z-20 absolute flex flex-col pt-10 items-center text-center align-middle">

                <h1 className="title-font text-3xl lg:text-6xl mb-4 font-large text-black">Worried about your mental health?
                </h1>
                <p className="mb-8 leading-relaxed mx-20 text-md lg:mx-0 lg:text-xl text-black">Don’t worry, you’re in safe hands. Find your healerbuddy today and start your journey towards a healthier mind.</p>
                <div className="flex">
                    <button onClick={() => router.push('/directory')} className="start-button inline-flex rounded-3xl text-white border-0 py-2 px-6 focus:outline-none text-lg">Start your journey</button>
                </div>
            </div>
        </section>
    );
}