import React from "react";
import { NavLink } from "react-router-dom";

export default function SectionsDiv() {
  return (
    <div className="p-6 w-full mt-4">
      <h1 className="text-center text-xl font-semibold">
        Sections Introduction
      </h1>
      <div className="md:flex  gap-7 ">
        <div className="basis-1/3 rounded flex-col m-5  shadow-lg bg-white shadow-slate-300 md:p-7 p-4">
          <h1 className="text-center flex gap-1">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
              />
            </svg>{" "}
            Learning
          </h1>
          <div className="flex justify-center">
            <img src="/ImagesNV/learning2.webp" className="h-36"></img>
          </div>
          <h2 className="md:p-3 text-center font-semibold">
          In Learning, practice the Gujarati alphabet with signs, plus basics of math and science, all in a fun
          </h2>
          <div className="text-center">

            <button className=" font-serif text-center p-1 px-2 text-xl border border-black hover:bg-blue-600 hover:text-white rounded ">
               <a href="/learning">
                   Start Learning
              </a>
             </button>
            </div>
        </div>
        <div className="basis-1/3 rounded flex-col m-5 shadow-lg bg-white  shadow-slate-300 p-4 md:p-7">
          <h1 className="text-center flex gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              />
            </svg>
            Practice
          </h1>
          <div className="flex justify-center">
            <img src="/ImagesNV/practice2.webp" className="h-44"></img>
          </div>
          <h2 className="font-semibold text-center md:pb-4">
          Practice here, track your progress, and take teacher-created tests on our platform.
          </h2>
          <div className="text-center">

           <button className=" font-serif text-center p-1 px-2 text-xl border border-black hover:bg-blue-600 hover:text-white rounded ">
             <a href="/practice">
                   Let's Test 
              </a>
            </button>
           </div>
        </div>
        <div className="basis-1/3 rounded m-5 flex-col shadow-lg bg-white shadow-slate-300 md:p-7 p-4">
          <h1 className="text-center font-mono flex gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
              />
            </svg>
            Conversion
          </h1>
          <div className="flex justify-center md:mt-2">
            <img src="/ImagesNV/conversion2.jpg" className="h-36"></img>
          </div>
          <h2 className="text-center font-semibold md:p-4">
          Use this section to convert sign to text and text to sign with your camera.
          </h2>
          <div className="text-center">

         <button className=" font-serif text-center p-1 px-2 text-xl border border-black hover:bg-blue-600 hover:text-white rounded ">
             <a href="/conversion">
               conversion
             </a>
         </button>
          </div>
        </div>
      </div>
    </div>
  );
}
