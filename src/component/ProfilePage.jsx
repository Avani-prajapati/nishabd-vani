import React, { useContext, useEffect, useState } from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { signin, userContext } from "../context/CreateContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from "recharts";
import { FaEllipsisV } from "react-icons/fa"; // Import the three dots icon

const ProfilePage = ({ logout }) => {
  const navigate = useNavigate();
  const user = useContext(userContext);
  const [response, setResponse] = useState({});
  const [quizData, setQuizData] = useState({});
  const [activityArray, setActivityArray] = useState([]);
  const [showDetails, setShowDetails] = useState(false);

  const  data=[
    { name: "Science", value:(quizData.science || []).length, color: "#B3E5B3" }, 
    { name: "Alphabets", value: (quizData.alpha || []).length, color: "#E1BEE7" }, 
    { name: "Maths", value: (quizData.maths || []).length, color: "#FFCDD2" }, 
    { name: "Words", value: (quizData.word || []).length, color: "#BBDEFB" }, 
  ];


  useEffect(() => {
    axios
      .get("http://localhost:5000/students/profile", {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setResponse(res.data);
        setQuizData(res.data.quizData || {});
        setActivityArray(res.data.activityArray || []);
       
      })
      .catch((err) => console.log(err));
  }, []);

  const calculateScores = (data = []) => ({
    highestScore: Math.max(...data, 0), // Get the max score or 0 if no data
    currentScore: data[data.length - 1] || 0, // Get the last score or 0
  });

  return (
    <div className="flex flex-col lg:flex-row gap-6 min-h-screen p-1">
      {/* Left Section - Report Graphs and Monthly Streak */}
      <div className="lg:w-3/4 w-full p-1 lg:p-4 order-2 lg:order-1">
        {/* Monthly Streak */}
        <div className="sm:mt-6 mt-2">
          <h2 className="md:text-lg text-sm font-bold mb-4 lg:text-start text-center">
            Monthly Streak - {response.month || "N/A"}
          </h2>
          <div className="grid grid-cols-7 sm:p-1 lg:gap-1 gap-3">
            {activityArray.map((activity, index) => (
              <div
                key={index}
                className={`sm:w-8 text-sm p-3 sm:text-xl sm:h-8 size-6 lg:w-10 lg:h-10 rounded-full border-2 flex items-center justify-center font-bold ${
                  activity !== 0
                    ? "bg-green-400 text-white"
                    : "border-grey-500"
                }`}
              >
                {index + 1}
              </div>
            ))}
          </div>
        </div>

        {/* Report Graphs */}
        <div className="mt-8">
          <h2 className="sm:text-lg text-sm font-bold">Report Graphs</h2>
          <div className="grid grid-cols-1 mt-5 lg:grid-cols-2 gap-4">
            {/* Science Card */}
            <div className="bg-green-100 rounded-lg p-4 shadow-md">
              <h3 className="font-semibold text-sm md:text-lg">Science</h3>
              <div className="h-56 bg-white p-2 rounded-md mt-2 flex items-center justify-center">
                <LineChart
                  xAxis={[
                    {
                      data: Array.from(
                        { length: (quizData.science || []).length },
                        (_, i) => i + 1
                      ),
                    },
                  ]}
                  series={[
                    {
                      data: quizData.science || [],
                    },
                  ]}
                  width={400}
                  height={200}
                />
              </div>
              <div className="flex justify-between mt-2 font-semibold">
                <p>
                  Highest:{" "}
                  <span className="md:text-2xl font-normal">
                    {calculateScores(quizData.science).highestScore}
                  </span>
                  /10
                </p>
                <p>
                  Current:{" "}
                  <span className="md:text-2xl font-normal">
                    {calculateScores(quizData.science).currentScore}
                  </span>
                  /10
                </p>
              </div>
            </div>

            {/* Alphabets Card */}
            <div className="bg-purple-100  rounded-lg p-4 shadow-md">
              <h3 className="font-semibold text-sm md:text-lg">Alphabets</h3>
              <div className="h-56 bg-white p-2 rounded-md mt-2 flex items-center justify-center">
                <LineChart
                  xAxis={[
                    {
                      data: Array.from(
                        { length: (quizData.alpha || []).length },
                        (_, i) => i + 1
                      ),
                    },
                  ]}
                  series={[
                    {
                      data: quizData.alpha || [],
                    },
                  ]}
                  width={400}
                  height={200}
                />
              </div>
              <div className="flex justify-between mt-2 font-semibold">
                <p>
                  Highest:{" "}
                  <span className="md:text-2xl font-normal">
                    {calculateScores(quizData.alpha).highestScore}
                  </span>
                  /10
                </p>
                <p>
                  Current:{" "}
                  <span className="md:text-2xl font-normal">
                    {calculateScores(quizData.alpha).currentScore}
                  </span>
                  /10
                </p>
              </div>
            </div>

            {/* Maths Card */}
            <div className="bg-red-100 rounded-lg p-4 shadow-md">
              <h3 className="font-semibold text-sm md:text-lg">Maths</h3>
              <div className="h-56 bg-white p-2 rounded-md mt-2 flex items-center justify-center">
                <LineChart
                  xAxis={[
                    {
                      data: Array.from(
                        { length: (quizData.maths || []).length },
                        (_, i) => i + 1
                      ),
                    },
                  ]}
                  series={[
                    {
                      data: quizData.maths || [],
                    },
                  ]}
                  width={400}
                  height={200}
                />
              </div>
              <div className="flex justify-between mt-2 font-semibold">
                <p>
                  Highest:{" "}
                  <span className="md:text-2xl font-normal">
                    {calculateScores(quizData.maths).highestScore}
                  </span>
                  /10
                </p>
                <p>
                  Current:{" "}
                  <span className="md:text-2xl font-normal">
                    {calculateScores(quizData.maths).currentScore}
                  </span>
                  /10
                </p>
              </div>
            </div>

            {/* Words Card */}
            <div className="bg-blue-100 rounded-lg p-4 shadow-md">
              <h3 className="font-semibold text-sm md:text-lg">Words</h3>
              <div className="h-56 bg-white p-2 rounded-md mt-2 flex items-center justify-center">
                <LineChart
                  xAxis={[
                    {
                      data: Array.from(
                        { length: (quizData.word || []).length },
                        (_, i) => i + 1
                      ),
                    },
                  ]}
                  series={[
                    {
                      data: quizData.word || [],
                    },
                  ]}
                  width={400}
                  height={200}
                />
              </div>
              <div className="flex justify-between mt-2 font-semibold">
                <p>
                  Highest:{" "}
                  <span className="md:text-2xl font-normal">
                    {calculateScores(quizData.word).highestScore}
                  </span>
                  /10
                </p>
                <p>
                  Current:{" "}
                  <span className="md:text-2xl font-normal">
                    {calculateScores(quizData.word).currentScore}
                  </span>
                  /10
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section - Profile Card */}
      <div className="lg:w-1/4 w-full bg-blue-400 text-white font-bold p-4 lg:p-8 order-1 lg:order-2">
      <div className="flex flex-row justify-around items-center lg:flex-col ">
            <img
              src="/ImagesNV/children home.png"
              alt="Profile"
              className="rounded-full bg-white w-14 h-14 lg:w-24 lg:h-24 mb-4"
            />
            <h3 className="text-sm lg:text-xl font-semibold">{user.name || "user"}</h3>
            <div className="lg:hidden text-center">
             <button
              className="text-white text-xl"
              onClick={() => setShowDetails(!showDetails)}
              >
             <FaEllipsisV />
              </button>
             </div>
          </div>
    
      

        {/* Profile Picture and Info */}
        <div className={`lg:block ${showDetails ? "block" : "hidden"}`}>
      
          <hr className="my-5" />
          <div className="mt-8 text-left flex flex-col gap-4 lg:gap-8">
            <p className="text-wrap md:text-start text-center  break-words">
              <span className=" md:text-lg">Email: </span>
              {user.email || "N/A"}
            </p>
            <p className="text-center md:text-start break-words text-wrap ">
              <span className="md:text-lg">Parents: </span>{user.gurdianEmail || "N/A"}
            </p>
          </div>
          
          <div className="mt-20 md:block hidden pie-chart-container">
  <h3 className="font-semibold md:text-xl text-center mb-4">Quiz Count</h3>
  {data.reduce((sum, entry) => sum + entry.value, 0) === 0 ? (
    <div className="flex items-center justify-center h-300">
      <p className="text-lg font-medium">You have not covered any quiz</p>
    </div>
  ) : (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={90}
          innerRadius={60}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
          {/* Centered Label */}
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            className="text-xl font-semibold"
          >
            {data.reduce((sum, entry) => sum + entry.value, 0)}
          </text>
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  )}
</div>


<div className="mt-20 block md:hidden pie-chart-container">
  <h3 className="font-semibold md:text-xl text-center mb-4">Quiz Count</h3>
  {data.reduce((sum, entry) => sum + entry.value, 0) === 0 ? (
    <div className="flex items-center justify-center h-300">
      <p className="text-lg font-medium">You have not covered any quiz</p>
    </div>
  ) : (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={70}
          innerRadius={50}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
          {/* Centered Label */}
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            className="text-xl font-semibold"
          >
            {data.reduce((sum, entry) => sum + entry.value, 0)}
          </text>
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  )}
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
        </div>

        </div>
        
      </div>
    </div>
  );
};

export default ProfilePage;
