
import Image from "next/image";
import React, { useState } from "react";
import { ItemProps } from "@/app/model";
import { SpecialitiesGroups, sltData } from "@/app/constants";

import calendarSvg from "@/assets/icons/book-calendar.svg"

import "./styles.css";
import { UserModal } from "./userModal";

export const ListItem: React.FC<ItemProps> = (props) => {

    const [showModal, setShowModal] = useState(false)

    function openUserModal(): void {

    }


    // console.log(props)
    return (
        <div className="person_item relative w-full  rounded-3xl first:mt-0 text-fi-midnight">

            {
                showModal && (
                    <UserModal 
                        isOpen={showModal}
                        handleClose={() => setShowModal(!showModal)}
                        userData={props.docInfo}
                    />
                )
            }
            <div className="m-4 mx-auto max-w-screen-lg rounded-md border border-gray-100 text-gray-600 shadow-md">
                <div className="relative flex h-full flex-col text-gray-600 md:flex-row">
                    <div className="relative p-8 md:w-4/6">
                        <div className="flex flex-col md:flex-row">
                            <h2 className="mb-2 text-2xl font-black">{props.docInfo.name}</h2>
                        </div>

                        <h2 className="mb-2 text-base font-semibold text-fi-midnight">
                            Specialiazed In:
                        </h2>
                        <ul className="max-w-md space-y-1 text-fi-midnight list-disc list-inside">
                            {
                                props.docInfo.specialities ?
                                    props.docInfo.specialities.slice(0,3).map((sIndex: number) => {
                                        return (
                                            <li className="text-sm">{SpecialitiesGroups[sIndex]}</li>
                                        )
                                    })
                                    :
                                    <div className="no_special"></div>
                            }
                        </ul>

                        <p className="mt-3 font-sans text-base tracking-normal">
                            {props.docInfo.contentMessage}
                        </p>

                        <div className="mt-8 flex flex-col sm:flex-row">
                            <button className="mr-2 mb-4 flex cursor-pointer items-center justify-between rounded-md bg-emerald-400 py-2 px-5 text-center text-white transition duration-150 ease-in-out hover:translate-y-1 hover:bg-emerald-500">
                                <Image src={calendarSvg} alt={calendarSvg} className="w-5 h-5 mr-3" />
                                Book Session
                            </button>
                            <button
                                onClick={() => setShowModal(!showModal)}
                                className="mr-2 mb-4 flex cursor-pointer items-center justify-center rounded-md border py-2 px-8 text-center text-gray-500 transition duration-150 ease-in-out hover:translate-y-1 hover:bg-fi-darker hover:text-white"
                                data-ripple-light="true"
                                data-dialog-target="animated-dialog"
                            >
                                Know More
                            </button>
                        </div>
                    </div>
                    <div className="mx-auto flex items-center px-5 pt-1 md:p-8">
                        <Image src={props.docInfo.profileImage} alt={props.docInfo.name} width={500} height={500} className="block h-auto max-w-full rounded-md shadow-lg" />
                    </div>
                </div>
            </div>
        </div>

    )
}