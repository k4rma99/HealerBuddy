"use client"

import React, { useEffect, useState } from 'react';
import Image from "next/image"

import depressionItem from "@/assets/images/depression-item.webp"
import anxietyItem from "@/assets/images/anxiety-item.webp"
import couplesItem from "@/assets/images/couples-item.webp"
import shItem from "@/assets/images/sh-item.webp"
import bpdItem from "@/assets/images/bpd-item.webp"
import insomniaItem from "@/assets/images/insomnia-item.webp"
import stressItem from "@/assets/images/stress-item.webp"


export const Services = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const items = [
        { title: 'Depression', image: depressionItem },
        { title: 'Anxiety', image: anxietyItem },
        { title: 'Couples', image: couplesItem },
        { title: 'Sexul Health', image: shItem },
        { title: 'BPD', image: bpdItem },
        { title: 'Insomnia', image: insomniaItem },
        { title: 'Stress', image: stressItem },
    ];

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            switch (event.key) {
                case 'ArrowLeft':
                    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
                    break;
                case 'ArrowRight':
                    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
                    break;
                default:
                    break;
            }
        };
        // Attach the event listener
        window.addEventListener('keydown', handleKeyDown);

        // Detach the event listener when the component unmounts
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };

    }, [currentIndex, items.length]);


    console.log(currentIndex)


    return (
        <section className="mx-20 pb-20 text-center">
            <h1 className="title items-center text-black pb-10" >Services</h1>
            <div className="relative max-w-screen-xl mx-auto">
                <div className="overflow-hidden rounded-lg shadow-lg">
                    <div className="flex transition-transform duration-500 ease-in" style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}>
                        {items.map((item, index) => (
                            <div key={index} className="w-full md:w-1/3 flex-shrink-0 px-2 relative">
                                <div className="relative h-96">
                                    <Image src={item.image} alt={item.title} layout="fill" objectFit="cover" className="rounded-lg" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-center p-4 text-white rounded-lg">
                                            <h3 className="text-xl">{item.title}</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

    );
};
