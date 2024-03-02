import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Logo1 from '../assets/img/logo.png';

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: 'HOME', path: '/' },
    { id: 2, text: 'UPCOMING CARAIVAL & ACTIVITES', path: '/upcoming_activites' },
    { id: 3, text: 'TEAM & VOLUNTEER', path: '/team' },
    { id: 4, text: 'CONTACT', path: '/contact' },
    // { id: 5, text: '' },
  ];

  return (
    <div className='flex justify-between items-center h-18 max-w-full mx-auto px-4 text-red'>
      {/* Logo */}
      <img className='h-12 w-12' src={Logo1} alt="Logo" />

      {/* Desktop Navigation */}
      <ul className='hidden md:flex'>
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-2 hover:bg-[#ED4A41] shadow-lg  font-bold rounded-xl m-2 cursor-pointer duration-300 hover:text-white'
          >
            <Link to={item.path}>{item.text}</Link>
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[40%] h-full border-r border-r-gray-900 bg-[rgb(255,201,41)] ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        {/* Mobile Logo */}
        <img className='h-12 w-12 mt-2 ml-5' src={Logo1} alt="Logo" />

        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 border-b rounded-xl hover:bg-[#df2d00] duration-300 hover:text-black cursor-pointer border-gray-600'
          >
            <Link to={item.path}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
