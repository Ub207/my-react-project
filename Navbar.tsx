import React from 'react';
import { FaCartArrowDown } from "react-icons/fa";
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='flex justify-around items-center font-sans font-bold flex-wrap my-5 py-5'>
      {/* Logo Section */}
      <div className='flex items-center gap-x-3 text-2xl py-5'>
        <Link href={"#"}>
          <FaCartArrowDown className="text-4xl text-gray-500" />
        </Link>
        <h1>Dream Mart</h1>
      </div>

      {/* Navigation Links */}
      <ul className='flex gap-x-6 text-lg'>
        <li><Link href={"#"}>Home</Link></li>
        <li><Link href={"#"}>About</Link></li>
        <li><Link href={"#"}>Contact</Link></li>
        <li><Link href={"#"}>Services</Link></li>
      </ul>

      {/* Button Section */}
      <div>
        <button className='flex justify-center items-center gap-x-3 bg-slate-400 text-white px-4 py-2 rounded-md hover:bg-slate-500'>
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Navbar;
