// NotFound.js
import React from 'react';

const NotFound = () => {
  return (
    <div className='flex items-center justify-center h-96 bg-white dark:bg-gray-900 transition-colors duration-300'>
      <div className='text-center px-4 md:px-0'>
        <h1 className='text-4xl md:text-6xl font-bold text-gray-800 dark:text-white'>
          404
        </h1>
        <p className='mt-4 text-base md:text-lg text-gray-600 dark:text-gray-300'>
          Oops! The page you are looking for does not exist.
        </p>
        <a
          href='#'
          className='mt-6 inline-block px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800 transition-colors duration-300'
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
