import React from 'react';

function Breadcrumb() {
  return (
    <nav className='flex items-center space-x-2 text-gray-600 text-sm'>
      {/* replace ancher tag with "Link" and href with "to" */}
      {/* Home Link */}
      <a
        href='#'
        className='text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white transition'
      >
        Home
      </a>

      {/* Separator */}
      <span className='mx-2 text-gray-400'>/</span>

      {/* Services Link */}
      <a
        href='#'
        className='text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white transition'
      >
        Services
      </a>
    </nav>
  );
}

export default Breadcrumb;
