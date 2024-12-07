'use client';
import React, { useRef, useState } from 'react';
import {
  FaHome,
  FaSearch,
  FaPlusSquare,
  FaCompass,
  FaHeart,
  FaUser,
} from 'react-icons/fa';

import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion';
import Link from 'next/link';

// Define the type for each link item
interface LinkItem {
  title: string;
  icon: JSX.Element;
  href: string;
  ariaLabel?: string;
}

// Define the links array with typed items
const links: LinkItem[] = [
  {
    title: 'Home',
    icon: <FaHome />,
    href: '#',
    ariaLabel: 'Home',
  },
  {
    title: 'Search',
    icon: <FaSearch />,
    href: '#',
    ariaLabel: 'Search',
  },
  {
    title: 'New Post',
    icon: <FaPlusSquare />,
    href: '#',
    ariaLabel: 'New Post',
  },
  {
    title: 'Explore',
    icon: <FaCompass />,
    href: '#',
    ariaLabel: 'Explore',
  },
  {
    title: 'Notifications',
    icon: <FaHeart />,
    href: '#',
    ariaLabel: 'Notifications',
  },
  {
    title: 'Profile',
    icon: <FaUser />,
    href: '#',
    ariaLabel: 'Profile',
  },
];

const FloatingDockDemo: React.FC = () => (
  <div className='flex items-center justify-center  w-full'>
    <FloatingDock items={links} />
  </div>
);

export default FloatingDockDemo;

interface FloatingDockProps {
  items: LinkItem[];
}

const FloatingDock: React.FC<FloatingDockProps> = ({ items }) => (
  <FloatingDockDesktop items={items} />
);

const FloatingDockDesktop: React.FC<FloatingDockProps> = ({ items }) => {
  const mouseX = useMotionValue(Infinity);
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className='mx-auto flex h-16 gap-4 items-end rounded-2xl bg-gray-100 dark:bg-gray-900 px-4 pb-3 shadow-lg'
    >
      {items.map((item) => (
        <IconContainer key={item.title} mouseX={mouseX} {...item} />
      ))}
    </motion.div>
  );
};

interface IconContainerProps extends LinkItem {
  mouseX: any;
}

const IconContainer: React.FC<IconContainerProps> = ({
  mouseX,
  title,
  icon,
  href,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const distance = useTransform(
    mouseX,
    (val: number) =>
      val -
      (ref.current
        ? ref.current.getBoundingClientRect().x +
          ref.current.getBoundingClientRect().width / 2
        : 0)
  );

  // Smooth size animation with faster response
  const size = useSpring(useTransform(distance, [-150, 0, 150], [40, 80, 40]), {
    mass: 0.1,
    stiffness: 120, // Increased stiffness for a faster response
    damping: 14, // Adjusted damping for a quicker stop
  });

  const [hovered, setHovered] = useState(false);

  return (
    <Link href={href} aria-label={title}>
      <motion.div
        ref={ref}
        style={{ width: size, height: size }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`aspect-square rounded-2xl bg-gray-200 dark:bg-gray-800 flex items-center justify-center relative transition-transform duration-300 ease-in-out ${hovered ? 'scale-110' : 'scale-100'}`}
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              className='px-2 py-0.5 rounded-md bg-gray-300 dark:bg-neutral-800 dark:border-neutral-900 dark:text-white border-gray-200 text-neutral-700 absolute left-1/2 -translate-x-1/2 -top-8 w-fit text-xs'
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 2 }}
              transition={{ duration: 0.2, ease: 'easeOut' }} // Faster tooltip transition
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          className='flex items-center justify-center text-2xl text-gray-800 dark:text-gray-200'
          style={{
            scale: hovered ? 1.3 : 1,
            transition: 'transform 0.3s ease-in-out', // Faster scaling transition
          }}
        >
          {icon}
        </motion.div>
      </motion.div>
    </Link>
  );
};
