import React, { useState, useContext, useEffect } from 'react';
import { signin } from '../context/CreateContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignIn = () => {
  const [sign, setSign] = useContext(signin);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => setSign(false), [setSign]);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:5000/students/login', { email, password ,withCredentials:true})
      .then((res) => {
        localStorage.setItem('token', res.data.token);
        setSign(true);
        navigate('/');
        window.location.reload();
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-200">
      <div className="block md:flex justify-center items-center md:mx-40 mx-6 p-3 shadow-lg bg-white rounded-lg">
        
        {/* Left Section */}
        <div className="md:w-1/2 hidden md:flex flex-col items-center p-8 bg-blue-50 rounded-lg">
          <img src="ImagesNV/signin/NVlogoS.png" alt="Logo" className="h-12 mb-4" />
          <img src="ImagesNV/signin/SignInn.png" alt="Illustration" className="w-full" />
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 flex flex-col items-center  gap-8 md:gap-11 bg-white rounded-lg">
          <h2 className="text-2xl font-semibold">Sign In</h2>
          <form className="w-3/4 space-y-4" onSubmit={handleSubmit}>
            
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded-md hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-200"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border border-gray-300 rounded-md hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-200"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            
            {/* Links and Buttons */}
            <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600">
              Sign In
            </button>
        
          </form>
          <p className="text-sm mt-4">
            Don’t have an account? <a href="/signup" className="text-blue-500 hover:underline">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
