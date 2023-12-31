
import "./main.css"
import { PatientChart } from './_components/patientChart';

import profile from "@/assets/images/profile-image-stock.webp"
import Image from "next/image";
import { Table } from "@/shared/table";

const chartLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
const chartData = [52, 35, 41, 67, 22, 53, 48]
const chartColor = 'green'


export const MainDashboard = () => {
    return (
        <div className="dashboard_main">
            <div className="text-2xl">
                Hello Jacob
            </div>

            <div className="main_section md:grid block">
                <div className="stats_count pt-10 ">
                    <div className="grid grid-cols-3 gap-4 w-full">
                        {/* Total Appointments Card */}
                        <div className="bg-white rounded-lg shadow-md p-4">
                            <h3 className="text-lg font-medium mb-2">Appointments</h3>
                            <p className="text-3xl font-semibold mb-2">7,365<sub className="opacity-50 text-xs"> for today</sub></p>
                        </div>

                        {/* Total Patients Card */}
                        <div className="bg-white rounded-lg shadow-md p-4">
                            <h3 className="text-lg font-medium mb-2">Patients</h3>
                            <p className="text-3xl font-semibold mb-2">5,656</p>
                        </div>

                        {/* Total Vacancies Card */}
                        <div className="bg-white rounded-lg shadow-md p-4">
                            <h3 className="text-lg font-medium mb-2">Amount Earned</h3>
                            <p className="text-3xl font-semibold mb-2">636</p>
                        </div>
                    </div>

                    <Table />
                </div>

                <div className="w-full px-4 mx-auto md:block hidden relative">
                    <div className="relative flex flex-col min-w-0 break-words bg-fi-primary w-full mb-6 shadow-xl rounded-lg mt-16">
                        <div className="px-6">
                            <div className="flex flex-wrap justify-center">
                                <div className="w-full px-4 flex justify-center">
                                    <div className="relative">
                                        <Image
                                            alt="..."
                                            src={profile}
                                            className="shadow-xl rounded-full h-auto align-middle border-none relative -mt-16 max-w-150-px" />
                                    </div>
                                </div>
                            </div>
                            <div className="text-center mt-12">
                                <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700">
                                    Jenna Stones
                                </h3>
                                <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                                    <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400" />
                                    Los Angeles, California
                                </div>
                                <div className="text-blueGray-600">
                                    <i className="fas fa-university mr-2 text-lg text-blueGray-400" />
                                    University of Computer Science
                                </div>
                            </div>
                            <div className="border-t border-blueGray-200 text-center">
                                <div className="w-full text-center">
                                    <div className="flex justify-center py-4">
                                        <div className="text-center">
                                            <span className="text-2xl font-bold block uppercase tracking-wide text-blueGray-600">
                                                22
                                            </span>
                                            <span className="text-sm text-blueGray-400">Curent Rating</span>
                                        </div>
                                    </div>
                                </div>
                                <PatientChart labels={chartLabels} data={chartData} color={chartColor} />
                            </div>
                        </div>
                    </div>
                </div>

            </div>




        </div>
    )
}