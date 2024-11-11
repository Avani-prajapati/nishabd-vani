// import React, { useState, useContext ,useEffect} from 'react';
// import { signin, userContext } from '../context/CreateContext';
// import { Navigate, useNavigate } from 'react-router-dom';
// import axios from 'axios'; // Import axios to make HTTP requests

// const SignIn = () => {
//   const [sign, setSign] = useContext(signin);
//   useEffect(() => {
//     setSign(false);
//   }, [setSign]);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//       axios.post('http://localhost:5000/students/login',{email,password})
//      .then(res => {console.log(res.data.token)
//         localStorage.setItem('token',res.data.token);
//         console.log(localStorage.getItem('token'));
//         setSign(true);
//         navigate('/');
//         window.location.reload() 
      
//      })
//      .catch(err => console.log(err));
//   };

//   return (
//     <div className='flex justify-center items-center min-h-screen bg-blue-200 '>
//       <div className="block md:flex justify-center items-center md:mx-40 mx-6 p-3 shadow-lg bg-white rounded-lg">
        
//         {/* Left side */}
//         <div className="md:w-1/2 bg-blue-50 text-black hidden md:flex flex-col justify-center items-center p-8 rounded-lg">
//           <img src="ImagesNV/signin/NVlogoS.png" alt="Feature Illustration" className="h-12" />
//           <div>
//             <img src="ImagesNV/signin/SignInn.png" alt="Feature Illustration" className="w-full" />
//           </div>
//         </div>

//         {/* Right side */}
//         <div className="md:w-1/2 flex flex-col justify-center items-center gap-2 p-8 bg-white rounded-lg">
//           <h2 className="text-2xl font-semibold mb-2">Sign In</h2>
//           <form className="w-3/4 space-y-4" onSubmit={handleSubmit}>

//             {/* Role selection */}
//             <div className="flex items-center gap-14">
//               <label className="text-gray-600 font-bold">Role :</label>
//               <div className="flex items-center space-x-2">
//                 <input type="radio" id="student" name="role" value="Student" className="focus:ring-blue-200" />
//                 <label htmlFor="student" className="text-gray-600">Student</label>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <input type="radio" id="teacher" name="role" value="Teacher" className="focus:ring-blue-200" />
//                 <label htmlFor="teacher" className="text-gray-600">Teacher</label>
//               </div>
//             </div>

//             {/* Email and Password inputs */}
//             <input
//               type="email"
//               placeholder="Email"
//               className="w-full p-3 border border-gray-300 rounded-md hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-200"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               className="w-full p-3 border border-gray-300 rounded-md hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-200"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
            
//             <div className="flex justify-between items-center text-sm text-blue-500">
//               <a href="#" className="hover:underline">Forgot Password?</a>
//             </div>
            
//             {/* Submit button */}
//             <button
//               type="submit"
//               className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition"
//             >
//               Sign in
//             </button>

//             {/* Google Sign-In button */}
//             <button
//               type="button"
//               className="w-full border border-gray-300 text-gray-600 p-3 rounded-md hover:bg-gray-100 transition flex justify-center items-center space-x-2"
//             >
//               <span>Sign in with Google</span>
//             </button>
//           </form>
//           <p className="text-sm text-gray-600 mt-4">
//             Don’t have an account? <a href="/signup" className="text-blue-500 hover:underline">Sign up</a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignIn;

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
        <div className="md:w-1/2 flex flex-col items-center gap-4 p-8 bg-white rounded-lg">
          <h2 className="text-2xl font-semibold">Sign In</h2>
          <form className="w-3/4 space-y-4" onSubmit={handleSubmit}>
            
            {/* Role Selection
            <div className="flex items-center gap-4">
              <label className="font-bold text-gray-600">Role:</label>
              <label className="flex items-center gap-2">
                <input type="radio" name="role" value="Student" className="focus:ring-blue-200" />
                <span>Student</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="role" value="Teacher" className="focus:ring-blue-200" />
                <span>Teacher</span>
              </label>
            </div> */}

            {/* Email and Password Fields */}
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-200"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-200"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            
            {/* Links and Buttons */}
            <div className="flex justify-between text-sm">
              <a href="#" className="text-blue-500 hover:underline">Forgot Password?</a>
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600">
              Sign In
            </button>
            <button type="button" className="w-full border text-gray-600 p-3 rounded-md hover:bg-gray-100 flex justify-center items-center">
              Sign in with Google
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
