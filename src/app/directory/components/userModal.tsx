import { UserModalProps } from "@/app/model";
import ReactPortal from "@/shared/ReactPortal";
import { use, useEffect } from "react";
import Image from "next/image";

import calendarSvg from "@/assets/icons/book-calendar.svg"
import { SpecialitiesGroups } from "@/app/constants";
import { redirect } from "next/dist/server/api-utils";
import Link from "next/link";

export const UserModal = ({ isOpen, handleClose, userData }: UserModalProps) => {

    // Escape key close
    useEffect(() => {
        const closeOnEscapeKey = (e: KeyboardEvent) => e.key === 'Escape' ? handleClose() : null;
        document.body.addEventListener('keydown', closeOnEscapeKey);
        return () => {
            document.body.removeEventListener('keydown', closeOnEscapeKey);
        };
    }, [handleClose])

    // Disable scroll
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return (): void => {
            document.body.style.overflow = "unse";
        };
    }, [isOpen]);

    // outside click close
    useEffect(() => {
        const handleClickOutside = (e: Event) => e.target === document.getElementById("outer") ? handleClose() : null;
        document.addEventListener("click", handleClickOutside, false);
        return () => {
            document.removeEventListener("click", handleClickOutside, false);
        };
    }, [handleClose]);

    if (!isOpen) return null;

    return (
        <ReactPortal wrapperId="modal-portal">
            <>
                <div className="fixed top-0 left-0 w-screen h-screen z-40 bg-neutral-800 opacity-50" id="outer" />
                <div className="fixed overflow-y-scroll rounded min-w-fit bg-transparent inset-y-10 inset-x-28 z-50">
                    <div className="p-8 bg-white shadow mt-24">

                        <div className="grid grid-cols-1 md:grid-cols-3">

                            <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
                                <div>
                                    <p className="font-bold text-gray-700 text-xl">22</p>
                                    <p className="text-gray-400">Sessions</p>
                                </div>
                                <div>
                                    <p className="font-bold text-gray-700 text-xl">10</p>
                                    <p className="text-gray-400">Patients</p>
                                </div>
                                <div>
                                    <p className="font-bold text-gray-700 text-xl">8/10</p>
                                    <p className="text-gray-400">Rating</p>
                                </div>
                            </div>
                            <div className="relative">

                                <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                                    <Image
                                        src={userData.profileImage}
                                        alt=""
                                        className="mx-auto h-auto w-full rounded-full"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row justify-between">
                                <Link href={"/register"}>
                                    <button className="mr-2 mb-4 flex cursor-pointer items-center justify-between rounded-md bg-emerald-400 py-2 px-5 text-center text-white transition duration-150 ease-in-out hover:translate-y-1 hover:bg-emerald-500">
                                        <Image src={calendarSvg} alt={calendarSvg} className="w-5 h-5 mr-3" />
                                        Book Session
                                    </button>
                                </Link>
                                <button
                                    className="mr-2 mb-4 flex cursor-pointer items-center justify-center rounded-md border py-2 px-8 text-center text-gray-500 transition duration-150 ease-in-out hover:translate-y-1 hover:bg-fi-darker hover:text-white"
                                >
                                    Video Message
                                </button>
                            </div>

                        </div>
                        <div className="mt-20 text-center border-b pb-12">
                            <h1 className="text-4xl font-medium text-gray-700">
                                {userData.name}, <span className="font-light text-gray-500">{userData.age}</span>
                            </h1>
                        </div>
                        <div className="my-10 mx-14 flex flex-col justify-center">
                            <p className="text-gray-600 text-center pb-5 font-light ">
                                {userData.contentMessage}
                            </p>

                            <h2 className="mb-2 text-base font-semibold text-fi-midnight">
                                Specialiazed In:
                            </h2>
                            <ul className="max-w-md mx-14 space-y-1 text-fi-midnight list-disc list-inside">
                                {
                                    userData.specialities ?
                                        userData.specialities.map((sIndex: number) => {
                                            return (
                                                <li className="text-sm">{SpecialitiesGroups[sIndex]}</li>
                                            )
                                        })
                                        :
                                        <div className="no_special"></div>
                                }
                            </ul>
                        </div>

                        {/* Reviews */}
                        <div className="mx-auto max-w-screen-lg pb-10 ">
                            <div className="flex flex-col items-center">
                                <div className="text-center">
                                    <h1 className="text-4xl font-medium text-gray-700">
                                        Healers Reviews
                                    </h1>
                                </div>
                                <div className="relative mx-auto mt-5 grid max-w-lg grid-cols-1 text-fi-midnight gap-6 md:max-w-none md:grid-cols-1 lg:gap-10">
                                    <div className="flex flex-col overflow-hidden shadow-xl shadow-blue-200">
                                        <div className="flex flex-1 flex-col justify-between bg-white p-6 lg:py-8 lg:px-7">
                                            <div className="flex-1">
                                                <div className="flex items-center">
                                                    <svg
                                                        className="h-6 w-6 text-amber-300/70"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                    >
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                </div>
                                                <blockquote className="mt-8 flex-1">
                                                    <p className="leading-relaxed ">
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                        Praesentium dolores facere repellendus, velit quis fugiat.
                                                    </p>
                                                </blockquote>
                                            </div>
                                            <div className="mt-8 flex items-center">
                                                <img
                                                    className="h-11 w-11 flex-shrink-0 rounded-full object-cover"
                                                    src="/images/Ju6-1negUEjTnBKw_ZP4r.png"
                                                    alt=""
                                                />
                                                <div className="ml-4">
                                                    <p className="font-bold ">
                                                        James Khawalski
                                                    </p>
                                                    <p className="mt-0.5 text-sm">CEO, Mavoline</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </>
        </ReactPortal>
    );
}