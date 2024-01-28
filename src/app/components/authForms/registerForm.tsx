"use client"

import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { TextField } from '@/shared/form-elements';

import logo from "@/assets/images/logo-text-v24.png";

// Define the form validation schema, including confirmPassword validation
const formValidation = Yup.object({
    password: Yup.string().required('Required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
});

function RegisterForm() {
    const router = useRouter();

    // Submit handler for Formik
    const handleSubmit = async (values: { email: string; password: string }, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
        try {
            // Call the Next.js API route for registration
            const response = await fetch('/api/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(values),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Registration successful:', data);
                router.push('/login')
            } else {
                console.error('Registration failed:');
            }
        } catch (error) {
            console.error('Register:', error);
        } finally {
            setSubmitting(false);
        }
    };


    return (
        <div className="flex items-center w-full px-6 mx-auto lg:w-1/2">
            <div className="flex-1">
                <div className="text-center">
                    <div className="flex justify-center mx-auto">
                        <Image src={logo} alt="" width={500} className="w-auto h-16" />
                    </div>
                    <p className="mt-3 text-gray-500">Sign in to access your account</p>
                </div>

                <div className="mt-8">
                    <Formik
                        initialValues={{
                            email: '',
                            password: '',
                        }}
                        validationSchema={formValidation}
                        onSubmit={handleSubmit}
                    >
                        <Form className='relative flex flex-col w-1/2 mx-auto my-auto'>
                            <TextField
                                label="Email Address"
                                name="email"
                                type="email"
                                placeholder="Enter email address here"
                                className="block w-full py-2.5 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-lg pl-11 pr-5 rtl:pr-11 rtl:pl-5 focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                labelclass="block mb-2 text-sm text-gray-600"
                                errorclass="mt-3 text-xs text-red-400"
                            />

                            <TextField
                                label="Password"
                                name="password"
                                type="password"
                                placeholder="Enter password here"
                                className="block w-full py-2.5 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-lg pl-11 pr-5 rtl:pr-11 rtl:pl-5 focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                labelclass="block mb-2 text-sm text-gray-600"
                                errorclass="mt-3 text-xs text-red-400"
                            />

                            <TextField
                                label="Confirm Password"
                                name="confirmPassword"
                                type="confirmPassword"
                                placeholder="Enter your password again"
                                className="block w-full py-2.5 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-lg pl-11 pr-5 rtl:pr-11 rtl:pl-5 focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                labelclass="block mb-2 text-sm text-gray-600"
                                errorclass="mt-3 text-xs text-red-400"
                            />

                            <button className='mt-6 w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-fi-darker rounded-lg hover:bg-opacity-80 focus:outline-none focus:bg-opacity-80' type="submit">Submit</button>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    );
};

export default RegisterForm;