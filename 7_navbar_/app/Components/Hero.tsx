import React from 'react'
import {
    CloudUpLoadIcon,
    DatabaseIcon,
    PaperAirplaneIcon,
    ServerIcon
} from '@heroicons/react/solid'
import bgImg from '../assets/cyber-bg.png'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className="w-ful h-screen bg-zinc-200 flex flex-col justify-between">
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
          <p className="text-2xl">Unique Sequencing & Production</p>
          <h1 className="py-3 text-5xl md:text-6xl font-bold">
            Cloud Management
          </h1>
          <p className="text-2xl">This is Our Tech brand. </p>
          <button className="py-3 px-6 sm:w-[60%] my-4 w-52 hover:text-5xl hover:font-bold hover:w-96 hover:bg-zinc-400">
            Get Started
          </button>
        </div>
        <div>
          <Image className="w-full" src={bgImg} alt="image" />
          {/* // this is extention // for boxes // pesticide for Chrome// */}
        </div>
        <div>
          <p>
            <div>Data Service</div>
            <div>
              <p>Icon. App Security </p>
              <p>Icon. Dashboard Design </p>
              <p>Icon. Cloud Data </p>
              <p>Icon. API </p>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero