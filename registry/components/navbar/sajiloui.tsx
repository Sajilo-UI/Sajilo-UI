"use client";
import { useState, useRef } from 'react';
import { FaGithub, FaBars, FaTimes } from 'react-icons/fa';
import { VscSymbolInterface } from 'react-icons/vsc';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const searchInputRef = useRef(null);

  const navLinks = [
    { name: 'Components', path: '#' },
    // { name: "Docs", path: "/docs" },
    { name: 'About', path: '#' },
    {
      name: '',
      path: 'https://github.com',
      external: true,
      icon: <FaGithub />,
    },
  ];

  return (
    <header className=' z-50 bg-[#FAFAFA] dark:bg-[#0A0A0A] border-b dark:border-[#252525] border-[#EBEBEB]'>
      <nav className='container mx-auto flex justify-between items-center px-4 py-4'>
        <a
          href='/'
          className='text-xl font-bold flex items-center gap-2 text-gray-900 dark:text-white'
        >
          <VscSymbolInterface className='bg-black dark:bg-white dark:text-black text-white rounded-lg h-8 w-8 p-1' />
          Name
        </a>

        <div className='hidden md:flex space-x-4 items-center'>
          {navLinks.map((link, index) =>
            link.external ? (
              <a
                key={index}
                href={link.path}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center text-gray-700 dark:text-gray-300 font-semibold hover:text-gray-900 dark:hover:text-gray-400'
                aria-label={`Go to ${link.name}`}
              >
                {link.icon}
                <span className='ml-1'>{link.name}</span>
              </a>
            ) : (
              <a
                key={index}
                href={link.path}
                className='text-gray-700 dark:text-gray-300 font-semibold hover:text-gray-900 dark:hover:text-gray-400'
                aria-label={`Navigate to ${link.name}`}
              >
                {link.name}
              </a>
            )
          )}
          <div className='flex items-center space-x-2 ml-4'>
            <button
              className='md:hidden text-gray-700 dark:text-gray-300'
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
          <form className='ml-4'>
            <input
              ref={searchInputRef}
              type='text'
              placeholder='Search components...'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className='p-1 border border-gray-300 rounded-xl focus:outline-none focus:ring focus:ring-gray-500 dark:border-gray-600 dark:bg-[#0A0A0A] dark:text-white'
            />
          </form>
        </div>

        {/* Mobile Menu */}
        <div className='md:hidden flex'>
          <button
            className='text-gray-700 dark:text-gray-300'
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {menuOpen && (
          <div className='absolute top-16 left-0 w-full bg-white dark:bg-gray-900 shadow-lg md:hidden'>
            <div className='flex flex-col py-4 px-4 space-y-2'>
              {navLinks.map((link, index) =>
                link.external ? (
                  <a
                    key={index}
                    href={link.path}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400'
                    onClick={() => setMenuOpen(false)}
                    aria-label={`Go to ${link.name}`}
                  >
                    {link.icon}
                    <span className='ml-1'>{link.name}</span>
                  </a>
                ) : (
                  <a
                    key={index}
                    href={link.path}
                    className='text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400'
                    onClick={() => setMenuOpen(false)}
                    aria-label={`Navigate to ${link.name}`}
                  >
                    {link.name}
                  </a>
                )
              )}
              <form>
                <input
                  ref={searchInputRef}
                  type='text'
                  placeholder='Search components...'
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className='p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white'
                />
              </form>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
