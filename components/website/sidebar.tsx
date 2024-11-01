'use client';
import React, { useEffect, useRef, useState } from 'react';
import { ScrollArea } from '@/components/website/ui/scroll-area';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Component, Rocket } from 'lucide-react';
import { useTheme } from 'next-themes';
import { SpecialComponents } from '@/configs/docs';

import {
  Tooltip,
  TooltipProvider,
  TooltipContent,
  TooltipTrigger,
} from '@radix-ui/react-tooltip';
import { useMediaQuery } from '@/hooks/use-media-query';
export const basePath = [
  {
    href: '/get-started',
    name: 'Get Started',
    icon: <Rocket />,
  },
  {
    href: '/components',
    name: 'Components',
    icon: <Component />,
  },
];

function DocsSidebar() {
  const pathname = usePathname();
  const { setTheme } = useTheme();
  const isDesktop = useMediaQuery('(min-width: 992px)');

  return (
    <>
      {isDesktop && (
        <aside className='h-full border-r'>
          <div className='sticky top-0 h-screen w-full rounded-md pt-[3.2em]'>
            <ScrollArea className='h-full py-4'>
              <ul className='pb-1'>
                {basePath?.map((link, index) => {
                  return (
                    <li key={`id-${index}`}>
                      <Link
                        href={link.href}
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
                          } h-7 w-7 border transition-all rounded-md p-1`,
                        })}

                        {link.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <h1 className='xl:text-lg text-[1.05rem] font-semibold pb-1'>
                Components
              </h1>
              {SpecialComponents?.map((link: any) => {
                return (
                  <li
                    key={link.href}
                    className={`2xl:text-sm xl:text-[0.81em] text-xs  flex items-center gap-1 dark:hover:text-white 2xl:py-1 py-0.5 pl-2 border-l transition-all ${
                      link.href === pathname
                        ? 'dark:border-white border-black text-black dark:text-white font-semibold'
                        : 'dark:text-slate-400 2xl:font-normal font-medium hover:border-black/60 dark:hover:border-white/50 text-slate-500 hover:text-slate-900'
                    }`}
                  >
                    <Link href={link.href}>
                      {link.name}
                    </Link>

                    {link?.updated && (
                      <span className='2xl:text-xs text-[0.74em] bg-green-500 text-white px-1 rounded'>
                        Updated
                      </span>
                    )}

                    {link?.new && (
                      <span className='2xl:text-xs text-[0.74em] bg-blue-500 text-white px-1 rounded'>
                        New
                      </span>
                    )}
                  </li>
                );
              })}
            </ScrollArea>
          </div>
        </aside>
      )}
    </>
  );
}

export default DocsSidebar;
