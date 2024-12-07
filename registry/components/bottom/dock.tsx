import React from 'react';

// React
// import { motion } from "framer-motion"

// React Server Components
import * as motion from 'framer-motion/client';

import {
  HiHome,
  HiOutlineUserCircle,
  HiBell,
  HiHeart,
  HiSearch,
} from 'react-icons/hi';
import { MdOutlineExplore } from 'react-icons/md';

const iconData = [
  { icon: <HiHome className='h-8 w-8' />, label: 'Home', href: '#' },
  {
    icon: <MdOutlineExplore className='h-8 w-8' />,
    label: 'Explore',
    href: '#',
  },
  { icon: <HiBell className='h-8 w-8' />, label: 'Notifications', href: '#' },
  { icon: <HiHeart className='h-8 w-8' />, label: 'Favorites', href: '#' },
  { icon: <HiSearch className='h-8 w-8' />, label: 'Search', href: '#' },
  {
    icon: <HiOutlineUserCircle className='h-8 w-8' />,
    label: 'Profile',
    href: '#',
  },
];

const BottomNavigation = () => {
  return (
    // add fixed bottom-4 left-0 right-0 too
    <div className=' flex justify-center'>
      <div className='flex items-center space-x-6 bg-white dark:bg-black border border-gray-200 dark:border-[#030618] shadow-xl rounded-2xl px-6 py-3'>
        {iconData.map((item, index) => (
          <motion.a
            key={index}
            href={item.href}
            className='relative flex flex-col items-center text-[#18181B] dark:text-[#FAFAFA] cursor-pointer group'
            whileHover={{ scale: 1.2 }} // Slightly reduce scale for a subtle effect
            transition={{ duration: 0.3 }}
          >
            {/* Icon */}
            {item.icon} {/* Make icons larger by setting width and height */}
            {/* Tooltip Label */}
            <motion.span className='absolute -top-10 opacity-0 text-xs bg-gray-800 text-white dark:bg-gray-200 dark:text-black py-1 px-2 rounded-lg transform scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200'>
              {item.label}
            </motion.span>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default BottomNavigation;
