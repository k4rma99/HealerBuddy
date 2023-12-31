"use client;"

import React, { useState } from 'react';
import dayjs from 'dayjs';


interface Appointment {
    date: Date;
    name: string;
}

interface CalendarProps {
    appointments: Appointment[];
}

export const Calendar: React.FC<CalendarProps> = ({ appointments }) => {

    const [currentMonth, setCurrentMonth] = useState(dayjs().month());
    const [currentYear, setCurrentYear] = useState(dayjs().year());
    const [selectedDate, setSelectedDate] = useState<dayjs.Dayjs | null>(null);
    const weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];


    const renderDays = () => {
      
        // Calculate first day of the month, adjusting for Sunday-based indexing
        const firstDay = dayjs(`${currentYear}-${currentMonth}-01`).day() || 7; // Ensure it's 0 for Sunday
      
        // Corrected calculation for days in the previous month, accounting for Sunday-based indexing
        const daysInPrevMonth = dayjs(`${currentYear}-${currentMonth}`).subtract(1, 'month').daysInMonth();
      
        // Calculate the first day's offset to align with the correct weekday
        const offset = (daysInPrevMonth + firstDay) % 7;
      
        const days = [];
        for (let i = 1; i <= dayjs(`${currentYear}-${currentMonth + 1}`).daysInMonth(); i++) {
          // Corrected date calculation with offset
          const day = dayjs(`${currentYear}-${currentMonth + 1}-${i - offset}`);
          days.push({
            date: day.format('D'),
            weekday: day.format('ddd'),
            isCurrentMonth: day.month() === currentMonth,
            isToday: day.isSame(dayjs(), 'day'),
            isSelected: selectedDate && day.isSame(selectedDate, 'day'),
          });
        }
        console.log(days)
        return days;
      }
      

    return (
        <div className="flex items-center justify-center">
            <div className="max-w-sm w-full shadow-lg">
                <div className="md:p-8 p-5  bg-white rounded-t">
                    <div className="px-4 flex items-center justify-between">
                        <span
                            tabIndex={0}
                            className="focus:outline-none  text-base font-bold text-gray-800"
                        >
                            {dayjs().format('MMMM')} {currentYear}
                        </span>
                        <div className="flex items-center">
                            <button
                                aria-label="calendar backward"
                                className="focus:text-gray-400 hover:text-gray-400 text-gray-800"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-tabler icon-tabler-chevron-left"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <polyline points="15 6 9 12 15 18" />
                                </svg>
                            </button>
                            <button
                                aria-label="calendar forward"
                                className="focus:text-gray-400 hover:text-gray-400 ml-3 text-gray-800"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-tabler  icon-tabler-chevron-right"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <polyline points="9 6 15 12 9 18" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="flex items-center justify-between pt-12 overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr>
                                    {
                                        weekdays.map((weekday, index) => (
                                            <th>
                                                <div className="w-full flex justify-center">
                                                    <p className="text-base font-medium text-center text-gray-800">
                                                        {weekday}
                                                    </p>
                                                </div>
                                            </th>
                                        ))
                                    }
                                </tr>
                            </thead>
                            <tbody>
                                {Array.from({ length: 5 }, (_, row) => (
                                    <tr key={row}>
                                        {renderDays().slice(row * 7, (row + 1) * 7).map((day, index) => (
                                            <td
                                                key={index}
                                            // ... other conditional classes and onClick handler
                                            >
                                                {
                                                    day.isCurrentMonth ? (
                                                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                                            <p className="text-base text-gray-500 font-medium">{day.date}</p>
                                                        </div>
                                                    ) : (
                                                        <div className="px-2 py-2 text-gray-300">{day.date}</div> // Example for styling days of other months
                                                    )
                                                }
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="md:py-8 py-5 md:px-16 px-5  bg-gray-50 rounded-b">
                    <div className="px-4">
                        <div className="border-b pb-4 border-gray-400 border-dashed">
                            <p className="text-xs font-light leading-3 text-gray-500 ">
                                9:00 AM
                            </p>
                            <a
                                tabIndex={0}
                                className="focus:outline-none text-lg font-medium leading-5 text-gray-800 mt-2"
                            >
                                Zoom call with design team
                            </a>
                            <p className="text-sm pt-2 leading-4 text-gray-600 ">
                                Discussion on UX sprint and Wireframe review
                            </p>
                        </div>
                        <div className="border-b pb-4 border-gray-400 border-dashed pt-5">
                            <p className="text-xs font-light leading-3 text-gray-500 ">
                                10:00 AM
                            </p>
                            <a
                                tabIndex={0}
                                className="focus:outline-none text-lg font-medium leading-5 text-gray-800 mt-2"
                            >
                                Orientation session with new hires
                            </a>
                        </div>
                        <div className="border-b pb-4 border-gray-400 border-dashed pt-5">
                            <p className="text-xs font-light leading-3 text-gray-500 ">
                                9:00 AM
                            </p>
                            <a
                                tabIndex={0}
                                className="focus:outline-none text-lg font-medium leading-5 text-gray-800 mt-2"
                            >
                                Zoom call with design team
                            </a>
                            <p className="text-sm pt-2 leading-4 text-gray-600 ">
                                Discussion on UX sprint and Wireframe review
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// <a
// role="link"
// tabIndex={0}
// className="focus:outline-none  focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:bg-indigo-500 hover:bg-indigo-500 text-base w-8 h-8 flex items-center justify-center font-medium text-white bg-indigo-700 rounded-full"
// >
// 8
// </a>