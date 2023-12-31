"use client"

import Chart from 'chart.js/auto';
import { useEffect, useRef } from 'react';

interface ChartData {
    labels: string[],
    data: any[],
    color: string
}

export const PatientChart = (props: ChartData) => {

    const canvasRef = useRef(null);
    
    // Chart data
    const patientData = {
        labels: props.labels,
        datasets: [
            {
                label: 'Patients',
                data: props.data, // Replace with your actual patient counts
                backgroundColor: props.color,
                borderWidth: 1,
            },
        ],
    };

    // Chart options
    const chartOptions = {
        responsive: true, // Ensure responsiveness
        scales: {
            y: {
                beginAtZero: true,
            },
        },
        maintainAspectRatio: false,
        barThickness: 15, // Decrease bar width
        categorySpacing: 10,
        plugins: {
            legend: {
                display: false
            }
        }
    };


    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext("2d");

        if (ctx) {
            // Create the chart
            const patientChart = new Chart(ctx, {
                type: 'bar',
                data: patientData,
                options: chartOptions,
            });

            return () => {
                patientChart.destroy(); // Destroy chart on cleanup
            };

        }
    }, []);


    return (
        <div className="chart-container h-64 py-5">
            <canvas ref={canvasRef} />
        </div>
    )
}