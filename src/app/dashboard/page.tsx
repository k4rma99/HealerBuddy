"use client"

import React, { useState } from "react";
import { SideNav } from "./_components/sidenav/sidenav";
import { MainDashboard } from "./_components/mainPage/main";

const Dashboard = () => {

    const [activeComponent, setActiveComponent] = useState(<MainDashboard />);

    return (
        <div className="flex h-screen">
            <SideNav onComponentChange={setActiveComponent} />
            <main className="md:flex-grow absolute md:relative z-0 p-10">
                {activeComponent}
            </main>
        </div>
    )
}

export default Dashboard;