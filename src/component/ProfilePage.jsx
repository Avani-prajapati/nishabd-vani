// import React, { useContext } from "react";
// import { LineChart } from '@mui/x-charts/LineChart';
// import { signin, userContext } from "../context/CreateContext";
// import { useNavigate } from "react-router-dom";

// const ProfilePage = ({logout}) => {
// const navigate = useNavigate();
// const user = useContext(userContext);

//   const StreakArr = ["fire1.png","fire2.png","fire3.png","fire4.png","fire5.png","fire6.png"];
//   return (
//     <div className="flex gap-6 h-screen ">
//       {/* Left Section - Report Graphs and Monthly Streak */}
//       <div className="w-3/4 p-8">
//         {/* Report Graphs */}
//         <div>
//           <h2 className="text-lg font-bold mb-4">Report Graphs</h2>
//           <div className="flex space-x-4">
//             {/* Science Card */}
//             <div className="bg-green-100 rounded-lg p-4 w-1/3 shadow-md">
//               <h3 className="font-semibold">Science</h3>
//               <div className="h-44 bg-white p-2 rounded-md mt-2 flex items-center justify-center">
//                 {/* Placeholder for Graph */}
               
//                 <LineChart
//                 className='font-bold'
//                 xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }]}
//                series={[
//                   {
//                 data: [2, 3, 5.5, 8.5, 1.5, 5, 1, 4, 3, 8],
//                showMark: ({ index }) => index % 2 === 0,
//                   },
//                  ]}
//                 width={500}
//                  height={300}
//               />
//               </div >
//               <div className="flex justify-between mt-2 font-semibold">
//               <p className="mt-2">Highest:<span className="text-2xl font-normal">19</span>/20</p>
//               <p className="mt-2">Current: <span className="text-2xl font-normal">18</span>/20</p>
//               </div>
//             </div>

//             {/* Alphabets Card */}
//             <div className="bg-purple-100 rounded-lg p-4 w-1/3 shadow-md">
//               <h3 className="font-semibold">Alphabets</h3>
//               <div className="h-44 bg-white p-2 rounded-md mt-2 flex items-center justify-center">
//                 {/* Placeholder for Graph */}
//                 <LineChart
//                 className='font-bold'
//                 xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }]}
//                series={[
//                   {
//                 data: [2, 3, 5.5, 8.5, 1.5, 5, 1, 4, 3, 8],
//                showMark: ({ index }) => index % 2 === 0,
//                   },
//                  ]}
//                 width={500}
//                  height={300}
//               />
//               </div>
//               <div className="flex justify-between mt-2 font-semibold">
//               <p className="mt-2">Highest:<span className="text-2xl font-normal">19</span>/20</p>
//               <p className="mt-2">Current: <span className="text-2xl font-normal">18</span>/20</p>
//               </div>
//             </div>

//             {/* Maths Card */}
//             <div className="bg-red-100 rounded-lg p-4 w-1/3 h-72 shadow-md ">
//               <h3 className="font-semibold">Maths</h3>
//               <div className="h-44 bg-white p-2 rounded-md mt-2 flex items-center justify-center">
//                 {/* Placeholder for Graph */}
//                 <LineChart
//                 className='font-bold w-40'
//                 xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11] }]}
//                series={[
//                   {
//                  data: [17,18,19,20,10,11,14,15,19,20,18],
        
//                   },
//                  ]}
//                  width={500}
//                  height={300}
//               />
//               </div>
//               <div className="flex justify-between mt-2 font-semibold">
//               <p className="mt-2">Highest:<span className="text-2xl font-normal">19</span>/20</p>
//               <p className="mt-2">Current: <span className="text-2xl font-normal">18</span>/20</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Monthly Streak */}
//         <div className="mt-8">
//           <h2 className="text-lg font-bold mb-4">Monthly Streak - August</h2>
//           <div className="grid grid-cols-7 gap-1">
//             {Array.from({ length: 31 }).map((_, index) => (
//                index%5 !== 0?(<div
//                key={index}
//                className="w-10 h-10 rounded-full border-2 border-black  flex items-center justify-center font-bold"
//                >
//                 {index+1}
//                </div>):
         
