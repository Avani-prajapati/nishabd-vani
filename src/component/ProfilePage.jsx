import React, { useContext } from "react";
import { LineChart } from '@mui/x-charts/LineChart';
import { signin, userContext } from "../context/CreateContext";
import { useNavigate } from "react-router-dom";

const ProfilePage = ({logout}) => {
const navigate = useNavigate();
const user = useContext(userContext);

  const StreakArr = ["fire1.png","fire2.png","fire3.png","fire4.png","fire5.png","fire6.png"];
  return (
    <div className="flex gap-6 h-screen ">
      {/* Left Section - Report Graphs and Monthly Streak */}
      <div className="w-3/4 p-8">
        {/* Report Graphs */}
        <div>
          <h2 className="text-lg font-bold mb-4">Report Graphs</h2>
          <div className="flex space-x-4">
            {/* Science Card */}
            <div className="bg-green-100 rounded-lg p-4 w-1/3 shadow-md">
              <h3 className="font-semibold">Science</h3>
              <div className="h-44 bg-white p-2 rounded-md mt-2 flex items-center justify-center">
                {/* Placeholder for Graph */}
               
                <LineChart
                className='font-bold'
                xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }]}
               series={[
                  {
                data: [2, 3, 5.5, 8.5, 1.5, 5, 1, 4, 3, 8],
               showMark: ({ index }) => index % 2 === 0,
                  },
                 ]}
                width={500}
                 height={300}
              />
              </div >
              <div className="flex justify-between mt-2 font-semibold">
              <p className="mt-2">Highest:<span className="text-2xl font-normal">19</span>/20</p>
              <p className="mt-2">Current: <span className="text-2xl font-normal">18</span>/20</p>
              </div>
            </div>

            {/* Alphabets Card */}
            <div className="bg-purple-100 rounded-lg p-4 w-1/3 shadow-md">
              <h3 className="font-semibold">Alphabets</h3>
              <div className="h-44 bg-white p-2 rounded-md mt-2 flex items-center justify-center">
                {/* Placeholder for Graph */}
                <LineChart
                className='font-bold'
                xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }]}
               series={[
                  {
                data: [2, 3, 5.5, 8.5, 1.5, 5, 1, 4, 3, 8],
               showMark: ({ index }) => index % 2 === 0,
                  },
                 ]}
                width={500}
                 height={300}
              />
              </div>
              <div className="flex justify-between mt-2 font-semibold">
              <p className="mt-2">Highest:<span className="text-2xl font-normal">19</span>/20</p>
              <p className="mt-2">Current: <span className="text-2xl font-normal">18</span>/20</p>
              </div>
            </div>

            {/* Maths Card */}
            <div className="bg-red-100 rounded-lg p-4 w-1/3 h-72 shadow-md ">
              <h3 className="font-semibold">Maths</h3>
              <div className="h-44 bg-white p-2 rounded-md mt-2 flex items-center justify-center">
                {/* Placeholder for Graph */}
                <LineChart
                className='font-bold w-40'
                xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11] }]}
               series={[
                  {
                 data: [17,18,19,20,10,11,14,15,19,20,18],
        
                  },
                 ]}
                 width={500}
                 height={300}
              />
              </div>
              <div className="flex justify-between mt-2 font-semibold">
              <p className="mt-2">Highest:<span className="text-2xl font-normal">19</span>/20</p>
              <p className="mt-2">Current: <span className="text-2xl font-normal">18</span>/20</p>
              </div>
            </div>
          </div>
        </div>

        {/* Monthly Streak */}
        <div className="mt-8">
          <h2 className="text-lg font-bold mb-4">Monthly Streak - August</h2>
          <div className="grid grid-cols-7 gap-1">
            {Array.from({ length: 31 }).map((_, index) => (
               index%5 !== 0?(<div
               key={index}
               className="w-10 h-10 rounded-full border-2 border-black  flex items-center justify-center font-bold"
               >
                {index+1}
               </div>):
         
            (
              <div 
              key={index} 
              className="relative w-12 h-[3.3rem]" // Ensure this div has the same width/height as the image
            >
              <img 
                src={`/ImagesNV/Profile/${StreakArr[(index / 5)%6]}`} 
                alt="Fire" 
                className="w-full h-full" // Image takes up full space of the parent container
              />
              <div 
                className="absolute inset-0 flex mt-6 ms-4 text-white font- font-bold"
                style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 1)" }}
              >
                {index + 1} {/* Index number */}
              </div>
            </div>
          )
            ))}
          </div>
        </div>
      </div>

      {/* Right Section - Profile Card */}
      <div className="w-1/4 bg-blue-400 text-white font-bold p-8">
        {/* Profile Picture */}
        <div className="flex flex-col items-center">
          <img
            src="/ImagesNV/children home.png"
            alt="Profile"
            className="rounded-full bg-white w-24 h-24 mb-4"
          />
          <h3 className="text-xl font-semibold">{user.name}</h3>
        </div>
         <hr className="my-5"></hr>
        {/* Profile Information */}
        <div className="mt-8 text-left flex flex-col gap-8">
          <p className="text-wrap break-words"><span className="font-semibold">Email:</span>{user.email}</p>
          <p><span className="font-semibold">Phone Number:</span> {user.mobile}</p>
          <p><span className="font-semibold">School Name:</span> The school of science</p>
          <p><span className="font-semibold">Parents :</span>{user.guardianEmail} </p>
        </div>

        {/* Buttons */}
        <div className="mt-8">
          <button className=" text-red-600 bg-white py-2 px-4 rounded-md w-full mb-4"  onClick={()=>{logout()
            navigate('/');
            window.location.reload() ;
          }}>Log Out</button>
          <button className=" text-blue-600 bg-white py-2 px-4 rounded-md w-full">Edit Profile</button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
