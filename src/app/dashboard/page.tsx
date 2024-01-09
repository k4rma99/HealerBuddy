"use client"

import React, { useEffect, useLayoutEffect, useState } from "react";
import { SideNav } from "./_components/sidenav/sidenav";
import { MainDashboard } from "./_components/mainPage/main";
import { getSession } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Loading } from "@/shared/loading/loading";

const Dashboard = () => {
    const [userId, setUserId] = useState(null)
    const [activeComponent, setActiveComponent] = useState(<MainDashboard />);
    const [isLoading, setIsLoading] = useState(true);

    const router = useRouter()

    const { data: session } = useSession();

    useEffect(() => {
        const handleRedirect = async () => {
          if (!session?.user?.userId) {
            router.push('/login'); // Redirect if not authenticated
          } else {
            setUserId(session.user.userId); // Set userId if authenticated
            setIsLoading(false); // Resolve loading state after successful authentication
          }
        };
    
        handleRedirect(); // Initiate authentication check and redirect
      }, []);
    
      if (isLoading) {
        return <Loading />; // Render loading indicator only
      }

    return (
        <div className="flex h-screen">
            <SideNav onComponentChange={setActiveComponent} />
            <main className="md:flex-grow absolute md:relative z-0 p-10">
                {activeComponent && React.cloneElement(activeComponent, { userId })}
            </main>
        </div>
    );
};

export default Dashboard;

