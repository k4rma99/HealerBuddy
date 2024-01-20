"use client"

import React, { useState, useEffect } from 'react';

import './form.css'
import Header from '@/shared/header';
import { OnboardingFormSections } from '@/app/model';

import { Formik, Form, Field, useFormikContext } from 'formik';
import * as yup from 'yup';
import { TextField } from '@/shared/form-elements';
import { useRouter } from 'next/navigation';
import { RoleType } from '@/lib/enums';

const OnboardingForm = ({ onboardingQuestions }) => {
    const [questions, setQuestions] = useState<OnboardingFormSections[]>([]);
    const [answers, setAnswers] = useState<Record<string, any>>({});
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [setCrpoCheck, crpoCheck] = useState(false);

    const formik = useFormikContext();
    const router = useRouter()

    const createAnswersMap = (questions: OnboardingFormSections[]) => {
        const answersMap: Record<string, any> = {};
        questions.forEach((question) => {
            if (!['start', 'end', 'review', 'accountCreation'].includes(question.id))
                answersMap[question.id] = null;
        });
        return answersMap;
    };

    const formValidation = yup.object({
        name: yup.string().required('Please provide your full name.'),
        email: yup.string().email('Please provide a valid email address.').required('Email is required'),
        phone: yup.number().required('Phone number is required'),
        address: yup.string().required('Please provide your address.'),
        pronouns: yup.string().required('Please select your preferred pronouns.'),
        education: yup.string().required('Please select your highest level of completed education.'),
        educationField: yup.string().required('Please select your field of study.'),
        certifications: yup.string().required('Please select any relevant certifications or licenses.'),
        additionalTraining: yup.string().required('Please indicate any specialized training or workshops.'),
        experience: yup.number().required('Please enter your years of experience as a number.'),
        approaches: yup.string().required('Please select your therapeutic approaches.'),
        specialties: yup.string().required('Please select your areas of specialization.'),
        expertise: yup.array().required('Please select at least 2 areas of expertise.').min(2, 'Please select at least 2 areas of expertise.'),
        availableDays: yup.array().required('Please select at least 2 available days.').min(2, 'Please select at least 2 available days.'),
        hours: yup.string().required('Please provide your typical hours of availability.'),
        approachDescription: yup.string().required('Please describe your therapeutic approach and philosophy.'),
        paymentMethod: yup.string().required('Please select your preferred payment method.'),
        password: yup.string().required('Required'),
        confirmPassword: yup.string()
            .oneOf([yup.ref('password'), ""], 'Passwords must match')
            .required('Required'),
        crpo: yup.string().required('Please provide your CRPO number.')
    });

    useEffect(() => {
        setAnswers(createAnswersMap(onboardingQuestions));
    }, []);

    useEffect(() => {
        setQuestions(onboardingQuestions);
    }, []);


    useEffect(() => {
        console.log(answers);
    }, [answers]);

    const handleNextQuestion = (event: any) => {
        event.preventDefault();

        // if (formik.touched && !formik.isValid) {
        //     const invalidField = document.querySelector<HTMLElement>('.form-control.is-invalid');
        //     if (invalidField) {
        //         invalidField.classList.add('shake-animation');
        //         setTimeout(() => invalidField.classList.remove('shake-animation'), 500);
        //         invalidField.focus();
        //     }
        //     return;
        // }

        setCurrentQuestionIndex((prevIndex) => Math.min(prevIndex + 1, questions.length - 1));

        // Focus the first input/select element in the next question
        const nextQuestion = document.querySelector<HTMLInputElement>(`question-${currentQuestionIndex}`);
        console.log(nextQuestion)
        if (nextQuestion) {
            nextQuestion.focus();
        }
    };

    const handlePreviousQuestion = (event: any) => {
        event.preventDefault();
        setCurrentQuestionIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    };

    const handleAnswerChange = (questionId: string, value: any) => {
        setAnswers((prevAnswers) => ({ ...prevAnswers, [questionId]: value }));
    };

    const handleBooleanAnswerChange = (questionId: string, value: boolean) => {
        setAnswers((prevAnswers) => ({ ...prevAnswers, [questionId]: value }));
    };

    const handleFileUpload = (files: FileList, questionId: string) => {
        const selectedFile = files[0];
        setAnswers((prevAnswers) => ({ ...prevAnswers, [questionId]: selectedFile }));
        console.log('File uploaded:', selectedFile);
    };

    const handleEnterKey = (event: any) => {
        if (event.key === 'Enter') {
            document.getElementById("next-button")?.click();
        }
    };

    // set submitting is basically to let the script know that formik is done with taking values
    // this allows for UI updates
    const handleSubmit = async () => {
        try {
            const response = await fetch('/api/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: email, password: password, role: RoleType[RoleType.doctor] }),
            }).then((res) => res.json());

            if (response.userId) {
                const userId = response.userId
                // Onboarding API call
                const res = await fetch(`/api/onboarding/provider/${userId}`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(answers),
                });

                if (res.status === 200) {
                    try {
                        await fetch(`/api/emailVerification/${userId}`, {
                            method: 'POST',
                            body: JSON.stringify({ userId, email }),
                        });

                        if (response.ok) {
                            console.log('Verification email sent successfully!');
                            // Proceed with onboarding completion

                        } else {
                            // Handle email sending failure
                            console.error('Failed to send verification email:');
                        }
                    } catch (error) {
                        console.error('Error sending verification email:', error);
                    }
                    router.push('/login'); // Redirect to login
                }
            } else {
                // Handle account creation failure
                console.error('Account creation failed');
            }
        } catch (error) {
            // Handle general errors
            console.error('Error during submission:', error);
        }
    };

    return (
        <Formik
            initialValues={answers}
            validationSchema={formValidation}
            onSubmit={handleSubmit}
        >
            <div className="h-screen">
                <Header />
                <div className="relative h-3/4 flex items-center justify-center transition-all duration-1000 ease-in-out"> {/* Center everything vertically and horizontally */}
                    <div className="progress fixed top-0 left-0 w-full z-50 bg-fi-"> {/* Progress bar at the top */}
                        <div className="progress-bar bg-fi-darker text-white h-2 transition-all" role="progressbar" style={{ width: `${(currentQuestionIndex) / questions.length * 100}%` }} aria-valuenow={currentQuestionIndex + 1} aria-valuemin={0} aria-valuemax={questions.length}>{/* {currentQuestionIndex + 1}/{questions.length} */}</div>
                    </div>
                    <div className="container mx-auto"> {/* Center form within the container */}

                        <Form className="container mx-auto w-1/2 transition-all duration-500 ease-in-out" onKeyDown={handleEnterKey}>
                            <div className="max-w-3xl mx-auto">
                                <div className="flex justify-between items-center mb-5 -ml-5">
                                    {currentQuestionIndex > 0 && (
                                        <button onClick={handlePreviousQuestion}>
                                            <svg fill="#000000" width="20px" height="20px" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><path d="M30 14.5c-.004.276-.224.504-.5.5h-26c-.66 0-.664-1 0-1h26c.282-.004.504.218.5.5zm-15 14c0 .45-.554.663-.854.354l-14-14c-.195-.196-.195-.512 0-.708l14-14c.426-.442 1.167.248.708.708L1.207 14.5l13.647 13.646c.097.095.146.22.146.354z" /></svg>
                                        </button>
                                    )}
                                </div>
                            </div>
                            {
                                questions.map((question, index) => {

                                    if (index !== currentQuestionIndex) return null;

                                    switch (question.type) {
                                        case 'text':
                                            return (
                                                <div key={index} className="mb-4">
                                                    <label htmlFor={`question-${index}`} className="block text-2xl font-medium text-gray-700">
                                                        {question.text}
                                                    </label>
                                                    <Field
                                                        as="input"
                                                        type="text"
                                                        id={`question-${index}`}
                                                        name={question.id}
                                                        className="my-5 text-xl block w-full border-b-2 border-gray-400 shadow-sm outline-none focus:ring-0"
                                                        onChange={(e: any) => handleAnswerChange(question.id, e.target.value)}
                                                        aria-invalid={!answers[question.id]} // Add ARIA attribute for accessibility
                                                        tabIndex="-1" // For making the input focussable. So when you click next it hits here
                                                    />
                                                    {!answers[question.id] && (
                                                        <div className="text-red-500 text-sm">This field is required.</div>
                                                    )}
                                                </div>
                                            );
                                        case 'dropdown':
                                            return (
                                                <div key={index}>
                                                    <label htmlFor={`question-${index}`} className="block text-2xl font-medium text-gray-700">
                                                        {question.text}
                                                    </label>
                                                    <div className="mt-3 text-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                                        {question?.options?.map((option, optionIndex) => (
                                                            <Field
                                                                as="div"
                                                                key={optionIndex}
                                                                className={`rounded-md border border-gray-300 p-4 hover:bg-gray-100 cursor-pointer ${answers[question.id] === option.value ? 'bg-fi-white' : ''}`}
                                                                onClick={(e: any) => handleAnswerChange(question.id, option.value)}
                                                            >
                                                                {option.label}
                                                            </Field>
                                                        ))}
                                                    </div>
                                                </div>
                                            );
                                        case 'multi-select':
                                            return (
                                                <div key={index}>
                                                    <label htmlFor={`question-${question.id}`} className="block text-2xl font-medium text-gray-700">
                                                        {question.text}
                                                    </label>
                                                    <div className="mt-3 text-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                                        {question?.options?.map((option, optionIndex) => (
                                                            <Field
                                                                as="div"
                                                                key={optionIndex}
                                                                className={`rounded-md border border-gray-300 p-4 hover:bg-gray-100 cursor-pointer ${answers[question.id]?.includes(option) ? 'bg-fi-white' : ''}`}
                                                                onClick={() => handleAnswerChange(question.id, answers[question.id]?.includes(option) ? answers[question.id].filter((opt: any) => opt !== option) : [...answers[question.id] || [], option])}
                                                            >
                                                                {option.label}
                                                            </Field>
                                                        ))}
                                                    </div>
                                                </div>
                                            );
                                        case 'boolean':
                                            return (
                                                <div key={index} className="mb-4">
                                                    <label htmlFor={`question-${question.id}`} className="block text-2xl font-medium text-gray-700">
                                                        {question.text}
                                                    </label>
                                                    <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                        <Field
                                                            key="yes"
                                                            className={`rounded-md border border-gray-300 p-4 hover:bg-gray-100 cursor-pointer ${answers[question.id] ? 'bg-fi-white' : ''}`}
                                                            onClick={() => handleBooleanAnswerChange(question.id, true)}
                                                        >
                                                            Yes
                                                        </Field>
                                                        <Field
                                                            key="no"
                                                            className={`rounded-md border border-gray-300 p-4 hover:bg-gray-100 cursor-pointer ${!answers[question.id] ? 'bg-fi-white' : ''}`}
                                                            onClick={() => handleBooleanAnswerChange(question.id, false)}
                                                        >
                                                            No
                                                        </Field>
                                                    </div>
                                                </div>
                                            );
                                        case 'file-upload':
                                            return (
                                                <div key={index} className="mb-4">
                                                    <label htmlFor={`question-${index}`} className="block text-2xl font-medium text-gray-700">
                                                        {question.text}
                                                    </label>
                                                    <input
                                                        type="file"
                                                        id={`question-${index}`}
                                                        className="my-5 p-10 text-xl block w-full border-b-2 border-gray-400 shadow-sm outline-none focus:ring-0"
                                                        onChange={(e: any) => handleFileUpload(e.target.files, question.id)}
                                                    />
                                                </div>
                                            );
                                        case 'start':
                                            return (
                                                <div key={index} className="mb-4 text-2xl text-center">
                                                    <h2>{question.text}</h2>
                                                    <h3 className='mt-5'>Click <a onClick={handleNextQuestion} className='font-semibold italic'>here</a> to start the onboarding process</h3>
                                                </div>
                                            );
                                        case 'end':
                                            return (
                                                <div key={index} className="mb-4 text-2xl text-center">
                                                    <h2>{question.text}</h2>
                                                </div>
                                            );
                                        case 'accountCreation':
                                            return (
                                                <div className="">
                                                    <h2 className='mb-4 text-2xl text-center'>{question.text}</h2>

                                                    <div className='relative flex flex-col w-1/2 mx-auto my-auto'>
                                                        <TextField
                                                            label="Email Address"
                                                            name="email"
                                                            type="email"
                                                            placeholder="Enter email address here"
                                                            className="block w-full py-2.5 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-lg pl-11 pr-5 rtl:pr-11 rtl:pl-5 focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                                            labelclass="block mb-2 text-sm text-gray-600"
                                                            errorclass="mt-3 text-xs text-red-400"
                                                            onChange={(e: any) => setEmail(e.target.value)}
                                                        />

                                                        <TextField
                                                            label="Password"
                                                            name="password"
                                                            type="password"
                                                            placeholder="Enter password here"
                                                            className="block w-full py-2.5 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-lg pl-11 pr-5 rtl:pr-11 rtl:pl-5 focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                                            labelclass="block mb-2 text-sm text-gray-600"
                                                            errorclass="mt-3 text-xs text-red-400"
                                                            onChange={(e: any) => setPassword(e.target.value)}
                                                        />

                                                        <TextField
                                                            label="Confirm Password"
                                                            name="confirmPassword"
                                                            type="confirmPassword"
                                                            placeholder="Enter your password again"
                                                            className="block w-full py-2.5 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-lg pl-11 pr-5 rtl:pr-11 rtl:pl-5 focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                                            labelclass="block mb-2 text-sm text-gray-600"
                                                            errorclass="mt-3 text-xs text-red-400"
                                                            onChange={(e: any) => setConfirmPassword(e.target.value)}
                                                        />

                                                        <button className='mt-6 w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-fi-darker rounded-lg hover:bg-opacity-80 focus:outline-none focus:bg-opacity-80' type="submit" onClick={handleSubmit}>Submit</button>
                                                    </div>
                                                </div>
                                            );
                                    }

                                })}

                            <div className="flex justify-between mt-4">
                                {currentQuestionIndex && currentQuestionIndex < questions.length - 2 ?
                                    <button
                                        id="next-button"
                                        type={currentQuestionIndex < questions.length - 1 ? 'button' : 'submit'}
                                        className={`px-4 py-2 bg-fi-darker text-white rounded-md hover:bg-fi-darkest focus:outline-none transition-all duration-300 ease-in-out ${currentQuestionIndex === 0 ? 'hidden' : ''}`}
                                        // disabled={formik.isSubmitting || formik.touched && !formik.isValid}
                                        onClick={(event: any) => { currentQuestionIndex === questions.length ? handleSubmit(event) : handleNextQuestion(event) }}
                                    >
                                        {currentQuestionIndex < questions.length - 1 ? 'Next' : 'Submit'}
                                    </button>
                                    :
                                    <></>
                                }
                            </div>
                        </Form>
                    </div>
                </div>

            </div>
        </Formik>
    );
};

export default OnboardingForm;