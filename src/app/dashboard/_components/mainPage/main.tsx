
import "./main.css"
import { PatientChart } from './_components/patientChart';

import profile from "@/assets/images/profile-image-stock.webp"
import noProfile from "@/assets/icons/noprofile.svg"
import Image from "next/image";
import { Table } from "@/shared/table";

const chartLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
const chartData = [52, 35, 41, 67, 22, 53, 48]
const chartColor = 'green'

const noProfileSvg = <svg className='translate-x-5 translate-y-5' width="131px" height="131px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#003322" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.24000000000000005"></g><g id="SVGRepo_iconCarrier"> <g clip-path="url(#clip0_15_82)"> <rect width="24" height="24" fill="white"></rect> <g filter="url(#filter0_d_15_82)"> <path d="M14.3365 12.3466L14.0765 11.9195C13.9082 12.022 13.8158 12.2137 13.8405 12.4092C13.8651 12.6046 14.0022 12.7674 14.1907 12.8249L14.3365 12.3466ZM9.6634 12.3466L9.80923 12.8249C9.99769 12.7674 10.1348 12.6046 10.1595 12.4092C10.1841 12.2137 10.0917 12.022 9.92339 11.9195L9.6634 12.3466ZM4.06161 19.002L3.56544 18.9402L4.06161 19.002ZM19.9383 19.002L20.4345 18.9402L19.9383 19.002ZM16 8.5C16 9.94799 15.2309 11.2168 14.0765 11.9195L14.5965 12.7737C16.0365 11.8971 17 10.3113 17 8.5H16ZM12 4.5C14.2091 4.5 16 6.29086 16 8.5H17C17 5.73858 14.7614 3.5 12 3.5V4.5ZM7.99996 8.5C7.99996 6.29086 9.79082 4.5 12 4.5V3.5C9.23854 3.5 6.99996 5.73858 6.99996 8.5H7.99996ZM9.92339 11.9195C8.76904 11.2168 7.99996 9.948 7.99996 8.5H6.99996C6.99996 10.3113 7.96342 11.8971 9.40342 12.7737L9.92339 11.9195ZM9.51758 11.8683C6.36083 12.8309 3.98356 15.5804 3.56544 18.9402L4.55778 19.0637C4.92638 16.1018 7.02381 13.6742 9.80923 12.8249L9.51758 11.8683ZM3.56544 18.9402C3.45493 19.8282 4.19055 20.5 4.99996 20.5V19.5C4.70481 19.5 4.53188 19.2719 4.55778 19.0637L3.56544 18.9402ZM4.99996 20.5H19V19.5H4.99996V20.5ZM19 20.5C19.8094 20.5 20.545 19.8282 20.4345 18.9402L19.4421 19.0637C19.468 19.2719 19.2951 19.5 19 19.5V20.5ZM20.4345 18.9402C20.0164 15.5804 17.6391 12.8309 14.4823 11.8683L14.1907 12.8249C16.9761 13.6742 19.0735 16.1018 19.4421 19.0637L20.4345 18.9402Z" fill="#003322"></path> </g> </g> <defs> <filter id="filter0_d_15_82" x="2.55444" y="3.5" width="18.8911" height="19" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix> <feOffset dy="1"></feOffset> <feGaussianBlur stdDeviation="0.5"></feGaussianBlur> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"></feColorMatrix> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_15_82"></feBlend> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_15_82" result="shape"></feBlend> </filter> <clipPath id="clip0_15_82"> <rect width="24" height="24" fill="white"></rect> </clipPath> </defs> </g></svg>


export const MainDashboard = ({ userId, userData }: { userId: String, userData: any }) => {

    function getTotalPatientCount() {
        return userData?.patients?.length;
    }

    function getTotalAppointmentCount() {

    }

    function getTotalEarnings() {

    }

    function getRatings() {
        return 1
    }

    return (
        <div className="dashboard_main">
            <div className="text-2xl">
                Hello {userData.name}
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
                            <p className="text-3xl font-semibold mb-2">{getTotalPatientCount() ?? 0}</p>
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
                                            src={userData.profilePhoto ?? noProfile}
                                            className="shadow-xl rounded-full h-auto align-middle border-none relative -mt-16 max-w-150-px" />
                                    </div>
                                </div>
                            </div>
                            <div className="text-center mt-12">
                                <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700">
                                    {userData.name}
                                </h3>
                                <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                                    <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400" />
                                    {userData.country}
                                </div>
                                <div className="text-blueGray-600">
                                    <i className="fas fa-university mr-2 text-lg text-blueGray-400" />
                                    {userData.educationalInstitute}
                                </div>
                            </div>
                            <div className="border-t border-blueGray-200 text-center">
                                <div className="w-full text-center">
                                    <div className="flex justify-center py-4">
                                        <div className="text-center">
                                            <span className="text-2xl font-bold block uppercase tracking-wide text-blueGray-600">
                                                {getRatings()}
                                            </span>
                                            <span className="text-sm text-blueGray-400">Current Rating</span>
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