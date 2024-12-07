'use client';
import { useTheme } from 'next-themes';
import React from 'react';
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './dropdown-menu';
import {
  Github,
  MonitorSmartphone,
  Moon,
  MoonIcon,
  Sun,
  SunIcon,
  X,
} from 'lucide-react';
import { VscSymbolInterface } from 'react-icons/vsc';

import { SearchDialog } from './searchbar';
import MobileHeader from './moibile-header';

function Header() {
  const { setTheme } = useTheme();

  return (
    <>
      <header className=' fixed left-0 top-0 z-10 w-full border-b-[1px] border-border dark:bg-black/40 bg-white/40 px-2 py-2 backdrop-blur-lg'>
        <div className='mx-auto flex items-center justify-between gap-2 px-2 2xl:container'>
          <Link href='/' className='hidden lg:block'>
            <div className='relative hidden items-center font-bold gap-2 lg:flex'>
              <VscSymbolInterface className='bg-[#18181B] dark:bg-white dark:text-[#18181B] text-white rounded-lg h-8 w-8 p-1' />
              Sajilo UI{' '}
            </div>
          </Link>

          <MobileHeader classname='lg:hidden block' />

          <div className='flex gap-2 '>
            <SearchDialog classname='sm:w-52 md:w-72' />

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className='relative flex-shrink-0 grid w-12 place-content-center rounded-md border border-input bg-primary-foreground'>
                  <SunIcon className='block h-[1.2rem] w-[1.2rem] transition-all dark:hidden' />
                  <MoonIcon className='hidden h-[1.2rem] w-[1.2rem] transition-all dark:block' />
                  <span className='sr-only'>Toggle theme</span>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className='bg-primary-foreground'
                align='end'
              >
                <DropdownMenuItem onClick={() => setTheme('light')}>
                  <Sun className='mr-2 h-4 w-4' /> Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('dark')}>
                  <Moon className='mr-2 h-4 w-4' /> Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('system')}>
                  <MonitorSmartphone className='mr-2 h-4 w-4' /> System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
