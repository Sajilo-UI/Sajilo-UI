import React from 'react'

const price = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center space-x-4">
        <div className="max-w-sm rounded-lg shadow-lg bg-white p-6 text-center">
            <h3 className="text-lg font-semibold">Basic</h3>
            <p className="text-4xl font-bold mt-2">$10<span className="text-sm">/mo</span></p>
            <ul className="mt-4 space-y-2 text-gray-600">
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
            </ul>
            <button className="mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Get Started</button>
        </div>
        <div className="max-w-sm rounded-lg shadow-lg bg-white p-6 text-center border-2 border-blue-500">
            <h3 className="text-lg font-semibold text-blue-500">Pro</h3>
            <p className="text-4xl font-bold mt-2">$30<span className="text-sm">/mo</span></p>
            <ul className="mt-4 space-y-2 text-gray-600">
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
            </ul>
            <button className="mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Get Started</button>
        </div>
        <div className="max-w-sm rounded-lg shadow-lg bg-white p-6 text-center">
            <h3 className="text-lg font-semibold">Enterprise</h3>
            <p className="text-4xl font-bold mt-2">$50<span className="text-sm">/mo</span></p>
            <ul className="mt-4 space-y-2 text-gray-600">
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
            </ul>
            <button className="mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Get Started</button>
        </div>
        </div>
    </>
  )
}

export default price
