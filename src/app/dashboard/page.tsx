"use client"

import React, { useEffect, useState } from "react";
import { SideNav } from "./_components/sidenav/sidenav";
import { MainDashboard } from "./_components/mainPage/main";
import { useRouter } from "next/navigation";
import { Loading } from "@/shared/loading/loading";

const Dashboard = () => {
  const [userId, setUserId] = useState<string | null>(null)
  const [userData, setUserData] = useState(null)
  const [activeComponent, setActiveComponent] = useState(<MainDashboard />);
  const [isLoading, setIsLoading] = useState(true);

  const router = useRouter()

  useEffect(() => {

    const handleRedirect = async () => {
      setUserId(localStorage?.getItem("userId"));
      if (!userId) {
        router.push('/login'); // Redirect if not authenticated
      } else {s

        const performMigration = async () => {
          try {
            const response = await fetch(`/api/migrate-user/provider/${userId}`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
            }).then((res) => res.json());
            setUserData(response.userData)
          } catch (error) {
            console.error('Error during submission:', error);
          } finally {
            setIsLoading(false); // Resolve loading after all operations
          }
        };
        performMigration();
      }
    };
    handleRedirect();
  }, []);

  if (isLoading) {
    return <Loading />; // Render loading indicator only
  }

  return (
    <div className="flex h-screen ">
      <SideNav onComponentChange={setActiveComponent} />
      <main className="md:flex-grow absolute md:relative z-0 p-10">
        {activeComponent && React.cloneElement(activeComponent, { userId, userData })}
      </main>
    </div>
  );
};

export default Dashboard;

