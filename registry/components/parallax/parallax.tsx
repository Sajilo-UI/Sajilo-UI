'use client';
import React, { useEffect, useRef } from 'react';

const ParallaxComponent = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    const timer = setTimeout(() => {
      if (dialog) {
        dialog.showModal();
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const closeDialog = () => {
    dialogRef.current?.close();
  };

  return (
    <div>
      <section className='w-full bg-[url("https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDV8fGFwcGxlJTIwcGFyYWxsbGVsfGVufDB8fHx8MTY3NzY2Mzc2NA&ixlib=rb-1.2.1&q=80&w=1080")] md:py-52 py-28 bg-cover bg-center my-20 border bg-fixed bg-no-repeat'>
        <h1 className='text-center text-white text-4xl md:text-5xl font-bold'>
          Lorem ipsum dolor sit amet
        </h1>
        <p className='mt-4 text-center text-lg text-white'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero.
        </p>
      </section>

      <section className='w-5/6 m-auto mt-10 grid grid-cols-1 gap-x-3 gap-y-10 md:grid-cols-2 max-w-6xl items-center mb-20'>
        <div className='py-3 px-2'>
          <img
            src='https://images.unsplash.com/photo-1585565804112-f201f68c48b4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='Apple Product'
            className='rounded-lg shadow-lg'
          />
        </div>

        <div className='py-3 px-2'>
          <h1 className='text-4xl md:text-5xl mb-8 text-gray-800 dark:text-white'>
            Lorem ipsum dolor sit amet
          </h1>
          <p className='text-md text-gray-600 dark:text-gray-300'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam.
            <br />
            Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis
            ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ParallaxComponent;
