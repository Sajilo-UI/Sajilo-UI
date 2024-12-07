'use client';
import React, { useState } from 'react';

export default function PopupComponent() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='flex items-center justify-center '>
      <button
        onClick={togglePopup}
        className='px-6 py-3 text-sm font-medium text-black bg-white dark:text-white dark:bg-black rounded-lg shadow-lg hover:bg-gray-200 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-500'
      >
        Show Modal
      </button>

      {isOpen && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
          <div className='bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full p-6 relative'>
            <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
              Popup Message
            </h3>
            <p className='mt-4 text-gray-700 dark:text-gray-300'>
              This is a popup message!
            </p>
            <button
              onClick={togglePopup}
              className='mt-6 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600'
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
