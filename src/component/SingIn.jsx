// File: login.jsx
import { useContext } from 'react';
import { signin } from '../context/CreateContext';
import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const SignIn = () => {

  // const [sign,setSign] = useContext(signin);
  // const navigate = useNavigate();

  return (
    <div className='flex justify-center items-center min-h-screen bg-blue-200 '>
    <div className="block md:flex justify-center items-center md:mx-40 mx-6 p-3  shadow-lg bg-white rounded-lg">
      {/* Left side */}
      <div className="md:w-1/2 bg-blue-50  text-black flex flex-col justify-center items-center p-8 rounded-lg">
      <img
          src="ImagesNV/signin/NVlogoS.png" 
          alt="Feature Illustration"
          className="h-12 "
        />
      <div>
        <img
          src="ImagesNV/signin/SignInn.png" 
          alt="Feature Illustration"
          className="w-full "
        />
      </div>
      </div>

      {/* Right side */}
      <div className="md:w-1/2 flex flex-col justify-center items-center gap-2 p-8 bg-white rounded-lg">
        <h2 className="text-2xl font-semibold mb-2">Sign In</h2>
        {/* <p className="mb-8 text-gray-600">Welcome back! Please enter your details to log in.</p> */}
        <form className="w-3/4 space-y-4">


        <div className="flex items-center gap-14">
              <label className="text-gray-600 font-bold">Role :</label>
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="student"
                  name="role"
                  value="Student"
                  className="focus:ring-blue-200"
                />
                <label htmlFor="student" className="text-gray-600">Student</label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="teacher"
                  name="role"
                  value="Teacher"
                  className="focus:ring-blue-200"
                />
                <label htmlFor="teacher" className="text-gray-600">Teacher</label>
              </div>
            </div>


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
          <div className="flex justify-between items-center text-sm text-blue-500">
            <a href="#" className="hover:underline">Forgot Password?</a>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition"
            // onClick={()=>{
            //   setSign(true);
            //   navigate('/')
            // }}
          >
            Sign in
          </button>
          <button
            type="button"
            className="w-full border border-gray-300 text-gray-600 p-3 rounded-md hover:bg-gray-100 transition flex justify-center items-center space-x-2"
          >
            <span>Sign in with Google</span>
          </button>
        </form>
        <p className="text-sm text-gray-600 mt-4">
          Don’t have an account? <a href="/signup" className="text-blue-500 hover:underline">Sign up</a>
        </p>
      </div>
    </div>
    </div>
  );
};

export default SignIn;