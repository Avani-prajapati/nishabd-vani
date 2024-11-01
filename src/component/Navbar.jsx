
import React, { useState,useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { BookOpenIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { userContext,signin } from '../context/CreateContext';

const Header = () => {
 
      let [open, setOpen] =useState(false);
 
  const [user,setUser] = useContext(userContext);
  let Links =[
    {name:"Home",link:"/",key :1},
    {name:"Learning",link:"/learning",key :2},
    {name:"Conversion",link:"/conversion",key :3},
    {name:`${user == null ?'Practice':'Sign Up'}`,link:`${user == null ?'/practice':'/signup'}`,key :4},
  ];

    return (
        <div className='shadow-md border border-b-slate-200 w-full top-0 left-0'>
           <div className='md:flex items-center justify-between md:px-10 '>
            {/* logo section */}
            <div className='font-bold text-2xl cursor-pointer flex items-center gap-1   pt-3 pb-2 px-3'>
                <img src='/ImagesNV/Navbar/NishabdVani.png' className='h-14'></img>
            </div>
            {/* Menu icon */}
            <div onClick={()=>setOpen(!open)} className=' absolute right-8 top-5 cursor-pointer md:hidden w-7 h-7'>
                {
                    open ? <XMarkIcon/> : <Bars3BottomRightIcon />
                }
            </div>
            {/* link items */}
            <ul className={`md:flex md:items-center md:pb-0 my-2 py-1  md:static bg-white md:bg-transparent  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0  transition-all duration-500 ease-in ${open ? 'top-12 ' : 'top-[-490px] absolute'} text-xl text-center  `}>
                {
                    Links.map((link) => (
                    <li className='md:ml-8 md:my-0 my-7 font-semibold' key={link.key}>
                        <NavLink to={link.link} className=" nav-link">{link.name}</NavLink>
                    </li>))
                }
                <li className='md:ml-8 md:my-0 my-7 font-semibold' key="5">
                    {user === null?  <NavLink to="/profile" className=" nav-link">
                        <div className='flex justify-center'>
                            <img src='/ImagesNV/Navbar/profile.jpg' className='h-10 font-bold'></img>
                            </div>
                         </NavLink>:<NavLink to='/signin'>Sign In</NavLink> }

                </li>
            </ul>
            
           </div>
        </div>
    );
};

export default Header;