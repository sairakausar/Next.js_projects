import React from 'react'
import {
    CloudUpLoadIcon,
    DatabaseIcon,
    PaperAirplaneIcon,
    ServerIcon
} from '@heroicons/react/solid'
import bgImg from '../assets/cyber-bg.png'

const Hero = () => {
  return (
    <div className="w-ful h-screen bg-zinc-200 flex flex-col justify-between">
      <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
        <div>
          <p>Unique Sequencing & Production</p>
          <h1>Cloud Management</h1>
          <p>This is Our Tech brand. </p>
          <button>Get Started</button>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        Hero Section
      </div>
      <div>
        Hero two
      </div>
      <div>Hero Three</div>
    </div>
  );
}

export default Hero