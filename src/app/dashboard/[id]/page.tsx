"use client";

import React, { Component, ReactNode } from "react";

export default function Dashboard({ params }: {
    params: { id: string }
}) {
    return (
        <>
            <h1>
                {
                    params.id === '1' ? 'Buddy' : 'User'
                }
            </h1>
        </>
    )
}