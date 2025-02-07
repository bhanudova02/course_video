import React from 'react';

const SignUp = () => {
  return (
    <div className='flex justify-center items-center h-screen bg-gray-100'>
      <div className='bg-white p-8 rounded-lg shadow-lg w-full max-w-md'>
        <h2 className='text-2xl font-semibold text-center text-gray-800 mb-6'>Create an Account</h2>
        <dl>
          <div className='mb-4'>
            <dt className='text-sm font-medium text-gray-600'>User Name</dt>
            <dd>
              <input
                type="text"
                className='w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
                placeholder="Enter your username"
              />
            </dd>
          </div>

          <div className='mb-4'>
            <dt className='text-sm font-medium text-gray-600'>Email</dt>
            <dd>
              <input
                type="email"
                className='w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
                placeholder="Enter your email"
              />
            </dd>
          </div>

          <div className='mb-6'>
            <dt className='text-sm font-medium text-gray-600'>Password</dt>
            <dd>
              <input
                type="password"
                className='w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
                placeholder="Enter your password"
              />
            </dd>
          </div>

          <div>
            <button
              type="submit"
              className='w-full bg-blue-500 text-white p-3 rounded-md font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
            >
              Sign Up
            </button>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default SignUp;
