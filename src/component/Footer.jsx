import React from 'react';
export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-6">
      <div className="min-w-full mx-auto px-4">
        {/* Combined Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 border-b border-gray-700 pb-6 mb-4">
          {/* Column 1: Project and University Details */}
          <div className="flex flex-col items-start sm:items-center">
            <p className="font-semibold text-white hover:text-gray-300 transform transition duration-300 hover:scale-105 mb-2">SIH 2024 Project</p>
            <p className="text-sm mb-1 text-white hover:text-gray-400 transform transition duration-300 hover:scale-105">By LD College of Engineering Students</p>
            <p className="text-sm text-white hover:text-gray-400 transform transition duration-300 hover:scale-105">Under Gujarat Technological University</p>
          </div>

          {/* Column 2: Follow Us */}
          <div className="flex flex-col items-start sm:items-center">
            <p className="font-semibold mb-2 text-white hover:text-gray-400 self-center sm:self-center">Follow Us</p>
            <div className="flex flex-col items-start">
              <a
                href="https://github.com/Avani-prajapati/nishabd-vani"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center mb-1 space-x-2 hover:text-gray-400 transform text-sm transition duration-300 hover:scale-110"
              >
                <i className="fab fa-github text-sm"></i>
                <span>Star on GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="flex text-sm items-center mb-1 space-x-2 hover:text-blue-700 transform transition duration-300 hover:scale-110"
              >
                <i className="fab fa-linkedin text-sm"></i>
                <span>Thumbs Up on LinkedIn</span>
              </a>
              <a
                href="https://youtu.be/PaUcz_kTON4?si=N27TS2BqEZIUSoVI"
                target="_blank"
                rel="noopener noreferrer"
                className="flex text-sm items-center space-x-2 hover:text-red-500 transform transition duration-300 hover:scale-110"
              >
                <i className="fab fa-youtube text-sm"></i>
                <span>Like on YouTube</span>
              </a>
            </div>
          </div>

          {/* Column 3: Contributors (First Half) */}
          <div className="flex flex-col items-start sm:items-center">
            <p className="font-semibold mb-2 text-white">Contributors</p>
            <ul className="space-y-1">
              <li className="hover:underline text-sm hover:text-gray-300 transform transition duration-300">Shrevee - Web App Designer</li>
              <li className="hover:underline text-sm hover:text-gray-300 transform transition duration-300">Avani - React Web Developer</li>
              <li className="hover:underline text-sm hover:text-gray-300 transform transition duration-300">Pankaj - Flutter App Developer</li>
            </ul>
          </div>

          {/* Column 4: Contributors (Second Half) */}
          <div className="flex flex-col items-start sm:items-center">
            <ul className="space-y-1 mt-6 sm:mt-8">
              <li className="hover:underline text-sm hover:text-gray-300 transform transition duration-300">Nirat - ML Model Developer</li>
              <li className="hover:underline text-sm hover:text-gray-300 transform transition duration-300">Ansh - ML Model Developer</li>
              <li className="hover:underline text-sm hover:text-gray-300 transform transition duration-300">Aman - Backend Node.js Developer</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-4 text-sm">
          <p className="text-white hover:text-gray-400 transform transition duration-300">© 2024 LD College of Engineering. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}