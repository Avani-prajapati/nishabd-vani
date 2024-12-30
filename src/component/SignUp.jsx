import React, { useState, useContext,useEffect } from 'react';
import { signin } from '../context/CreateContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
  const [sign, setSign] = useContext(signin);
  const navigate = useNavigate();

  // Define state variables for input fields
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [gurdianEmail, setGurdianEmail] = useState('');
  const [gurdianEmail,setGurdianEmail]=useState('');

  useEffect(() => {
    setSign(false);
  }, [setSign]);

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    axios.post('http://localhost:5000/students/register', {
          name,
          username,
          email,
          password,
          gurdianEmail,
          withCredentials:true
        },)
        .then(response=>{
              
                axios.post('http://localhost:5000/students/login', { email, password ,withCredentials:true})
                .then((res) => {
                  localStorage.setItem('token', res.data.token);
                  setSign(true);
                  navigate('/');
                  window.location.reload();
                })
                .catch((err) => console.error(err));
              } 
        )
        .catch(error=>{
          console.error("Error during sign-up:", error);
          alert(error.response.data.message);
        })
  };

  return (
    <div className='flex justify-center items-center min-h-screen bg-blue-200' id='signup'>
      <div className="block md:flex justify-center items-center md:mx-40 mx-6 p-3 shadow-lg bg-white rounded-lg">
        
        {/* Left side */}
        <div className="md:w-1/2 hidden md:flex bg-blue-50 text-black  flex-col justify-center items-center p-8 rounded-lg h-[34rem]">
          <img src="ImagesNV/signin/NVlogoS.png" alt="Feature Illustration" className="h-16" />
          <div>
            <img src="ImagesNV/signin/SignInn.png" alt="Feature Illustration" className="w-full h-[24rem]" />
          </div>
        </div>

        {/* Right side */}
        <div className="md:w-1/2 flex flex-col justify-center items-center gap-2 md:p-8 text-sm md:text-lg bg-white rounded-lg">
          <h2 className="md:text-2xl font-semibold mb-2">Sign Up</h2>
          <form className="w-3/4 space-y-4" onSubmit={handleSubmit}>
            
            {/* Name input */}
            <input
              type="text"
              placeholder="Name"
              className="w-full p-2 md:p-3 border border-gray-300 rounded-md hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-200"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            
            {/* Username input */}
            <input
              type="text"
              placeholder="Username"
              className="w-full p-3 border border-gray-300 rounded-md hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-200"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />

            {/* Email input */}
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded-md hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-200"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            {/* Password input */}
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border border-gray-300 rounded-md hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-200"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            {/* Guardian's Email input */}
            <input
              type="email"
              placeholder="Guardian's Email"
              className="w-full p-3 border border-gray-300 rounded-md hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-200"
              value={gurdianEmail}
              onChange={(e) => setGurdianEmail(e.target.value)}
            />
           
            {/* Submit button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition"
            >
              SignUp
            </button>
            
            {/* Google Sign-Up button */}
           
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
