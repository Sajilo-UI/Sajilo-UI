import React from 'react';
import { FaLinkedinIn } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Hero = () => {
  return (
    <section
      id='profile'
      className='flex flex-col md:flex-row items-center justify-center my-10 px-6 '
    >
      {/* Profile Picture */}
      <div className='w-32 h-32 md:w-48 md:h-48 mb-6 md:mb-0 md:mr-8'>
        <img
          src='https://via.placeholder.com/192'
          alt='Profile picture'
          className='rounded-full object-cover'
        />
      </div>

      {/* Text and Buttons */}
      <div className='text-center items-center flex flex-col gap-3  md:text-left'>
        <p className='text-lg text-gray-500'>Hello, I'm</p>
        <h1 className='text-4xl font-bold text-gray-800 dark:text-gray-100'>
          Sarvesh
        </h1>
        <p className='text-2xl font-semibold text-gray-600 dark:text-gray-300'>
          Sarbeswar Adhikari
        </p>
        <p className='text-gray-500 dark:text-gray-400'>
          Co-Founder and MD at Vedanta Media Network
        </p>
        <p className='text-gray-500 dark:text-gray-400'>
          Student Partner at Internshala
        </p>

        {/* Buttons */}
        <div className='mt-6 flex justify-center md:justify-start space-x-4'>
          <button className='btn bg-white px-3 w-32 py-2 font-semibold text-black border border-black hover:bg-blue-600 rounded-full'>
            Resume
          </button>
          <button className='btn bg-black px-3 py-2 font-medium text-white rounded-full '>
            Contact me
          </button>
        </div>

        {/* Social Links */}
        <div className='flex justify-center md:justify-start space-x-4 mt-4'>
          <a href='#' target='_blank' rel='noopener noreferrer'>
            <FaLinkedinIn className='icon h-8 w-8 text-black dark:text-white rounded ' />
          </a>
          <a href='#' target='_blank' rel='noopener noreferrer'>
            <FaGithub className='icon h-8 w-8 text-black dark:text-white rounded ' />
          </a>
          <a href='#' target='_blank' rel='noopener noreferrer'>
            <FaInstagram className='icon h-8 w-8 text-black dark:text-white rounded ' />
          </a>
          <a href='#' target='_blank' rel='noopener noreferrer'>
            <FaXTwitter className='icon h-8 w-8 text-black dark:text-white rounded ' />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
