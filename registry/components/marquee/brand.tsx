'use client';
import React from 'react';
import {
  FaGithub,
  FaYoutube,
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
} from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiVite, SiFirebase } from 'react-icons/si';
import Marquee from 'react-fast-marquee';

const icons = [
  FaGithub,
  FaYoutube,
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  SiNextdotjs,
  SiTailwindcss,
  SiVite,
  SiFirebase,
];

const LogoCarousel = () => {
  return (
    <main className='relative flex flex-col justify-center  overflow-hidden'>
      <div className='w-full  mx-auto '>
        <div className='text-center'>
          {/* Logo Carousel using Marquee */}
          <Marquee
            className='flex items-center justify-center'
            speed={60} // Adjust speed
            pauseOnHover={true} // Pause on hover
            loop={100} // Looping
          >
            {/* Duplicating icons for seamless scrolling */}
            {[...icons, ...icons].map((Icon, index) => (
              <div
                key={index}
                className='mx-8 text-5xl md:text-6xl text-gray-800 dark:text-gray-200 transition-transform duration-300 hover:scale-110'
              >
                <Icon />
              </div>
            ))}
          </Marquee>
          {/* End: Logo Carousel using Marquee */}
        </div>
      </div>
    </main>
  );
};

export default LogoCarousel;
