import Image from "next/image"

import doctorMan from "@/assets/icons/doctor-man.svg"
import schedule from "@/assets/icons/schedule-calendar.svg"
import treatment from "@/assets/icons/medicine.svg"
import privacy from "@/assets/icons/privacy.svg"

export default function ChooseUs() {
    return (
        <section className="mx-20 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="title text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">Why Choose Us?</h1>
                </div>
                <div className="flex flex-wrap -m-4">
                    <div className="p-4 lg:w-1/2">
                        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                            <Image src={doctorMan} alt="" className="w-28 h-28" />
                            <span className="inline-block ml-2 w-1 h-24 rounded bg-green-700 mt-5 "></span>
                            <div className="div"></div>
                            <div className="flex-grow sm:pl-8">
                                <h2 className="title-font font-medium text-lg text-gray-900">Experienced and Caring Therapists</h2>
                                <p className="mb-4">Our team of therapists comprises experienced and
                                    compassionate professionals who specialize in various areas
                                    of mental health.</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 lg:w-1/2">
                        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                            <Image src={schedule} alt="" className="w-28 h-28" />
                            <span className="inline-block ml-2 w-1 h-24 rounded bg-green-700 mt-5 "></span>
                            <div className="flex-grow sm:pl-8">
                                <h2 className="title-font font-medium text-lg text-gray-900">Convenient and Flexible Sessions</h2>
                                <p className="mb-4">We understand that life can be hectic, which is why we offer
                                    online therapy sessions that fit seamlessly into your schedule.</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 lg:w-1/2">
                        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                            <Image src={treatment} alt="" className="w-28 h-28" />
                            <span className="inline-block ml-2 w-1 h-24 rounded bg-green-700 mt-5 "></span>
                            <div className="flex-grow sm:pl-8">
                                <h2 className="title-font font-medium text-lg text-gray-900">Personalized Treatment Plans</h2>
                                <p className="mb-4">We believe in a holistic approach to mental wellness. When
                                    you choose us, you'll receive a personalized treatment plan
                                    designed to address your unique challenges and goals.</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 lg:w-1/2">
                        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                            <Image src={privacy} alt="" className="w-28 h-28" />
                            <span className="inline-block ml-2 w-1 h-24 rounded bg-green-700 mt-5 "></span>
                            <div className="flex-grow sm:pl-8">
                                <h2 className="title-font font-medium text-lg text-gray-900">Privacy and Confidentiality</h2>
                                <p className="mb-4">Your privacy and confidentiality are of utmost importance to
                                    us. Our secure and encrypted platform ensures that your
                                    therapy sessions remain private and protected.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}