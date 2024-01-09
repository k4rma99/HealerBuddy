
import profile from "@/assets/images/profile-image-stock.webp"
import Image from "next/image";

const tableData = [
    {
        id: "#3066",
        date: "Jan 6, 2022",
        status: {
            h2: "Requested",
        },
        user: {
            avatar: profile,
            name: "Arthur Melo",
            email: "authurmelo@example.com",
        },
        actions: [],
    },
    {
        id: "#3066",
        date: "Jan 6, 2022",
        status: {
            h2: "Requested",
        },
        user: {
            avatar: profile,
            name: "Arthur Melo",
            email: "authurmelo@example.com",
        },
        actions: [],
    },
];

const columnNames = [
    "Patient Id", "DOA", "Appointment Status", "Name", "Actions"
]

export function Table({ }) {
    return (
        <div className="py-4 mx-auto">
            <div className="flex flex-col">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200 ">
                                <thead className="bg-gray-50">
                                    <tr>
                                        {
                                            columnNames.map((item, index) => (
                                                <th
                                                    scope="col"
                                                    className="px-4 py-5 text-sm font-normal text-left text-fi-midnight"
                                                >
                                                    {item}
                                                </th>
                                            ))
                                        }
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200 ">
                                    {tableData.map((row, index) => (
                                        <tr key={index}>
                                            <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                <div className="inline-flex items-center gap-x-3">
                                                    <span>{row.id}</span>
                                                </div>
                                            </td>
                                            <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                                                {row.date}
                                            </td>
                                            <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-emerald-100/60 ">
                                                    <h2 className="text-sm font-normal">{row.status.h2}</h2>
                                                </div>
                                            </td>
                                            <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                                                <div className="flex items-center gap-x-2">
                                                    <Image className="object-cover rounded-full"
                                                        width={50}
                                                        height={50}
                                                        src={row.user.avatar}
                                                        alt="" />
                                                    <div className="pl-5">
                                                        <h2 className="text-sm font-medium text-fi-midnight ">{row.user.name}</h2>
                                                        <p className="text-xs font-normal text-gray-600 ">{row.user.email}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-4 py-4 text-sm whitespace-nowrap">
                                                <div className="flex items-center gap-x-6">
                                                    {/* Add actions here using row.actions */}
                                                    {/* For example, you could render buttons for "Archive" and "Download" */}
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between mt-6">
                <a
                    href="#"
                    className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 "
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-5 h-5 rtl:-scale-x-100"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                        />
                    </svg>
                    <span>previous</span>
                </a>
                <div className="items-center hidden md:flex gap-x-3">
                    <a
                        href="#"
                        className="px-2 py-1 text-sm text-blue-500 rounded-md bg-blue-100/60"
                    >
                        1
                    </a>
                </div>
                <a
                    href="#"
                    className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 "
                >
                    <span>Next</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-5 h-5 rtl:-scale-x-100"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                    </svg>
                </a>
            </div>
        </div>

    );
}
