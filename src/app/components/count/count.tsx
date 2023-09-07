import Image from "next/image"
import heroImage from "@/assets/images/process-image.png"

import "./count.css"

export const Count = () => {
    return (
        <section className="text-gray-600 body-font mx-20 mt-20">
            <h2 className="title sm:text-3xl text-2xl text-gray-900 font-medium title-font">A better way for therapy.</h2>
            <div className="container px-5 py-24 mx-auto flex flex-wrap">
                <Image
                    src={heroImage}
                    className="m-0 self-center mb-2 md:w-2/5"
                    alt=""
                />
                <div className="md:w-3/5 md:pl-6">
                    <p className="content leading-relaxed text-base">Welcome to Healerbuddy, your trusted companion on the
                        journey to emotional well-being. In today's fast-paced world,
                        finding the time and space for self-care can be a challenge.</p>
                </div>
            </div>
        </section>
    )
}