'use client';
import React, { useState } from 'react';

export default function Drawer() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='relative'>
      {/* Button to Open Drawer */}
      <button
        onClick={toggleDrawer}
        className='p-3 bg-white dark:bg-black text-black dark:text-white border border-gray-300 dark:border-gray-600 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-300 dark:focus:ring-gray-600 transition duration-200'
      >
        Open Drawer
      </button>

      {/* Drawer Overlay */}
      {isOpen && (
        <div
          className='fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300'
          onClick={toggleDrawer}
        ></div>
      )}

      {/* Drawer Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-black shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className='p-4 flex justify-between items-center border-b border-gray-300 dark:border-gray-700'>
          <h2 className='text-lg font-semibold text-gray-900 dark:text-gray-100'>
            Menu
          </h2>
          <button
            onClick={toggleDrawer}
            className='text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 focus:outline-none'
          >
            &times;
          </button>
        </div>
        <div className='p-4 space-y-2'>
          {['Home', 'About', 'Services', 'Contact'].map((item) => (
            <a
              key={item}
              href='#'
              className='block py-2 px-4 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition duration-200'
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
