"use client";

import React, { useState } from 'react';
import Link from 'next/link';

import './register.css'
import { redirect } from 'next/dist/server/api-utils';
import { useRouter } from 'next/navigation';
// import { getServerSession } from 'next-auth';
// import {authOptions} from '@/app/api/auth/[...nextauth]/route'
// import { redirect } from 'next/navigation'
export default function RegisterForm() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>('');
    const { push } = useRouter();

    // const session = await getServerSession(authOptions);

    // if(session){
    //     redirect('/dashboard')
    // }

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        if (!name || !email || !password) {
            setError("ll Fields");
            return;
        }

        try {

            const validateUserRes = await fetch('api/auth/userExists', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email
                })
            })

            const { user } = await validateUserRes.json();

            if (user) {
                setError("User Already Exists");
            }

            const res = await fetch('api/auth/register', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name, email, password
                })
            })

            if (res.ok) {
                const form = e.target;
                push('/register/fill-details');
                form.reset()
            }

        } catch (error) {
            console.log("Error")
        }

    }

    return (
        <>
            <form onSubmit={handleSubmit} className="login-section pl-10">
                
                <div className="flex flex-col">

                    <div className="pt-3">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Name</label>
                        <input onChange={(e) => setName(e.target.value)} type="text" placeholder='Name' className="block w-3/4 px-4 py-1 mt-2 text-gray-700 bg-white border rounded-3xl focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>

                    <div className="pt-3">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                        <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Email' className="block w-3/4 px-4 py-1 mt-2 text-gray-700 bg-white border rounded-3xl focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>

                    <div className="pt-3">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                        <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Password' className="block w-3/4 px-4 py-1 mt-2 text-gray-700 bg-white border rounded-3xl focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>

                    <div className="pt-3">
                        <label htmlFor="repeat-password" className="block mb-2 text-sm font-medium text-gray-900">Confirm Password</label>
                        <input type="password" placeholder='' className="block w-3/4 px-4 py-1 mt-2 text-gray-700 bg-white border rounded-3xl focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>

                    <div className="flex items-start mt-5">
                        <div className="flex items-center h-5">
                            <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                        </div>
                        <label htmlFor="terms" className="ml-2 text-sm font-medium text-gray-900">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
                    </div>
                    <button type="submit" className="submit mt-5 w-1/2 self-center text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-sm px-5 py-2.5 text-center">Register new account</button>
                </div>
            </form>

            <div className="alt-login pl-10 text-center mt-5">
                <label htmlFor="terms" className="ml-2 text-sm font-medium text-gray-900">Already have an account? <Link className='text-blue-600 hover:underline dark:text-blue-500' href={'/login'}>Login</Link></label>
            </div>
        </>
    )
}