// import React, { useContext } from "react";
// import { LineChart } from '@mui/x-charts/LineChart';
// import { signin, userContext } from "../context/CreateContext";
// import { useNavigate } from "react-router-dom";

// const ProfilePage = ({ logout }) => {
//   const navigate = useNavigate();
//   const user = useContext(userContext);
//   const streakImages = ["fire1.png", "fire2.png", "fire3.png", "fire4.png", "fire5.png", "fire6.png"];

//   const handleLogout = () => {
//     logout();
//     navigate('/');
//     window.location.reload();
//   };

//   const renderStreaks = () => {
//     return Array.from({ length: 31 }).map((_, index) =>
//       index % 5 === 0 ? (
//         <div key={index} className="relative w-12 h-12">
//           <img
//             src={`/ImagesNV/Profile/${streakImages[(index / 5) % streakImages.length]}`}
//             alt="Fire"
//             className="w-full h-full"
//           />
//           <span className="absolute inset-0 mt-6 ms-4 text-white font-bold">{index + 1}</span>
//         </div>
//       ) : (
//         <div key={index} className="w-10 h-10 rounded-full border-2 flex items-center justify-center font-bold">
//           {index + 1}
//         </div>
//       )
//     );
//   };

//   const renderChart = (title, data, color) => (
//     <div className={`rounded-lg p-4 w-1/3 shadow-md bg-${color}-100`}>
//       <h3 className="font-semibold">{title}</h3>
//       <div className="h-44 bg-white p-2 rounded-md flex items-center justify-center">
//         <LineChart
//           className="font-bold"
//           xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }]}
//           series={[{ data, showMark: ({ index }) => index % 2 === 0 }]}
//           width={500}
//           height={300}
//         />
//       </div>
//       <div className="flex justify-between mt-2 font-semibold">
//         <p>Highest: <span className="text-2xl font-normal">19</span>/20</p>
//         <p>Current: <span className="text-2xl font-normal">18</span>/20</p>
//       </div>
//     </div>
//   );

//   return (
//     <div className="flex gap-6 h-screen">
//       {/* Left Section - Report Graphs and Monthly Streak */}
//       <div className="w-3/4 p-8">
//         <h2 className="text-lg font-bold mb-4">Report Graphs</h2>
//         <div className="flex space-x-4">
//           {renderChart("Science", [2, 3, 5.5, 8.5, 1.5, 5, 1, 4, 3, 8], "green")}
//           {renderChart("Alphabets", [2, 3, 5.5, 8.5, 1.5, 5, 1, 4, 3, 8], "purple")}
//           {renderChart("Maths", [17, 18, 19, 20, 10, 11, 14, 15, 19, 20, 18], "red")}
//         </div>
//         <div className="mt-8">
//           <h2 className="text-lg font-bold mb-4">Monthly Streak - August</h2>
//           <div className="grid grid-cols-7 gap-1">{renderStreaks()}</div>
//         </div>
//       </div>

//       {/* Right Section - Profile Card */}
//       <div className="w-1/4 bg-blue-400 text-white font-bold p-8">
//         <div className="flex flex-col items-center">
//           <img src="/ImagesNV/children home.png" alt="Profile" className="rounded-full w-24 h-24 mb-4 bg-white" />
//           <h3 className="text-xl font-semibold">{user.name}</h3>
//         </div>
//         <hr className="my-5" />
//         <div className="mt-8 text-left flex flex-col gap-8">
//           <p><span className="font-semibold">Email:</span> {user.email}</p>
//           <p><span className="font-semibold">Phone Number:</span> {user.mobile}</p>
//           <p><span className="font-semibold">School Name:</span> The School of Science</p>
//           <p><span className="font-semibold">Parents:</span> {user.guardianEmail}</p>
//         </div>
//         <div className="mt-8">
//           <button onClick={handleLogout} className="w-full py-2 mb-4 bg-white text-red-600 rounded-md">
//             Log Out
//           </button>
//           <button className="w-full py-2 bg-white text-blue-600 rounded-md">Edit Profile</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;
