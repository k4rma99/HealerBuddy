"use client";

import React, { useState } from "react";
import Link from "next/link";

import './login.css'
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>('');

    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        try {
            const res = await signIn('credentials', {
                email, password, redirect: false
            });

            if (res?.error) {
                console.log(error);
                setError("Invalid Credentials");
                return;
            }

            router.replace('/dashboard');

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <title>Login</title>
            <section className="flex h-screen login-page" >
                <div className="login-grid m-auto bg-slate-50 rounded-2xl w-3/5 h-3/4 inline-grid lg:grid-cols-2">
                    <div className="left-flex pt-10 2xl:pt-50 rounded-l-2xl relative order-2 justify-evenly bg-gray-100">
                        <div className="text-left w-3/4 xl:pt-20 2xl:pt-20 3xl:pt-40 flex top-1/2 m-0 items-center">
                            <div className="flex w-full pl-10"><div className="logo-image w-10 h-10 bg-contain"></div><div className="pl-2 pt-1 self-center">HealerBuddy</div></div></div>
                        <div className="line mt-5 mb-5"></div>

                        <form onSubmit={handleSubmit} className="login-section pl-10">

                            {
                                error && (
                                    <div className="bg-red-500 my-5 rounded-3xl text-white w-fit text-sm py-1 px-3">{error}</div>
                                )
                            }

                            <div className="text"><strong>Login to your account</strong></div>
                            <div className="flex flex-col">

                                <div className="pt-3">
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                                    <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Email' className="block w-5/6 px-4 py-1 mt-2 text-gray-700 bg-white border rounded-3xl focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>

                                <div className="pt-3">
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                                    <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Password' className="block w-5/6 px-4 py-1 mt-2 text-gray-700 bg-white border rounded-3xl focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>
                                <button type="submit" className="submit mt-5 w-1/2 self-center text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-sm px-5 py-2.5 text-center">Login</button>
                            </div>
                        </form>
                        <div className="alt-login pl-5 text-center mt-5">
                            <label htmlFor="terms" className="ml-2 text-sm font-medium text-gray-900">Don't have an account? <Link className='text-blue-600 hover:underline dark:text-blue-500' href={'/register'}>Sign up</Link></label>
                        </div>
                    </div>
                    <div className="right-flex order-1 flex flex-col-reverse items-center">
                        <div className="login-image"></div>
                        <div className="text-content text-white m-auto absolute w-1/2 pb-10">
                            Welcome back buddy!! Let us make some people feel better.
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}