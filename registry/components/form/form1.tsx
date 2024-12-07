import React from 'react';

const Form = () => {
  return (
    <div className='max-w-lg mx-auto p-8 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900'>
      <h2 className='text-3xl font-bold text-center mb-4 text-gray-900 dark:text-gray-100'>
        Get In Touch
      </h2>
      <p className='text-center text-gray-600 dark:text-gray-400 mb-8'>
        We&apos;re here to help! Feel free to reach out with any questions.
      </p>
      <form className='space-y-6'>
        <div className='flex flex-col sm:flex-row sm:space-x-4'>
          <div className='flex-1'>
            <input
              type='text'
              name='name'
              placeholder='Your Name'
              required
              className='w-full p-4 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition duration-300 ease-in-out'
            />
          </div>
          <div className='flex-1'>
            <input
              type='email'
              name='email'
              placeholder='Your Email'
              required
              className='w-full p-4 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition duration-300 ease-in-out'
            />
          </div>
        </div>
        <textarea
          name='message'
          placeholder='Your Message'
          required
          rows={4}
          className='w-full p-4 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition duration-300 ease-in-out'
        />
        <button
          type='submit'
          className='w-full py-3 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 transition-all duration-300 ease-in-out'
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Form;