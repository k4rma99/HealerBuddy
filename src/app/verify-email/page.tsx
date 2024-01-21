"use client"

import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { PrismaClient } from '@prisma/client';
import { Loading } from '@/shared/loading/loading';

const prisma = new PrismaClient();

export interface EmailSearchQuery {
    userId: string
    token: string
}

export default function EmailVerification() {
    const router = useRouter();
    const userId = useSearchParams().get('userId') ?? "";
    const token = useSearchParams().get('token') ?? "";
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const verifyEmail = async () => {
            try {
                const emailToken = await prisma.emailToken.findUnique({
                    where: { userId, token },
                });

                if (!emailToken || emailToken.expiresAt < new Date()) {
                    throw new Error('Invalid or expired verification token');
                }

                await prisma.user.update({
                    where: { userId: userId },
                    data: { isEmailVerified: true },
                });

                // Delete the verification token
                await prisma.emailToken.delete({ where: { id: emailToken.id } });

                // Redirect to a success page or update application state
                router.push('/login'); // Replace with your success page
            } catch (error: any) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };

        verifyEmail();
    }, [userId, token, router, prisma]);

    if (isLoading)
        <Loading />

    return (
        <div>
            {isLoading ? (
                <Loading />
            ) : error ? (
                <></>
            ) : (
                <></>
            )}
        </div>
    );
}
