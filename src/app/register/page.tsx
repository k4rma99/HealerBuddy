"use client"

import Image from 'next/image';

import BuddyRegisterForm from './for-buddies/register';
import UserRegisterForm from './for-users/register';

import logo from "@/assets/images/logo-text-v24.png"

interface RegisterProps{
    params: {
        isProvider: boolean
    }
}

export default function Register({params}: RegisterProps) {
    params.isProvider = false;
    return (
        <>
            <title>Register</title>

            <section className="flex h-screen login-page" >
                <div className="login-grid m-auto bg-slate-50 rounded-2xl w-3/5 lg:w-3/5 xl:w-3/5 lg:h-3/4 xl:h-5/6 3xl:h-3/4 block xl:inline-grid lg:grid-cols-2">
                    <div className="left-flex pt-6 lg:pt-10 3xl:pt-20 rounded-l-2xl justify-evenly bg-gray-100">
                        <div className="text-left w-3/4 flex top-1/2 m-0 items-center">
                            <div className="flex w-full relative left-1/3 xl:left-10 2xl:left-20 3xl:left-1/3"><Image src={logo} width={300} alt="logo" /></div>
                        </div>
                        <div className="line mt-5 mb-5"></div>

                        <div className="text-black pl-10"><strong>Create your account</strong></div>
                        {
                            params.isProvider ? <BuddyRegisterForm /> : <UserRegisterForm />
                        }

                    </div>
                    <div className="right-flex hidden xl:flex flex-col-reverse items-center">
                        <div className="login-image"></div>
                        {
                            params.isProvider ?
                                <div className="text-content text-white m-auto absolute w-1/2 pb-10">
                                    Become a <strong>healerbuddy</strong> and join our journey to a better mental health.
                                </div>
                                :
                                <div className="text-content text-white m-auto absolute w-1/2 pb-10">
                                    Welcome to the first step of your healing journey
                                </div>
                        }
                    </div>
                </div>
            </section>

        </>
    )
}