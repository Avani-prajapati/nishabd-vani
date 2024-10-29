// File: login.jsx

import React from 'react';

const SignUp = () => {
  return (
    <div className='flex justify-center items-center min-h-screen bg-blue-200 ' id='signup'>
    <div className="block md:flex justify-center items-center md:mx-40 mx-6 p-3 shadow-lg bg-white rounded-lg">
      {/* Left side */}
      <div className="md:w-1/2 bg-blue-50  text-black flex flex-col justify-center items-center p-8 rounded-lg h-full ">
      <img
          src="ImagesNV/signin/NVlogoS.png" 
          alt="Feature Illustration"
          className="h-12 "
        />
      <div>
        <img
          src="ImagesNV/signin/SignInn.png" 
          alt="Feature Illustration"
          className="w-full h-full "
        />
      </div>
      </div>

      {/* Right side */}
      <div className="md:w-1/2 flex flex-col justify-center items-center gap-2 p-8 bg-white rounded-lg">
        <h2 className="text-2xl font-semibold mb-2">Sign Up</h2>
        {/* <p className="mb-8 text-gray-600">Welcome back! Please enter your details to log in.</p> */}
        <form className="w-3/4 space-y-4">
        <input
            type="text"
            placeholder="Name"
            className="w-full p-3 border border-gray-300 rounded-md hover:shadow-md  focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
            <input
            type="text"
            placeholder="Username"
            className="w-full p-3 border border-gray-300 rounded-md hover:shadow-md  focus:outline-none focus:ring-2 focus:ring-blue-200"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded-md hover:shadow-md  focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border border-gray-300 rounded-md hover:shadow-md  focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
              <input
            type="email"
            placeholder="Guardian's Email"
            className="w-full p-3 border border-gray-300 rounded-md hover:shadow-md  focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
         
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition"
          >
            SignUp
          </button>
          <button
            type="button"
            className="w-full border border-gray-300 text-gray-600 p-3 rounded-md hover:bg-gray-100 transition flex justify-center items-center space-x-2"
          >
            <span>Sign up with Google</span>
          </button>
        </form>
        
      </div>
    </div>
    </div>
  );
};

export default SignUp;
