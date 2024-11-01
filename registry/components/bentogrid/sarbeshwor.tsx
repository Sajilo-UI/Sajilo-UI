import React from 'react';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1729641962638-386ca5e61f35?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Beautiful Landscape 4',
  },
  {
    src: 'https://images.unsplash.com/photo-1727713144442-69f31f0510ba?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Beautiful Landscape 2',
  },
  {
    src: 'https://images.unsplash.com/photo-1730131837094-5e5259fb2854?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Beautiful Landscape 3',
  },
  {
    src: 'https://images.unsplash.com/photo-1513614835783-51537729c8ba?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Beautiful Landscape 7',
  },

  {
    src: 'https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Beautiful Landscape 5',
  },
  {
    src: 'https://images.unsplash.com/photo-1529733905113-027ed85d7e33?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Beautiful Landscape 6',
  },
  {
    src: 'https://images.unsplash.com/photo-1504448252408-b32799ff32f3?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Beautiful Landscape 1',
  },
  {
    src: 'https://images.unsplash.com/photo-1533130061792-64b345e4a833?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Beautiful Landscape 8',
  },
];

const BentoGrid = () => {
  return (
    <div className='overlap-group relative w-full p-4'>
      <div className='text-wrapper text-center pt-4 font-istok-web-regular font-bold text-black dark:text-white text-2xl'>
        Bento grid{' '}
      </div>
      <div className='rectangle mx-auto mb-4 w-56 h-2 rounded-full bg-gray-300'></div>

      {/* Grid container for images */}
      <div className='columns-1 sm:columns-2 md:columns-3 gap-2'>
        {images.map((image, index) => (
          <img
            className='w-full  object-cover rounded-xl my-2' // Set a fixed height for all images
            src={image.src}
            alt={image.alt}
          />
        ))}
      </div>
    </div>
  );
};

export default BentoGrid;
