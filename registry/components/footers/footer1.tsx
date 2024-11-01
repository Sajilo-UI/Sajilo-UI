import React from 'react';

const Footer: React.FC = () => {
  const title = "Your Company";
  const description = "Your company's description goes here.";
  const links = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#' },
    { label: 'Contact', href: '#' },
  ];
  const policies = [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
  ];

  return (
    <footer className='bg-[#FAFAFA] border-t border-[#EBEBEB] text-gray-800 dark:bg-[#0A0A0A] dark:border-[#252525] dark:text-white'>
      <div className='container mx-auto py-8 px-4'>
        <div className='flex flex-wrap justify-between items-center'>
          <div className='w-full md:w-1/3 text-center md:text-left mb-4 md:mb-0'>
            <h2 className='text-xl font-bold'>{title}</h2>
            <p className='text-sm'>{description}</p>
          </div>
          <div className='w-full md:w-1/3 text-center mb-4 md:mb-0'>
            <ul className='flex justify-center space-x-4'>
              {links.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className='hover:underline'>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className='w-full md:w-1/3 text-center md:text-right'>
            <ul className='flex justify-center md:justify-end space-x-4'>
              {policies.map((policy, index) => (
                <li key={index}>
                  <a href={policy.href} className='hover:underline'>{policy.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className='text-center py-5 border-t border-[#EBEBEB] dark:border-[#252525] mt-4'>
          <p className='text-sm'>
            © {new Date().getFullYear()} {title}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;