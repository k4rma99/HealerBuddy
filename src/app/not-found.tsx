import React from 'react';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="max-w-md rounded-lg bg-white p-8 text-center shadow-lg">
        <h1 className="text-4xl font-semibold mb-4">404</h1>
        <p className="text-gray-500">Oops! The page you are looking for could not be found.</p>
        <a href="/" className="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600">
          Go Back to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