//             (
//               <div 
//               key={index} 
//               className="relative w-12 h-[3.3rem]" // Ensure this div has the same width/height as the image
//             >
//               <img 
//                 src={`/ImagesNV/Profile/${StreakArr[(index / 5)%6]}`} 
//                 alt="Fire" 
//                 className="w-full h-full" // Image takes up full space of the parent container
//               />
//               <div 
//                 className="absolute inset-0 flex mt-6 ms-4 text-white font- font-bold"
//                 style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 1)" }}
//               >
//                 {index + 1} {/* Index number */}
//               </div>
//             </div>
//           )
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Right Section - Profile Card */}
//       <div className="w-1/4 bg-blue-400 text-white font-bold p-8">
//         {/* Profile Picture */}
//         <div className="flex flex-col items-center">
//           <img
//             src="/ImagesNV/children home.png"
//             alt="Profile"
//             className="rounded-full bg-white w-24 h-24 mb-4"
//           />
//           <h3 className="text-xl font-semibold">{user.name}</h3>
//         </div>
//          <hr className="my-5"></hr>
//         {/* Profile Information */}
//         <div className="mt-8 text-left flex flex-col gap-8">
//           <p className="text-wrap break-words"><span className="font-semibold">Email: </span>{user.email}</p>
//           <p><span className="font-semibold">School Name: </span> The school of science</p>
//           <p><span className="font-semibold">Parents : </span>{user.gurdianEmail} </p>
//         </div>

//         {/* Buttons */}
//         <div className="mt-16">
//           <button className=" text-red-600 bg-white py-2 px-4 rounded-md w-full mb-4"  onClick={()=>{logout()
//             navigate('/');
//             window.location.reload() ;
//           }}>Log Out</button>
//           <button className=" text-blue-600 bg-white py-2 px-4 rounded-md w-full">Edit Profile</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;


import React, { useContext } from "react";
import { LineChart } from '@mui/x-charts/LineChart';
import { signin, userContext } from "../context/CreateContext";
import { useNavigate } from "react-router-dom";

