import Image from "next/image"

import depressionItem from "@/assets/images/depression-item.jpg"
import anxietyItem from "@/assets/images/anxiety-item.jpg"
import couplesItem from "@/assets/images/couples-item.jpg"
import shItem from "@/assets/images/sh-item.jpg"
import bpdItem from "@/assets/images/bpd-item.jpg"
import insomniaItem from "@/assets/images/insomnia-item.jpg"
import stressItem from "@/assets/images/stress-item.jpg"

export default function Services() {
    return (
        <section className="mx-20 pb-20 text-center">
            <h1 className="title items-center text-black pb-10" >Services</h1>
            <div className="carousel carousel-center sm:w-full md:w-full lg:w-3/4 p-4 space-x-4 rounded-box">
                <div className="carousel-item">
                    <div className="relative">
                        <Image src={depressionItem} width={300} alt="test" />
                        <h1 className="absolute text-3xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Depression</h1>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="relative">
                        <Image src={anxietyItem} width={300} height={100} alt="test" />
                        <h1 className="absolute text-3xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Anxiety</h1>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="relative">
                        <Image src={couplesItem} width={300} alt="test" />
                        <h1 className="absolute text-3xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Couples</h1>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="relative">
                        <Image src={shItem} width={300} alt="test" />
                        <h1 className="absolute text-3xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Sexual Health</h1>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="relative">
                        <Image src={bpdItem} width={300} alt="test" />
                        <h1 className="absolute text-3xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">BPD</h1>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="relative">
                        <Image src={insomniaItem} width={300} alt="test" />
                        <h1 className="absolute text-3xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Insomnia</h1>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="relative">
                        <Image src={stressItem} width={300} alt="test" />
                        <h1 className="absolute text-3xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Stress</h1>
                    </div>
                </div>
            </div>
        </section>
    )
}