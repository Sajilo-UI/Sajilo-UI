import React from 'react';

const Price = () => {
  const pricingPlans = [
    {
      name: 'Basic',
      price: '$10',
      period: '/mo',
      description: 'Perfect for individuals',
      features: ['Access to basic features', 'Email support', '10GB storage'],
      color: 'text-gray-800 dark:text-gray-100',
    },
    {
      name: 'Pro',
      price: '$30',
      period: '/mo',
      description: 'Best for small teams',
      features: ['Everything in Basic', 'Priority support', '50GB storage'],
      color: 'text-blue-500 dark:text-blue-400',
      highlight: true,
    },
    {
      name: 'Enterprise',
      price: '$50',
      period: '/mo',
      description: 'Ideal for large organizations',
      features: ['All Pro features', 'Dedicated support', '200GB storage'],
      color: 'text-gray-800 dark:text-gray-100',
    },
  ];

  return (
    <div className='py-12 bg-white-to-r from-blue-500 to-blue-600 dark:from-gray-800 dark:to-gray-900'>
      <h2 className='text-center text-3xl font-bold text-white mb-8'>
        Choose Your Plan
      </h2>
      <div className='grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center px-4'>
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-lg shadow-lg bg-white dark:bg-gray-800 p-8 text-center transition-transform transform hover:scale-105 ${
              plan.highlight
                ? 'border-2 border-blue-500 dark:border-blue-400'
                : ''
            }`}
          >
            <h3 className={`text-2xl font-semibold ${plan.color}`}>
              {plan.name}
            </h3>
            <p className='text-gray-500 dark:text-gray-400 mt-1'>
              {plan.description}
            </p>
            <p className='text-4xl font-extrabold mt-4 text-gray-900 dark:text-gray-50'>
              {plan.price}
              <span className='text-lg font-normal'>{plan.period}</span>
            </p>
            <ul className='mt-6 space-y-3 text-gray-600 dark:text-gray-300'>
              {plan.features.map((feature, i) => (
                <li key={i} className='flex items-center justify-center'>
                  <svg
                    className='w-4 h-4 mr-2 text-blue-500 dark:text-blue-400'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path d='M10 15l-5-5 1.41-1.41L10 12.17l7.59-7.59L19 5l-9 9z' />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <button className='mt-8 w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-300 transition-colors'>
              Get Started
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Price;