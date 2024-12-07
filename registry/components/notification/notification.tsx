'use client';
import React, { useState } from 'react';

const Notification = () => {
  const [isVisible, setIsVisible] = useState(false);

  const showNotification = () => {
    setIsVisible(true);
    setTimeout(() => setIsVisible(false), 3000); // Automatically hides after 3 seconds
  };

  const closeNotification = () => {
    setIsVisible(false);
  };

  return (
    <div className='flex flex-col justify-center items-center  '>
      {/* Button to show the notification */}
      <button
        onClick={showNotification}
        className='mb-4 px-6 py-2 text-sm font-xs border text-black bg-white dark:bg-black dark:text-white rounded-md shadow-md hover:bg-opacity-95 bg:hover:bg-opacity-95   focus:outline-none'
      >
        Show Notification
      </button>

      {/* Notification */}
      {isVisible && (
        <div
          className={`fixed top-20 right-5 max-w-sm w-full p-4 shadow-lg rounded-lg overflow-hidden transition-all duration-300 ease-out transform ${
            isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
          } bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700`}
        >
          <div className='flex items-center justify-between'>
            <span className='flex-1 text-sm font-medium'>
              This is a notification message!
            </span>
            <button
              onClick={closeNotification}
              className='ml-4 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none'
              aria-label='Close notification'
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notification;
