import { X } from 'lucide-react';
import React, { useState } from 'react';
import { ScrollArea } from './ui/scroll-area';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { SidebarDrawer, DrawerContent } from '../core/drawer/vaul-sidebar';
import { basePath } from './sidebar';
import { SpecialComponents } from '@/configs/docs';
// import { MainComponents, SpecialComponents } from '@/configs/docs';

import { cn } from '@/lib/utils';
import { VscSymbolInterface } from 'react-icons/vsc';

function MobileHeader({ classname }: { classname?: string }) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <button
        className={cn(classname, 'text-3xl')}
        onClick={() => setSidebarOpen(true)}
      >
        {/* <HiOutlineMenuAlt2 /> */}
        <svg
          width='642'
          height='421'
          viewBox='0 0 642 421'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className=' stroke-primary w-9 h-9'
        >
          <path
            d='M52.333 359H252.333'
            strokeWidth='66.6667'
            strokeLinecap='round'
          />
          <path
            d='M52.333 212H452.333'
            strokeWidth='66.6667'
            strokeLinecap='round'
          />
          <path
            d='M52.333 65H585.666'
            strokeWidth='66.6667'
            strokeLinecap='round'
          />
        </svg>
      </button>
      <SidebarDrawer
        open={sidebarOpen}
        setOpen={setSidebarOpen}
        direction={'left'}
        outsideClose={true}
        className='sm:w-[60%] w-[70%] p-4 h-screen'
      >
        <DrawerContent>
          <figure className='flex justify-between  w-full items-center'>
            <Link
              href='/'
              className='flex gap-2 items-center text-2xl font-semibold border-b  py-2'
            >
              <div className='relative flex items-center font-bold gap-2 '>
                <VscSymbolInterface className='bg-black dark:bg-white dark:text-black text-white rounded-lg h-8 w-8 p-1' />
                Sajilo UI{' '}
              </div>{' '}
            </Link>

            <button
              className='md:hidden flex'
              onClick={() => setSidebarOpen(false)}
            >
              <X />
            </button>
          </figure>
          {/* <GitHubButton /> */}

          <ScrollArea className='h-[95%] py-4 pb-12'>
            <ul className='pb-3'>
              {basePath?.map((link, index) => {
                return (
                  <>
                    <li key={`id-${index}`}>
                      <Link
                        href={link.href}
                        onClick={() => setSidebarOpen(false)}
                        className={`flex gap-2 group font-medium items-center py-1  transition-all ${
                          link.href === pathname
                            ? 'active-nav'
                            : 'text-slate-600 hover:text-slate-900  dark:text-slate-400 dark:hover:text-white'
                        }`}
                      >
                        {React.cloneElement(link?.icon, {
                          className: `${
                            link.href === pathname
                              ? 'dark:text-base-dark dark:bg-white bg-base-dark text-white'
                              : 'dark:bg-gray-800 dark:text-white group-hover:bg-base-dark group-hover:text-white  dark:group-hover:bg-white dark:group-hover:text-base-dark'
                          } h-7 w-7 border transition-all  rounded-sm p-1.5`,
                        })}

                        {link.name}
                      </Link>
                    </li>
                  </>
                );
              })}
            </ul>
            <h1 className='text-sm font-semibold pb-1'>Components</h1>
            <ul>
              {[...SpecialComponents]?.map((link) => {
                // {[...MainComponents, ...SpecialComponents]?.map((link) => {

                return (
                  <>
                    <li>
                      <Link
                        href={link.href}
                        className={`font-normal    dark:hover:text-white  py-1 pl-2  border-l transition-all   ${
                          link.href === pathname
                            ? 'dark:border-white border-black text-black dark:text-white font-medium'
                            : 'dark:text-slate-400 hover:border-black/60 dark:hover:border-white/50 text-slate-500 hover:text-slate-900'
                        }`}
                        // data-active={link.id === pathname}
                        key={link.href}
                        onClick={() => setSidebarOpen(false)}
                      >
                        {link.name}
                      </Link>
                    </li>
                  </>
                );
              })}
            </ul>
          </ScrollArea>
        </DrawerContent>
      </SidebarDrawer>
    </>
  );
}

export default MobileHeader;
