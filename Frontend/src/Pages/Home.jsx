import React from 'react'
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import img from "../assets/logo.png"
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className="flex flex-col p-10 h-screen justify-center gap-8">
      <div className="flex justify-between">
        <div className="text-[#cb6ce6] text-2xl font-bold">Quizzy</div>
        <div className="text-[#9f86c0] border-1 px-3 py-1 rounded-2xl">
          <Link to="/login">Log In</Link>
        </div>
      </div>
      <div className="flex w-full">
        <div className="w-1/2 text-8xl">
          Stop Wasting Time Manually Creating Quizzes
        </div>
        <div className="w-1/2">
          <DotLottieReact
            src="https://lottie.host/c9a5b264-0216-46aa-a998-a30d60d6eea4/yeTfKXH9eV.lottie"
            loop
            autoplay
          />
        </div>
      </div>

      <div className="bg-[#342557] button py-3 text-xl rounded-4xl w-90 flex px-4 items-center justify-center gap-9">
        <span>
          <img className="w-10 h-10" src={img} alt="" />
        </span>
        <button className="">
          {" "}
          <Link to="/sign-up">Sign up with email</Link>
        </button>
      </div>

      <div className="px-4">start taking your own quiz</div>
    </div>
  );
}

export default Home
