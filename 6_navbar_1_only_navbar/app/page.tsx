import Image from 'next/image'
import Navbar from './components/Navbar'
import Link from 'next/link';
import { TfiClose } from "react-icons/tfi";

import { TfiMenuAlt } from "react-icons/tfi";

export default function Home() {
  const NavbarConstant = [
    {
      title: "home", link: "/"
    },
    { title: "About", link: "/" }
    
  ]
  return (
    <main>
      <div>
        <div className="shadow-md w-full fixed top-0 left-0">
          <div className="md:flex bg-white py-4">
            <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins]    text-gray-800">
              <span className="mr-1 pt-2">



                <Link href="/">
                  {" "}
                  <TfiMenuAlt />{" "}
                </Link>
                
                <TfiClose />
                {/* //crossmult */}


              </span>
              <div>
                <ul className="flex justify-between md:items-center ">
                  {NavbarConstant.map((nav) => {
                    return (
                      <li key={nav.title} className="ml-8 text-xl">
                        <Link href={nav.link} className="text-gray-800 hover:text-yellow-400 duration-1000"> {nav.title}</Link>
                      </li>
                    );
                  })}
                  
                  <button>
                    
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
