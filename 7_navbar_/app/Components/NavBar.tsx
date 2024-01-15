import React from 'react'
import { TfiMenu, TfiClose } from "react-icons/tfi";



const NavBar = () => {
  return (
    <div className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="text-3xl font-bold mr-4 sm:text-4xl">
          <h1>BRAND.</h1>
          <ul className="hidden md:flex">
            <li>Home</li>
            <li>About</li>
            <li>Support</li>
            <li>platforms</li>
            <li>Pricing</li>
          </ul>
        </div>
      </div>

      <TfiMenu className="w-5" />
      <TfiClose />
    </div>
  );
}

export default NavBar