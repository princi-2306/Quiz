import React from 'react'
import Navbar from '../components/Navbar'
import { DotLottieReact } from "@lottiefiles/dotlottie-react";


const Home = () => {
  return (
    <div className="w-full overflow-hidden">
      <Navbar />
      <div className="flex w-full flex-col lg:flex-row h-screen lg:justify-between lg:items-center">
        <div className="px-4 pt-8">
          <span className="lg:text-9xl font-bold text-5xl">Create</span> <br />
          <span className="lg:text-5xl font-bold">
            your own personlized Quiz<br />
            
                  </span>
                  <div className='text-2xl'>memorize faster with quize</div>
        </div>
        <div className="w-1/2">
          <DotLottieReact
            src="https://lottie.host/1772c447-53a2-4477-a96f-438654bb7ac0/llYlbR28Gc.lottie"
            loop
                      autoplay
                      className='h-150 w-110 '
          />
        </div>
      </div>
    </div>
  );
}

export default Home
