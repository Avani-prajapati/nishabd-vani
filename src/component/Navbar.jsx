import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { BookOpenIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { signin, userContext } from '../context/CreateContext';

const Header = () => {
  const [open, setOpen] = useState(false);
  const user = useContext(userContext);

  const Links = [
    { name: "Home", link: "/", key: 1 },
    { name: "Learning", link: "/learning", key: 2 },
    { name: "Conversion", link: "/conversion", key: 3 },
    { name: user.name ? "Practice" : "Sign Up", link: user.name ? "/practice" : "/signup", key: 4 },
  ];

  return (
    <div className="shadow-md border-b border-b-slate-200 w-full top-0 left-0">
      <div className="md:flex items-center justify-between md:px-10">
        
        {/* Logo Section */}
        <div className="font-bold text-2xl flex items-center gap-1 pt-3 pb-2 px-3">
          <img src="/ImagesNV/Navbar/NishabdVani.png" alt="Logo" className="sm:h-14 h-8 xs:h-10 " />
        </div>

        {/* Menu Icon */}
        <div onClick={() => setOpen(!open)} className="absolute sm:right-8 right-4 sm:top-5 top-2 cursor-pointer md:hidden w-7 h-7">
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>

        {/* Links Section */}
        <ul className={`md:flex md:items-center md:pb-0 my-2 py-1  md:static bg-white md:bg-transparent  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0  transition-all duration-500 ease-in ${open ? 'top-12 ' : 'top-[-490px] absolute'} sm:text-xl text-center `}>
          {Links.map(link => (
            <li key={link.key} className="md:ml-8 my-7 md:my-0 font-semibold">
              <NavLink to={link.link} className="nav-link">{link.name}</NavLink>
            </li>
          ))}
          <li className="md:ml-8 my-7 md:my-0 font-semibold">
            {user.name ? (
              <NavLink to="/profile" className="nav-link">
                <div className="flex flex-col items-center">
                  <img src="/ImagesNV/Navbar/profile.jpg" alt="Profile" className="h-10" />
                  <h3>{user.username}</h3>
                </div>
              </NavLink>
            ) : (
              <NavLink to="/signin">Sign In</NavLink>
            )}
          </li>
        </ul>
        
      </div>
    </div>
  );
};

export default Header;
