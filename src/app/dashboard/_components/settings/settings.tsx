import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import './settings.css'

export interface ProviderData {
    firstName: String
    lastName: String
    gender: String;
    age: Number
    dob: Date
    profilePhoto: any
    videoMessage: any
    bioMessage: any
    qualifications: String[]
    crpoRegNumber: Number
}

const AccountSettings = () => {
    const [activeTab, setActiveTab] = useState('personalInfo');
    const [user, setUser] = useState<ProviderData>();
    const [isDirty, setIsDirty] = useState(false);
    const params = useSearchParams();
    const router = useRouter();

    const storedUser = JSON.parse(localStorage.getItem("user") ?? "{}");

    useEffect(() => {
        const fetchUser = async () => {
            const res = await fetch(`/api/users/${storedUser?.userId}`);
            const fetchedUser = await res.json();
            setUser(fetchedUser);
        };
        fetchUser();
    }, [params.get('userId')]);

    const handleTabChange = (tab: any) => {
        setActiveTab(tab);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
        setIsDirty(true); // Mark as dirty
    };

    const handleImageChange = (e: any) => {
        const reader = new FileReader();
        const file = e.target?.files[0];

        reader.onload = (e) => {
            setUser({ ...user, profilePhoto: e.target.result }); // Update user state directly
        };

        reader.readAsDataURL(file);
    };


    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const res = await fetch(`/api/users/${storedUser?.userId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user),
        });
        if (res.ok) {
            const updatedUser = await res.json();
            setUser(updatedUser);
            setIsDirty(false); // Reset dirty state
            router.push('/account-settings'); // Reload page for seamless updates
        } else {
            // Handle errors
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Account Settings</h1>

            <nav className="flex justify-center mb-4 ">
                {/* Tabs with content rendering */}
                <button
                    className={`px-4 py-2 font-medium text-fi-darker border-b-2 border-transparent hover:border-fi-darker ${activeTab === 'personalInfo' ? 'border-fi-darker text-fi-darker' : ''
                        }`}
                    onClick={() => handleTabChange('personalInfo')}
                >
                    Personal Information
                </button>
                <button
                    className={`px-4 py-2 font-medium text-fi-darker border-b-2 border-transparent hover:border-fi-darker ${activeTab === 'professionalInfo' ? 'border-fi-darker text-fi-darker' : ''
                        }`}
                    onClick={() => handleTabChange('professionalInfo')}
                >
                    Professional Data
                </button>
                <button
                    className={`px-4 py-2 font-medium text-fi-darker border-b-2 border-transparent hover:border-fi-darker ${activeTab === 'availability' ? 'border-fi-darker text-fi-darker' : ''
                        }`}
                    onClick={() => handleTabChange('availability')}
                >
                    Availability
                </button>
                <button
                    className={`px-4 py-2 font-medium text-fi-darker border-b-2 border-transparent hover:border-fi-darker ${activeTab === 'accountDetails' ? 'border-fi-darker text-fi-darker' : ''
                        }`}
                    onClick={() => handleTabChange('accountDetails')}
                >
                    Account Details
                </button>
                <button
                    className={`px-4 py-2 font-medium text-fi-darker border-b-2 border-transparent hover:border-fi-darker ${activeTab === 'profile' ? 'border-fi-darker text-fi-darker' : ''
                        }`}
                    onClick={() => handleTabChange('profile')}
                >
                    Profile Settings
                </button>
            </nav>

            <div className="p-4 relative border rounded shadow-lg">
                {/* Render the active tab content */}
                {activeTab === 'personalInfo' && (
                    <div className="">
                        <div className="mb-4">
                            <label htmlFor="profilePhoto" className="block text-gray-700 font-bold mb-2">
                                Profile Photo
                            </label>
                            <div className="flex items-center justify-center">
                                <div
                                    className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-gray-200 shadow-md cursor-pointer"
                                >
                                    {user?.profilePhoto ?
                                        <Image
                                            src={user.profilePhoto}
                                            alt="Profile Photo"
                                            className="w-full h-full"
                                            layout='fill'
                                            objectFit='cover'
                                        />
                                        :
                                        <svg className='translate-x-5 translate-y-5' width="131px" height="131px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#003322" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.24000000000000005"></g><g id="SVGRepo_iconCarrier"> <g clip-path="url(#clip0_15_82)"> <rect width="24" height="24" fill="white"></rect> <g filter="url(#filter0_d_15_82)"> <path d="M14.3365 12.3466L14.0765 11.9195C13.9082 12.022 13.8158 12.2137 13.8405 12.4092C13.8651 12.6046 14.0022 12.7674 14.1907 12.8249L14.3365 12.3466ZM9.6634 12.3466L9.80923 12.8249C9.99769 12.7674 10.1348 12.6046 10.1595 12.4092C10.1841 12.2137 10.0917 12.022 9.92339 11.9195L9.6634 12.3466ZM4.06161 19.002L3.56544 18.9402L4.06161 19.002ZM19.9383 19.002L20.4345 18.9402L19.9383 19.002ZM16 8.5C16 9.94799 15.2309 11.2168 14.0765 11.9195L14.5965 12.7737C16.0365 11.8971 17 10.3113 17 8.5H16ZM12 4.5C14.2091 4.5 16 6.29086 16 8.5H17C17 5.73858 14.7614 3.5 12 3.5V4.5ZM7.99996 8.5C7.99996 6.29086 9.79082 4.5 12 4.5V3.5C9.23854 3.5 6.99996 5.73858 6.99996 8.5H7.99996ZM9.92339 11.9195C8.76904 11.2168 7.99996 9.948 7.99996 8.5H6.99996C6.99996 10.3113 7.96342 11.8971 9.40342 12.7737L9.92339 11.9195ZM9.51758 11.8683C6.36083 12.8309 3.98356 15.5804 3.56544 18.9402L4.55778 19.0637C4.92638 16.1018 7.02381 13.6742 9.80923 12.8249L9.51758 11.8683ZM3.56544 18.9402C3.45493 19.8282 4.19055 20.5 4.99996 20.5V19.5C4.70481 19.5 4.53188 19.2719 4.55778 19.0637L3.56544 18.9402ZM4.99996 20.5H19V19.5H4.99996V20.5ZM19 20.5C19.8094 20.5 20.545 19.8282 20.4345 18.9402L19.4421 19.0637C19.468 19.2719 19.2951 19.5 19 19.5V20.5ZM20.4345 18.9402C20.0164 15.5804 17.6391 12.8309 14.4823 11.8683L14.1907 12.8249C16.9761 13.6742 19.0735 16.1018 19.4421 19.0637L20.4345 18.9402Z" fill="#003322"></path> </g> </g> <defs> <filter id="filter0_d_15_82" x="2.55444" y="3.5" width="18.8911" height="19" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix> <feOffset dy="1"></feOffset> <feGaussianBlur stdDeviation="0.5"></feGaussianBlur> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"></feColorMatrix> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_15_82"></feBlend> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_15_82" result="shape"></feBlend> </filter> <clipPath id="clip0_15_82"> <rect width="24" height="24" fill="white"></rect> </clipPath> </defs> </g></svg>
                                    }
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={(e) => handleImageChange(e)}
                                        className="w-full h-full opacity-0 absolute top-0 left-0"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="mb-4 w-3/4">
                                <label htmlFor="firstName" className="block text-gray-700 font-bold mb-2 w-3/4">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    name="firstName"
                                    id="firstName"
                                    value={user?.firstName}
                                    onChange={handleInputChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div
                                className="mb-4 w-3/4">
                                <label
                                    htmlFor="lastName" className="block text-gray-700 font-bold mb-2">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    name="lastName"
                                    id="lastName"
                                    value={user?.lastName}
                                    onChange={handleInputChange}


                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div
                                className="mb-4 w-3/4">
                                <label
                                    htmlFor="gender" className="block text-gray-700 font-bold mb-2">
                                    Gender
                                </label>
                                <select
                                    name="gender"
                                    id="gender"
                                    value={user?.gender}
                                    onChange={handleInputChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                >
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="transgender">Transgender</option>
                                    <option value="genderfluid">Genderfluid</option>
                                    <option value="nonBinary">Non-binary</option>
                                    <option value="genderqueer">Genderqueer</option>
                                    <option value="agender">Agender</option>
                                    <option value="genderNonConforming">Gender non-conforming</option>
                                    <option value="preferNotToDisclose">Prefer not to disclose</option>
                                </select>
                            </div>
                            <div className="mb-4 w-3/4">
                                <label htmlFor="dateOfBirth" className="block text-gray-700 font-bold mb-2">
                                    Date of Birth
                                </label>
                                <DatePicker
                                    selected={user?.dob}
                                    onChange={(date) => handleInputChange({ name: 'dateOfBirth', value: date })}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                        </div>
                    </div>
                )}

                {/* Professional Information tab */}
                {activeTab === 'professionalInfo' && (
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="crpoRegNumber" className="block text-gray-700 font-bold mb-2">
                                CRPO Registration Number
                            </label>
                            <input
                                type="number"
                                name="crpoRegNumber"
                                id="crpoRegNumber"
                                value={user?.crpoRegNumber}
                                onChange={handleInputChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="qualifications" className="block text-gray-700 font-bold mb-2">
                                Qualifications
                            </label>
                            <textarea
                                name="qualifications"
                                id="qualifications"
                                value={user?.qualifications.join('\n')} // Assuming qualifications are stored as an array
                                onChange={(e) => handleInputChange(e)}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                    </form>
                )}

                {/* Availability tab */}
                {activeTab === 'availability' && (
                    <div className="p-4 border rounded">
                        {/* Implement your chosen UI pattern for availability here */}
                    </div>
                )}

                {/* Account Details tab */}
                {activeTab === 'accountDetails' && (
                    <div className="p-4 border rounded">
                        {/* ... account details fields */}
                    </div>
                )}

                {/* Profile tab */}
                {activeTab === 'profile' && (
                    <div className="p-4 border rounded">
                        {/* ... profile fields, including image uploader and video recording/uploading */}
                    </div>
                )}
            </div>
            <button type="submit" disabled={isDirty} onClick={handleSubmit} className="bg-fi-darker hover:bg-opacity-80 c text-white font-bold py-2 px-4 rounded mt-4">
                Save Changes
            </button>
        </div>
    );
};

export default AccountSettings;
