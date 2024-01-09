"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Widget } from '@typeform/embed-react';
import Header from '@/shared/header';

// Replace with your actual Typeform ID
const typeformId = 'XzVE97un';

function MentalHealthForm() {
  const router = useRouter();

  const handleSubmit = () => {
    router.push('/register')
  }
  //   const [client, loading] = useMongoClient();

  //   useEffect(() => {
  //     async function checkForNewData() {
  //       if (loading) return;

  //       try {
  //         const database = client.db('yourDatabaseName');
  //         const collection = database.collection('yourCollectionName');

  //         const newDataCount = await collection.countDocuments({ isNew: true });

  //         if (newDataCount > 0) {
  //           router.push('/register');
  //         }
  //       } catch (error) {
  //         console.error('Error checking for new data:', error);
  //       }
  //     }

  //     checkForNewData();
  //   }, [client, loading, router]);

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header />
      <Widget id={typeformId} onSubmit={handleSubmit} className="flex-grow bg-white dark:bg-gray-800" />
    </div>
  );
}

export default MentalHealthForm;

// const FilloutFormEmbed = ({ formId: string }) => {
//   const embedRef = useRef(null);

//   useEffect(() => {
//     // Fetch the Fillout embed script dynamically
//     const script = document.createElement('script');
//     script.src = `https://embed.fillout.com/f/${formId}`;  // Replace with the actual form ID
//     script.async = true;
//     embedRef.current.appendChild(script);
//   }, []);

//   return (
//     <div ref={embedRef} className="container mx-auto p-4"></div>
//   );
// };