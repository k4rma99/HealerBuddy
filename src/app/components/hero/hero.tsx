"use client";

import "./hero.css"
import { useRouter } from "next/navigation";

export default function Hero(params: any) {

    const router = useRouter();

    return (
        <section className="relative h-screen">
            <div>
                <div className="text-content z-10 absolute flex flex-col items-center text-center align-middle">
                    <h1 className="title-font text-3xl lg:text-6xl mb-4 font-large text-black">Worried about your mental health?
                    </h1>
                    <p className="mb-8 leading-relaxed mx-20 text-md lg:mx-0 lg:text-xl text-black">Don’t worry, you’re in safe hands. Find your healerbuddy today and start your journey towards a healthier mind.</p>
                    <div className="flex">
                        <button onClick={() => router.push('/directory')} className="start-button inline-flex rounded-3xl text-white border-0 py-2 px-6 focus:outline-none text-lg">Start your journey</button>
                    </div>
                </div>

                <div className="waveWrapper waveAnimation">
                    <div className="waveWrapperInner bgTop">
                        <div className="wave waveTop"></div>
                    </div>
                    <div className="waveWrapperInner bgMiddle">
                        <div className="wave waveMiddle"></div>
                    </div>
                    <div className="waveWrapperInner bgBottom">
                        <div className="wave waveBottom"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}