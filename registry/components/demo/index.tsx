import React from 'react';

// Sceleton function
interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      className={`animate-pulse bg-gray-300  ${className || ''}`}
      {...props}
    />
  );
}

// Example how to use
export default function Demo() {
  return (
    <div className='space-y-2 '>
      <Skeleton className='w-14 h-14 rounded-full' />
      <div className='space-y-2'>
        <Skeleton className='w-52 h-6  rounded-md ' />
        <Skeleton className='w-52 h-4  rounded-md' />
        <Skeleton className='w-52 h-4  rounded-md' />
      </div>
    </div>
  );
}
