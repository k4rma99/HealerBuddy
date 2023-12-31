import Image from "next/image"

import onlineTherapy from "@/assets/images/online-therapy.webp"

import "./process.css"

export const Process = () => {
    return (
        <section className=" body-font text-center mx-20">
            <h1 className="text-xl lg:text-3xl text-black">How it works?</h1>
            <div className="flex  items-center text-center">
                <div className="container px-5 py-12 mx-auto flex flex-wrap text-left">
                    <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
                        <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                            <div className="h-full w-1 bg-green-700 pointer-events-none"></div>
                        </div>
                        <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-green-100 text-green-800 relative z-10 title-font font-medium text-sm">1</div>
                        <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                            <div className="flex-shrink-0 w-24 h-24 bg-green-700 text-green-100 rounded-full inline-flex items-center justify-center">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-12 h-12" viewBox="0 0 24 24">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                </svg>
                            </div>
                            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">Register yourself</h2>
                                <p className="leading-relaxed text-gray-900">Sign up. Fill your details and start your path of healing.</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
                        <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                            <div className="h-full w-1 bg-green-700 pointer-events-none"></div>
                        </div>
                        <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-green-100 text-green-800 relative z-10 title-font font-medium text-sm">2</div>
                        <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                            <div className="flex-shrink-0 w-24 h-24 bg-green-700 text-green-100 rounded-full inline-flex items-center justify-center">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-12 h-12" viewBox="0 0 24 24">
                                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                </svg>
                            </div>
                            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">Find your Buddy</h2>
                                <p className="leading-relaxed text-gray-900">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
                        <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                            <div className="h-full w-1 bg-green-700 pointer-events-none"></div>
                        </div>
                        <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-green-100 text-green-800 relative z-10 title-font font-medium text-sm">3</div>
                        <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                            <div className="flex-shrink-0 w-24 h-24 bg-green-700 text-green-100 rounded-full inline-flex items-center justify-center">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-12 h-12" viewBox="0 0 24 24">
                                    <circle cx="12" cy="5" r="3"></circle>
                                    <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                                </svg>
                            </div>
                            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">Schedule your sessions</h2>
                                <p className="leading-relaxed text-gray-900">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
                        <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                            <div className="h-full w-1 bg-green-700 pointer-events-none"></div>
                        </div>
                        <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-green-100 text-green-800 relative z-10 title-font font-medium text-sm">4</div>
                        <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                            <div className="flex-shrink-0 w-24 h-24 bg-green-700 text-green-100 rounded-full inline-flex items-center justify-center">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-12 h-12" viewBox="0 0 24 24">
                                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                            </div>
                            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">Schedule your next appointment</h2>
                                <p className="leading-relaxed text-gray-900">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden xl:block -ml-20 pt-80 2xl:-ml-32 2xl:pt-32">
                    <Image
                        src={onlineTherapy}
                        width={600}
                        className="rounded-2xl self-center mb-10"
                        alt=""
                    />
                    <p className="text-black w-1/2">
                        At Healerbuddy, we have crafted an extremely easy, hassle
                        free process so nothing comes between you and your mental
                        health journey
                    </p>
                </div>
            </div>
        </section>
    )
}