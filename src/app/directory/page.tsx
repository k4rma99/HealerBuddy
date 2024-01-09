// "use client"

// import { useState } from "react";
// import Header from "@/shared/header";
// import Image from "next/image";

// import img from "@/assets/images/profile-image-stock.webp"

// const listingsData = [
//     {
//         name: 'Tracey Nguyen',
//         title: 'Counselor/Therapist',
//         location: 'Toronto, ON, Canada',
//         specialty: 'Anxiety, Depression',
//         availability: 'Mornings, Evenings',
//         phone: '647-980-8734',
//         profileUrl: 'https://www.therapytribe.com/listing/tracey-nguyen-counselor-therapist-toronto-ontario-canada-m6p-1z2/',
//         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam cursus est sed tempor ornare. Suspendisse sit amet dolor commodo nunc pretium congue. Morbi et nibh id orci eleifend euismod. Etiam at elit vitae erat vestibulum posuere. Pellentesque at rhoncus lorem. Aenean consectetur faucibus ex ut posuere. Fusce mattis elementum sagittis. Vivamus maximus ligula eget purus euismod dictum. Nulla vulputate mattis eros vel ultricies. Proin rutrum et arcu vulputate suscipit. Proin metus dolor, sodales volutpat porttitor dignissim, lacinia et neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc congue nisi sit amet congue sollicitudin. Nam eu nunc quis urna luctus.',
//         imageSrc: img
//     },
//     {
//         name: 'John Smith',
//         title: 'Licensed Clinical Psychologist',
//         location: 'New York, NY, USA',
//         phone: '+1-212-555-1212',
//         profileUrl: 'https://www.exampletherapy.com/john-smith/',
//         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam cursus est sed tempor ornare. Suspendisse sit amet dolor commodo nunc pretium congue. Morbi et nibh id orci eleifend euismod. Etiam at elit vitae erat vestibulum posuere. Pellentesque at rhoncus lorem. Aenean consectetur faucibus ex ut posuere. Fusce mattis elementum sagittis. Vivamus maximus ligula eget purus euismod dictum. Nulla vulputate mattis eros vel ultricies. Proin rutrum et arcu vulputate suscipit. Proin metus dolor, sodales volutpat porttitor dignissim, lacinia et neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc congue nisi sit amet congue sollicitudin. Nam eu nunc quis urna luctus.',
//         imageSrc: img
//     },
//     {
//         name: 'Maria Garcia',
//         title: 'Couples Counselor',
//         location: 'Los Angeles, CA, USA',
//         phone: '+1-310-444-5555',
//         profileUrl: 'https://www.couplestherapyla.com/maria-garcia/',
//         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam cursus est sed tempor ornare. Suspendisse sit amet dolor commodo nunc pretium congue. Morbi et nibh id orci eleifend euismod. Etiam at elit vitae erat vestibulum posuere. Pellentesque at rhoncus lorem. Aenean consectetur faucibus ex ut posuere. Fusce mattis elementum sagittis. Vivamus maximus ligula eget purus euismod dictum. Nulla vulputate mattis eros vel ultricies. Proin rutrum et arcu vulputate suscipit. Proin metus dolor, sodales volutpat porttitor dignissim, lacinia et neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc congue nisi sit amet congue sollicitudin. Nam eu nunc quis urna luctus.',
//         imageSrc: img
//     },
//     {
//         name: 'John Smith',
//         title: 'Licensed Clinical Psychologist',
//         location: 'New York, NY, USA',
//         phone: '+1-212-555-1212',
//         profileUrl: 'https://www.exampletherapy.com/john-smith/',
//         description: 'Specializing in anxiety, depression, and trauma therapy.',
//         imageSrc: img
//     },
//     {
//         name: 'Maria Garcia',
//         title: 'Couples Counselor',
//         location: 'Los Angeles, CA, USA',
//         phone: '+1-310-444-5555',
//         profileUrl: 'https://www.couplestherapyla.com/maria-garcia/',
//         description: 'Helping couples improve communication and rebuild connection.',
//         imageSrc: img
//     },
//     {
//         name: 'John Smith',
//         title: 'Licensed Clinical Psychologist',
//         location: 'New York, NY, USA',
//         phone: '+1-212-555-1212',
//         profileUrl: 'https://www.exampletherapy.com/john-smith/',
//         description: 'Specializing in anxiety, depression, and trauma therapy.',
//         imageSrc: img
//     },
//     // Add more listings data here
// ];

