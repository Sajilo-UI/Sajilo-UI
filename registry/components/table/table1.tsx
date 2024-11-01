import React from 'react';

const SimpleTable = () => {
  // Define columns and data inside the component
  const columns = ['Name', 'Age', 'Occupation'];
  const data = [
    { Name: 'Alice', Age: 30, Occupation: 'Engineer' },
    { Name: 'Bob', Age: 25, Occupation: 'Designer' },
    { Name: 'Charlie', Age: 35, Occupation: 'Teacher' },
  ];

  return (
    <div className='overflow-x-auto'>
      <table className='min-w-full border-collapse border border-gray-300 dark:border-gray-700'>
        <thead>
          <tr className='bg-gray-200 dark:bg-gray-800'>
            {columns.map((column, index) => (
              <th
                key={index}
                className='border border-gray-300 dark:border-gray-700 p-2 text-left text-gray-700 dark:text-gray-300'
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={`${
                rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-100'
              } dark:bg-gray-900`}
            >
              {columns.map((column, colIndex) => (
                <td
                  key={colIndex}
                  className='border border-gray-300 dark:border-gray-700 p-2 text-gray-700 dark:text-gray-300'
                >
                  {row[column as keyof typeof row]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SimpleTable;
