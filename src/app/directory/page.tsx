"use client"

import Footer from "@/shared/footer"
import Header from "@/shared/header"
import React, { useState } from "react"

import profileImageStock from "@/assets/images/profile-image-stock.jpg"

import { FilterCategory } from "../constants"

import { ListItem } from "./components/item"
import { ItemProps } from "../model"

const doctorInfo: Array<ItemProps> = [
    {
        docInfo: {
            docId: "1",
            name: "Babu K Das",
            age: 23,
            videoMessage: "",
            profileImage: profileImageStock,
            specialities: [1,2,5,6,4,3],
            languages: [1,2,4,3],
            targetGroups:[2,4,6],
            locations: [6,3,1],
            contentMessage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel lorem vitae dui facilisis luctus et non sapien. Fusce porta consequat enim, egestas vehicula lacus rutrum in. Donec vehicula in nisl vitae consequat. Curabitur vulputate, turpis sit amet tristique sodales, orci odio consectetur ex, elementum volutpat leo felis nec nibh.",
            profilePath: ""
        },
    },
    {
        docInfo: {
            docId: "1",
            name: "Raju K Das",
            age: 23,
            videoMessage: "",
            profileImage: profileImageStock,
            specialities: [7,4,2],
            languages: [1,2,4,3],
            targetGroups:[2,4,6],
            locations: [6,3,1],
            contentMessage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel lorem vitae dui facilisis luctus et non sapien. Fusce porta consequat enim, egestas vehicula lacus rutrum in. Donec vehicula in nisl vitae consequat. Curabitur vulputate, turpis sit amet tristique sodales, orci odio consectetur ex, elementum volutpat leo felis nec nibh.",
            profilePath: ""
        },

    },
    {
        docInfo: {
            docId: "1",
            name: "Jose K Das",
            age: 23,
            videoMessage: "",
            profileImage: profileImageStock,
            specialities: [6,8,3],
            languages: [1,2,4,3],
            targetGroups:[2,4,6],
            locations: [6,3,1],
            contentMessage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel lorem vitae dui facilisis luctus et non sapien. Fusce porta consequat enim, egestas vehicula lacus rutrum in. Donec vehicula in nisl vitae consequat. Curabitur vulputate, turpis sit amet tristique sodales, orci odio consectetur ex, elementum volutpat leo felis nec nibh.",
            profilePath: ""
        },

    }
]

export default function Directory() {

    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [filteredData, setFilteredData] = useState(doctorInfo);

    const trendingSlt = ["adhd", "depes", "stress"]

    function handleClearButton(): void {

    }

    function handleFilter(event: Event,): void {

    }
    // console.log(filteredData)

    return (
        <main>
            <Header backgroundColor="fi-white" />

            <div className="heading mx-36 text-center text-fi-midnight space-y-5 mt-10">
                <h1 className="text-4xl" >Find your Buddy</h1>
                <h3 className="text-xl" > Find tailored support by location, specialization, or therapy approach. Prioritize your mental well-being and connect with compassionate professionals dedicated to your healing and growth.</h3>
            </div>

            <div className="main_content hidden md:flex md:flex-row justify-center mx-36 my-20 space-x-10">
                {/* Filters */}

                <div className="filters text-fi-darker w-1/3">
                    <span className="flex place-content-between mb-10 px-2">Filters<button onClick={handleClearButton}>Clear All</button></span>
                    {
                        Object.values(FilterCategory).map((item: any) => {
                            return (
                                <details className="group transition-all duration-150 mt-5 overflow-x-hidden text-sm">
                                    <summary className="transition-all duration-500 flex cursor-pointer items-center rounded-lg py-2 px-2 hover:bg-gray-100">
                                        <span className="text-sm font-medium">{item.labelname}</span>
                                        <span className="ml-auto shrink-0 transition duration-300 group-open:-rotate-180">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </span>
                                    </summary>
                                    {
                                        item.data.map((filterDataItem: any) => {
                                            return (
                                                <div className="mt-4 flex flex-col transition-all duration-500 px-2 filter_nav">
                                                    <div className="flex items-center">
                                                        <input
                                                            id={filterDataItem}
                                                            type="checkbox"
                                                            name={filterDataItem}
                                                            className="h-5 w-5 rounded border-gray-300 bg-fi-primary"
                                                        />
                                                        <label htmlFor={filterDataItem} className="ml-3 text-sm font-medium">
                                                            {" "}
                                                            {filterDataItem}{" "}
                                                        </label>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </details>
                            )
                        })
                    }
                </div>

                {/* Content */}
                <div className="docs_list flex flex-col items-center w-full">
                    {
                        filteredData.map((item) => {
                            return (
                                <ListItem docInfo={item.docInfo} key="" />
                            )
                        })
                    }
                </div>
            </div>

            <Footer />
        </main>
    )
}