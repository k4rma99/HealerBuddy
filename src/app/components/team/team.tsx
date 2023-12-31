import Image from "next/image"
import profileImageStock from "@/assets/images/profile-image-stock.webp"
import "./teams.css"

export const Team = () => {
    return (
        <section className="text-gray-600 body-font mx-20">
            <div className="container px-5 py-24">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="title text-2xl font-medium title-font mb-4 text-gray-900">Meet our Buddies</h1>
                </div>
                <div className="flex flex-wrap -m-4">
                    <div className="p-4 lg:w-1/4 md:w-1/2">
                        <div className="h-full flex flex-col items-center text-center">
                            <Image src={profileImageStock} width={200} height={30} className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" alt="" />
                            <div className="w-full">
                                <h2 className="title-font font-medium text-lg text-gray-900">Alper Kamu</h2>
                                <h3 className="text-gray-500 mb-3">UI Developer</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 lg:w-1/4 md:w-1/2">
                        <div className="h-full flex flex-col items-center text-center">
                            <Image src={profileImageStock} width={200} height={30} className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" alt="" />
                            <div className="w-full">
                                <h2 className="title-font font-medium text-lg text-gray-900">Holden Caulfield</h2>
                                <h3 className="text-gray-500 mb-3">UI Developer</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 lg:w-1/4 md:w-1/2">
                        <div className="h-full flex flex-col items-center text-center">
                            <Image src={profileImageStock} width={200} height={30} className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" alt="" />
                            <div className="w-full">
                                <h2 className="title-font font-medium text-lg text-gray-900">Atticus Finch</h2>
                                <h3 className="text-gray-500 mb-3">UI Developer</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 lg:w-1/4 md:w-1/2">
                        <div className="h-full flex flex-col items-center text-center">
                            <Image src={profileImageStock} width={200} height={30} className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" alt="" />
                            <div className="w-full">
                                <h2 className="title-font font-medium text-lg text-gray-900">Henry Letham</h2>
                                <h3 className="text-gray-500 mb-3">UI Developer</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}