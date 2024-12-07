'use client';

import Marquee from 'react-fast-marquee';

const reviews = [
  {
    name: 'Samir',
    username: '@samirn',
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: 'https://avatar.vercel.sh/jack',
  },
  {
    name: 'Piyush',
    username: '@piyush',
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: 'https://avatar.vercel.sh/jill',
  },
  {
    name: 'John',
    username: '@john',
    body: 'This product has changed my life for the better!',
    img: 'https://avatar.vercel.sh/john',
  },
  {
    name: 'Jane',
    username: '@jane',
    body: "Absolutely fantastic! I can't recommend it enough.",
    img: 'https://avatar.vercel.sh/jane',
  },
  {
    name: 'Jenny',
    username: '@jenny',
    body: "The best experience I've ever had. Truly remarkable!",
    img: 'https://avatar.vercel.sh/jenny',
  },
  {
    name: 'James',
    username: '@james',
    body: "Incredible quality and attention to detail. I'm impressed!",
    img: 'https://avatar.vercel.sh/james',
  },
];

// ReviewCard component for displaying individual reviews
interface ReviewCardProps {
  img: string;
  name: string;
  username: string;
  body: string;
}

const ReviewCard = ({ img, name, username, body }: ReviewCardProps) => (
  <figure className='flex-shrink-0 w-64 cursor-pointer overflow-hidden h-36 rounded-xl border border-gray-200 dark:border-gray-600 shadow-md p-4 bg-white dark:bg-gray-800 mx-2 '>
    <div className='flex items-center gap-2'>
      <img
        className='rounded-full w-10 h-10 object-cover'
        alt={`${name}'s avatar`}
        src={img}
      />
      <div className='flex flex-col'>
        <figcaption className='text-sm font-semibold text-gray-800 dark:text-gray-200'>
          {name}
        </figcaption>
        <p className='text-xs font-medium text-gray-600 dark:text-gray-400'>
          {username}
        </p>
      </div>
    </div>
    <blockquote className='mt-2 text-sm text-gray-700 dark:text-gray-300'>
      {body}
    </blockquote>
  </figure>
);

// Main MarqueeDemo component
const MarqueeDemo = () => (
  <div className='relative flex flex-col items-center justify-center w-full overflow-hidden rounded-lg py-20 '>
    {/* First Row Marquee */}
    <Marquee
      loop={10}
      autoFill
      direction='left'
      speed={50}
      className='py-4'
    >
      {reviews.map((review) => (
        <ReviewCard key={review.username} {...review} />
      ))}
    </Marquee>

    {/* Second Row Marquee */}
    <div className='mt-1'>
      <Marquee
        loop={10}
        autoFill
        direction='right'
        speed={50}
        className='py-4'
      >
        {reviews.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
    </div>
  </div>
);

export default MarqueeDemo;
