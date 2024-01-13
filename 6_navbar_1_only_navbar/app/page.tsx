'use client'
import Image from 'next/image'
import Navbar from './components/Navbar'
import Link from 'next/link';
import { TfiClose } from "react-icons/tfi";
import Button from './components/Button';
import { useState } from 'react';

import { TfiMenuAlt } from "react-icons/tfi";

export default function Home() {
  const NavbarConstant = [
    {
      title: "home", link: "/"
    },
    { title: "About", link: "/" }
    
  ]
  const [isOpen , setIsOpen] = useState(true)
  return (
    <main>
      <div>
        <div className="shadow-md w-full fixed top-0 left-0">
          <div className="md:flex bg-white py-4">
            <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins]    text-gray-800">
              <span className="mr-1 pt-2">logo</span>

              <div>
                <div onClick={()=>{setIsOpen(!isOpen)}} className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
                  {isOpen ? <TfiClose /> :<TfiMenuAlt /> }

                  {/* <Link href="/">
                    <TfiMenuAlt />
                  </Link>

                  <TfiClose />
                  //crossmult */}
                </div>
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static 
                md:z-auto z-[-1] left-0 w-48 md:w-auto md:pl-0 pl-9 transition-all
                duration-500 ease-in ${isOpen ? 'top-20 opacity-100' : 'top-[-490px]'} md:opacity-100 opacity-0`}>
                  {NavbarConstant.map((nav) => {
                    return (
                      <li
                        key={nav.title}
                        className="md:ml-8 text-xl md:my-0 my-7"
                      >
                        <Link
                          href={nav.link}
                          className="text-gray-800 hover:text-yellow-400 duration-1000"
                        >
                          {" "}
                          {nav.title}
                        </Link>
                      </li>
                    );
                  })}

                  <button>
                    <Button ABC="Get Started" />
                  </button>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
