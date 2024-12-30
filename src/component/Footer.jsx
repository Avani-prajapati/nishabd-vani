import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-6">
      <div className="max-w-6xl mx-auto px-4">
        {/* First Section: Project and University Details */}
        <div className="flex justify-between border-b border-gray-700 pb-4 mb-4">
          <div className="text-lg">
            <p className="font-semibold text-white hover:text-gray-300 transform transition duration-300 hover:scale-105">SIH 2024 Project</p>
            <p className="text-sm text-white hover:text-gray-400 transform transition duration-300 hover:scale-105">By LD College of Engineering Students</p>
            <p className="text-sm text-white hover:text-gray-400 transform transition duration-300 hover:scale-105">Under Gujarat Technological University</p>
          </div>
          <div className="text-sm text-right">
            <p className="font-semibold text-white hover:text-gray-400">Follow Us</p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Avani-prajapati/nishabd-vani"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-blue-500 transform transition duration-300 hover:scale-110"
              >
                <i className="fab fa-github text-xl"></i>
                <span>Star on GitHub</span>
              </a>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-blue-700 transform transition duration-300 hover:scale-110"
              >
                <i className="fab fa-linkedin text-xl"></i>
                <span>Thumbs Up on LinkedIn</span>
              </a>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://youtu.be/PaUcz_kTON4?si=N27TS2BqEZIUSoVI"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-red-500 transform transition duration-300 hover:scale-110"
              >
                <i className="fab fa-youtube text-xl"></i>
                <span>Like on YouTube</span>
              </a>
            </div>
          </div>
        </div>

        {/* Second Section: Contributors */}
        <div className="text-lg mb-4">
          <p className="font-semibold mb-2 text-white">Contributors:</p>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <ul className="space-y-1">
                <li className="hover:underline hover:text-gray-300 transform transition duration-300">Shreve - Web App Designer</li>
                <li className="hover:underline hover:text-gray-300 transform transition duration-300">Avani - React Web Developer</li>
                <li className="hover:underline hover:text-gray-300 transform transition duration-300">Pankaj - Flutter App Developer</li>
              </ul>
            </div>
            <div>
              <ul className="space-y-1">
                <li className="hover:underline hover:text-gray-300 transform transition duration-300">Nirat - ML Model Developer</li>
                <li className="hover:underline hover:text-gray-300 transform transition duration-300">Ansh - ML Model Developer</li>
                <li className="hover:underline hover:text-gray-300 transform transition duration-300">Aman - Backend Node.js Developer</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-4 text-sm">
          <p className="text-white hover:text-gray-400 transform transition duration-300">&copy; 2024 LD College of Engineering. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
