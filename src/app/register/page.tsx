"use client"

import React from 'react';
import Image from "next/image"
import RegisterForm from '../components/authForms/registerForm';

import therapyImage from "@/assets/images/Psychologist-amico.png";

import './register.css';

const RegisterPage = () => {
    return (
        <div className="bg-fi-white">
            <div className="flex justify-center h-screen">
                <div className="hidden bg-cover lg:block lg:w-1/2">
                    <div className="flex items-center h-full px-20 bg-fi-midnight right_side place-content-center">
                        <div>
                            <Image src={therapyImage} width={500} className="max-w-300 object-cover" alt="Image" />

                            <p className="max-w-xl mt-3 text-fi-white text-xl">
                                Welcome to your online therapy oasis – begin your journey towards healing and self-discovery!
                            </p>
                        </div>
                    </div>
                </div>

                <RegisterForm />
            </div>
        </div>
    );
};

export default RegisterPage;