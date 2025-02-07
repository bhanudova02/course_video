import { useState } from "react";

const SignIn = () => {
  const [userDetails,setUserDetails] = useState({
    UserName:'',
    Password:''
  });
  
  return (
    <div className='flex justify-center items-center h-screen bg-gray-100'>
      <div className='bg-white p-8 rounded-lg shadow-lg w-full max-w-md'>
        <h2 className='text-2xl font-semibold text-center text-gray-800 mb-6'>Sign In</h2>
        <dl>
          <div className='mb-4'>
            <dt className='text-sm font-medium text-gray-600'>Email</dt>
            <dd>
              <input
                type="email"
                className='w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400'
                placeholder="Enter your email"
              />
            </dd>
          </div>

          <div className='mb-6'>
            <dt className='text-sm font-medium text-gray-600'>Password</dt>
            <dd>
              <input
                type="password"
                className='w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400'
                placeholder="Enter your password"
              />
            </dd>
          </div>

          <div className='mb-4'>
            <button
              type="submit"
              className='w-full bg-green-500 text-white p-3 rounded-md font-semibold hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500'
            >
              Sign In
            </button>
          </div>

          <div className='text-center'>
            <p className='text-sm text-gray-600'>
              Don't have an account?{' '}
              <a href="/sign-up" className='text-green-500 font-semibold'>Sign Up</a>
            </p>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default SignIn;
