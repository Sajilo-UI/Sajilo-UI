const Form = () => {
  return (
    <div className='max-w-lg w-full p-6 sm:p-8 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900'>
      <h2 className='text-2xl font-semibold text-center mb-4 text-gray-900 dark:text-gray-100'>
        Get In Touch
      </h2>
      <p className='text-center text-gray-600 dark:text-gray-400 mb-6'>
        Have questions? We&apos;re here to help!
      </p>
      <form className='space-y-5'>
        <div className='flex flex-col sm:flex-row sm:space-x-4'>
          <div className='w-full mt-3'>
            <input
              type='text'
              name='name'
              placeholder='Your Name'
              required
              className='w-full p-3 rounded-md bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 '
            />
          </div>
          <div className='w-full mt-3'>
            <input
              type='email'
              name='email'
              placeholder='Your Email'
              required
              className='w-full p-3 rounded-md bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 '
            />
          </div>
        </div>
        <textarea
          name='message'
          placeholder='Your Message'
          required
          rows={4}
          className='w-full p-3 rounded-md bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 '
        />
        <button
          type='submit'
          className='py-2 w-full rounded-md bg-blue-500 dark:bg-blue-600 text-white hover:bg-blue-600 dark:hover:bg-blue-700 transition-all duration-300 ease-in-out'
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Form;