// function Directory() {


//     const [filters, setFilters] = useState({
//         location: '',
//         specialty: '',
//         availability: '',
//     });

//     const handleFilterChange = (filterType, value) => {
//         setFilters({ ...filters, [filterType]: value });
//     };

//     return (
//         <div className="directory">
//             <Header />
//             <div className="container mx-auto p-20">
//                 <nav className="flex items-center justify-between py-4">
//                     <h1 className="text-2xl font-semibold">Therapist Listings</h1>
//                     <div className="flex items-center space-x-4">
//                         <select className="border border-gray-300 rounded-md px-4 py-2" onChange={(e) => handleFilterChange('location', e.target.value)}>
//                             <option value="">All Locations</option>
//                             {/* ... location options */}
//                         </select>
//                         <select className="border border-gray-300 rounded-md px-4 py-2" onChange={(e) => handleFilterChange('specialty', e.target.value)}>
//                             <option value="">All Specialties</option>
//                             {/* ... specialty options */}
//                         </select>
//                         <select className="border border-gray-300 rounded-md px-4 py-2" onChange={(e) => handleFilterChange('availability', e.target.value)}>
//                             <option value="">All Availabilities</option>
//                             {/* ... availability options */}
//                         </select>
//                     </div>
//                 </nav>

//                 <div className="grid grid-cols-1 gap-2 place-items-center"> {/* Single column grid */}
//                     {listingsData.map((listing) => (
//                         <div key={listing.name} className="rounded-lg overflow-hidden shadow-md mb-5 w-3/4">
//                             <div className="grid grid-cols-2"> {/* Single column for text */}
//                                 <div className="p-4">
//                                     <h2 className="text-lg font-medium">{listing.name}</h2>
//                                     <p className="text-gray-600">{listing.title}</p>
//                                     <p className="text-gray-500">{listing.location}</p>
//                                     <div className="flex items-center mt-4">
//                                         <p className="text-gray-500">{listing.phone}</p>

//                                     </div>
//                                     <p className="mt-4 text-gray-700">{listing.description}</p>
//                                     <button href={listing.profileUrl} className="mt-4 btn btn-link  text-white bg-fi-button hover:bg-fi-secondary p-2 rounded-lg">View Profile</button>
//                                 </div>
//                                 <div className="col-span-1 justify-self-end">
//                                     <Image
//                                         src={listing.imageSrc}
//                                         alt={listing.name}
//                                         width={500}
//                                         height={500}
//                                         objectFit="cover"
//                                         className="object-cover rounded-t-lg"
//                                     />
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Directory;

"use client"

import Footer from "@/shared/footer"
import Header from "@/shared/header"
import React, { useState } from "react"

import profileImageStock from "@/assets/images/profile-image-stock.webp"

import { FilterCategory } from "../constants"

import { ListItem } from "./_components/item"
import { ItemProps } from "../model"

const doctorInfo: Array<ItemProps> = [
    {
        docInfo: {
            docId: "1",
            name: "Babu K Das",
            age: 23,
            videoMessage: "",
            profileImage: profileImageStock,
            specialities: [1, 2, 5, 6, 4, 3],
            languages: [1, 2, 4, 3],
            targetGroups: [2, 4, 6],
            locations: [6, 3, 1],
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
            specialities: [7, 4, 2],
            languages: [1, 2, 4, 3],
            targetGroups: [2, 4, 6],
            locations: [6, 3, 1],
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
            specialities: [6, 8, 3],
            languages: [1, 2, 4, 3],
            targetGroups: [2, 4, 6],
            locations: [6, 3, 1],
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

    return (
        <main>
            <Header />

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