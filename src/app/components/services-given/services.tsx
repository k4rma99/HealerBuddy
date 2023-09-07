import Image from "next/image"

import heroImage from "@/assets/images/process-image.png"

export default function Services() {
    return (
        <section className="mx-20 py-20">
            <h1 className="title text-center text-black pb-10" >Services</h1>
            <div className="carousel carousel-center space-x-4 snap-x text-center text-black text-3xl p-4 rounded-box">
                <div className="carousel-item">
                    <div className="flex flex-col">
                        <Image
                            src={heroImage}
                            width={400}
                            className="m-0 self-center mb-2"
                            alt=""
                        />
                        <h1>
                            ADHD
                        </h1>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="flex flex-col">
                        <Image
                            width={400}
                            src={heroImage}
                            className="m-0 self-center mb-2"
                            alt=""
                        />
                        <h1>
                            Anxiety
                        </h1>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="flex flex-col">
                        <Image
                            width={400}
                            src={heroImage}
                            className="m-0 self-center mb-2"
                            alt=""
                        />
                        <h1>
                            Depression
                        </h1>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="flex flex-col">
                        <Image
                            width={400}
                            src={heroImage}
                            className="m-0 self-center mb-2"
                            alt=""
                        />
                        <h1>
                            Workplace
                        </h1>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="flex flex-col">
                        <Image
                            width={400}
                            src={heroImage}
                            className="m-0 self-center mb-2"
                            alt=""
                        />
                        <h1>
                            Couples
                        </h1>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="flex flex-col">
                        <Image
                            width={400}
                            src={heroImage}
                            className="m-0 self-center mb-2"
                            alt=""
                        />
                        <h1>
                            Insomnia
                        </h1>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="flex flex-col">
                        <Image
                            width={400}
                            src={heroImage}
                            className="m-0 self-center mb-2"
                            alt=""
                        />
                        <h1>
                            BDD
                        </h1>
                    </div>
                </div>
            </div>
        </section>
    )
}