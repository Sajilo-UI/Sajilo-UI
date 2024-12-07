import React from 'react';
import {
  HiHome,
  HiOutlineUserCircle,
  HiShoppingCart,
  HiCog,
} from 'react-icons/hi';

const iconData = [
  { id: 1, icon: <HiHome className='w-6 h-6' />, label: 'Home', href: '/' },
  {
    id: 2,
    icon: <HiShoppingCart className='w-6 h-6' />,
    label: 'Shop',
    href: '/shop',
  },
  {
    id: 3,
    icon: <HiOutlineUserCircle className='w-6 h-6' />,
    label: 'Profile',
    href: '/profile',
  },
  {
    id: 4,
    icon: <HiCog className='w-6 h-6' />,
    label: 'Settings',
    href: '/settings',
  },
];

const BottomNavigation = () => {
  return (
    // add class fixed bottom-0 left-0 right-0 too 
    <div className=' bg-white dark:bg-black border border-gray-200 dark:border-[#030618] shadow-lg rounded-t-lg'>
      <div className='flex justify-around items-center p-4'>
        {iconData.map((item) => (
          <a
            key={item.id}
            href={item.href}
            className='flex flex-col items-center hover:scale-105 transition-transform text-[#18181B] dark:text-[#FAFAFA]  duration-200 cursor-pointer'
          >
            {item.icon}
            <span className='text-xs'>{item.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default BottomNavigation;