const ProfilePage = ({ logout }) => {
  const navigate = useNavigate();
  const user = useContext(userContext);
  const StreakArr = ["fire1.png", "fire2.png", "fire3.png", "fire4.png", "fire5.png", "fire6.png"];

  return (
    <div className="flex flex-col lg:flex-row gap-6 min-h-screen p-1">
      {/* Left Section - Report Graphs and Monthly Streak */}
      <div className="lg:w-3/4 w-full p-1 lg:p-4 order-2 lg:order-1 ">
        {/* Report Graphs */}
        <div  >
          <h2 className="text-lg font-bold ">Report Graphs</h2>
          <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 ">
            {/* Science Card */}
            <div className="bg-green-100 rounded-lg p-4 lg:w-1/3 shadow-md">
              <h3 className="font-semibold">Science</h3>
              <div className="h-44 bg-white p-2 rounded-md mt-2 flex items-center justify-center">
                <LineChart
                  className='font-bold'
                  xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }]}
                  series={[
                    {
                      data: [2, 3, 5.5, 8.5, 1.5, 5, 1, 4, 3, 8],
                      showMark: ({ index }) => index % 2 === 0,
                    },
                  ]}
                  width={300}
                  height={200}
                />
              </div>
              <div className="flex justify-between mt-2 font-semibold">
                <p>Highest: <span className="text-2xl font-normal">19</span>/20</p>
                <p>Current: <span className="text-2xl font-normal">18</span>/20</p>
              </div>
            </div>

            {/* Alphabets Card */}
            <div className="bg-purple-100 rounded-lg p-4 lg:w-1/3 shadow-md">
              <h3 className="font-semibold">Alphabets</h3>
              <div className="h-44 bg-white p-2 rounded-md mt-2 flex items-center justify-center">
                <LineChart
                  className='font-bold'
                  xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }]}
                  series={[
                    {
                      data: [2, 3, 5.5, 8.5, 1.5, 5, 1, 4, 3, 8],
                      showMark: ({ index }) => index % 2 === 0,
                    },
                  ]}
                  width={300}
                  height={200}
                />
              </div>
              <div className="flex justify-between mt-2 font-semibold">
                <p>Highest: <span className="text-2xl font-normal">19</span>/20</p>
                <p>Current: <span className="text-2xl font-normal">18</span>/20</p>
              </div>
            </div>

            {/* Maths Card */}
            <div className="bg-red-100 rounded-lg p-4 lg:w-1/3 shadow-md">
              <h3 className="font-semibold">Maths</h3>
              <div className="h-44 bg-white p-2 rounded-md mt-2 flex items-center justify-center">
                <LineChart
                  className='font-bold'
                  xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] }]}
                  series={[
                    { data: [17, 18, 19, 20, 10, 11, 14, 15, 19, 20, 18] },
                  ]}
                  width={300}
                  height={200}
                />
              </div>
              <div className="flex justify-between mt-2 font-semibold">
                <p>Highest: <span className="text-2xl font-normal">19</span>/20</p>
                <p>Current: <span className="text-2xl font-normal">18</span>/20</p>
              </div>
            </div>
          </div>
        </div>

        {/* Monthly Streak */}
        <div className="mt-2">
          <h2 className="text-lg font-bold mb-4 lg:text-start text-center">Monthly Streak - August</h2>
          <div className="grid grid-cols-7 p-1 lg:gap-1 gap-3">
            {Array.from({ length: 31 }).map((_, index) => (
              index % 5 !== 0 ? (
                <div key={index} className="w-8 h-8 lg:w-10 lg:h-10 rounded-full border-2 border-black flex items-center justify-center font-bold">
                  {index + 1}
                </div>
              ) : (
                <div key={index} className="relative w-8 h-8 lg:w-12 lg:h-12">
                  <img
                    src={`/ImagesNV/Profile/${StreakArr[(index / 5) % 6]}`}
                    alt="Fire"
                    className="w-full h-full"
                  />
                  <div className="absolute inset-0 flex mt-2 lg:mt-6 ml-2 lg:ml-4 text-white font-bold" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 1)" }}>
                    {index + 1}
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      </div>

      {/* Right Section - Profile Card */}
      <div className="lg:w-1/4 w-full bg-blue-400 text-white font-bold p-4 lg:p-8 order-1 lg:order-2">
        {/* Profile Picture */}
        <div className="flex flex-col items-center">
          <img
            src="/ImagesNV/children home.png"
            alt="Profile"
            className="rounded-full bg-white w-16 h-16 lg:w-24 lg:h-24 mb-4"
          />
          <h3 className="text-lg lg:text-xl font-semibold">{user.name}</h3>
        </div>
        <hr className="my-5" />
        {/* Profile Information */}
        <div className="mt-8 text-left flex flex-col gap-4 lg:gap-8">
          <p className="text-wrap break-words"><span className="font-semibold">Email: </span>{user.email}</p>
          <p><span className="font-semibold">School Name: </span> The school of science</p>
          <p><span className="font-semibold">Parents: </span>{user.gurdianEmail}</p>
        </div>

        {/* Buttons */}
        <div className="mt-8 lg:mt-16">
          <button
            className="text-red-600 bg-white py-2 px-4 rounded-md w-full mb-4"
            onClick={() => {
              logout();
              navigate('/');
              window.location.reload();
            }}
          >Log Out</button>
          <button className="text-blue-600 bg-white py-2 px-4 rounded-md w-full">Edit Profile</button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
