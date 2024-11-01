"use client";

import { useState, useCallback, useMemo, useEffect } from 'react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = useMemo(
    () => [
      { name: 'Services', to: '#', duration: 1000, isInternal: false },
      { name: 'About', to: '#', duration: 300, isInternal: true },
      { name: 'Pricing', to: '#', duration: 300, isInternal: true },
      { name: 'Contact', to: '#', duration: 300, isInternal: true },
      { name: 'Event', to: '#', isInternal: true },
    ],
    []
  );

interface NavLink {
    name: string;
    to: string;
    duration?: number;
    isInternal: boolean;
}

const handleNavLinkClick = useCallback((link: NavLink) => {
    if (!link.isInternal) {
        const element = document.getElementById(link.to);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    } else {
        window.location.href = link.to;
    }
    setMenuOpen(false);
}, []);

  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', menuOpen);
    return () => document.body.classList.remove('overflow-hidden');
  }, [menuOpen]);

  return (
    <header className='bg-white text-black dark:bg-black dark:text-white shadow-md w-full z-20 relative border-gray-200 dark:border-[#252525]'>
      <div className='max-w-screen-xl mx-auto px-4 flex items-center justify-between h-16'>
        <a href=''>
          <div className='flex items-center gap-2'>
            logo
            <p className='text-gray-900 dark:text-slate-100 font-bold font-apple text-2xl cursor-default tracking-wide'>
              Name
            </p>
          </div>
        </a>

        <div className='flex items-center gap-10'>
          <nav className='hidden md:flex gap-10'>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.isInternal ? link.to : undefined}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavLinkClick(link);
                }}
                className='hover:text-gray-700 dark:hover:text-gray-300 transition font-apple duration-300 ease-in-out text-md'
              >
                {link.name}
              </a>
            ))}
          </nav>

          <a
            href='#'
            target='_blank'
            rel='noopener noreferrer'
            className='hidden sm:block bg-red-600 dark:bg-red-700 font-apple px-3 py-2 text-sm font-semibold transition duration-300 rounded-xl text-white'
          >
            Text
          </a>

          <button
            className='md:hidden p-2 text-black dark:text-white rounded focus:outline-none z-30'
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label='Toggle Menu'
          >
            {menuOpen ? (
              <svg className='h-6 w-6' viewBox='0 0 24 24' fill='none'>
                <path
                  d='M6 18L18 6M6 6l12 12'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            ) : (
              <svg className='h-6 w-6' viewBox='0 0 24 24' fill='none'>
                <path
                  d='M4 6H20M4 12H20M4 18H20'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          className='fixed inset-0 bg-black opacity-70 z-10 dark:bg-white dark:opacity-50'
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      <nav
        className={`fixed top-0 right-0 h-full w-3/4 bg-white dark:bg-black transition-transform transform ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden z-20 shadow-lg`}
      >
        <div className='flex flex-col items-center pt-16 space-y-6'>
          {navLinks.map((link) => (
            <div key={link.name}>
              <a
                href={link.isInternal ? link.to : undefined}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavLinkClick(link);
                  setMenuOpen(false);
                }}
                className='text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 font-semibold transition duration-300 text-lg'
              >
                {link.name}
              </a>
            </div>
          ))}
          <a
            href='#'
            target='_blank'
            rel='noopener noreferrer'
            className='bg-red-600 dark:bg-red-700 font-apple px-3 py-2 text-sm font-semibold transition duration-300 rounded-xl text-white'
          >
            Let&apos;s Chat
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;