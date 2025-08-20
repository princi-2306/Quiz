import React,{useState} from 'react'
import { LuEyeClosed } from "react-icons/lu";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Link } from 'react-router-dom';

const Login = () => {
  const [password, setPassword] = useState(false);
  const toggleView = () => {
    setPassword(prev => !prev)
  }
  return (
    <div className="bg-[#2c1e4a] w-full h-screen p-10">
      <div className="text-[#cb6ce6] text-2xl font-bold">Quizzy</div>
      <div className="flex justify-center items-center">
        <div className="w-130 bg-[#342557] rounded-2xl flex flex-col p-10 gap-4">
          <div className="flex justify-between items-center ">
            <div className="heading">Sign up</div>
            <div className="underline">
              <Link to="/login">Already a user?</Link>
            </div>
          </div>
          <form action="" className="flex flex-col gap-4">
            <div className="px-4">
              <label htmlFor="" className="px-2">
                Username
              </label>
              <div className="bg-[#2c1e4a] w-full p-2 rounded-3xl">
                <input
                  name="username"
                  type="text"
                  className="w-full outline-none px-3"
                />
              </div>
            </div>
            <div className="px-4">
              <label htmlFor="" className="px-2">
                Email
              </label>
              <div className="bg-[#2c1e4a] w-full p-2 rounded-3xl">
                <input
                  name="email"
                  type="text"
                  className="w-full outline-none px-3"
                />
              </div>
            </div>
            <div className="px-4">
              <div className="flex justify-between items-center">
                <label htmlFor="" className="px-2">
                  Password
                </label>
                <div onClick={toggleView} className="px-4">
                  {password ? <MdOutlineRemoveRedEye /> : <LuEyeClosed />}
                </div>
              </div>
              <div className="bg-[#2c1e4a] w-full p-2 rounded-3xl">
                <input
                  name="password"
                  type={password ? "text" : "password"}
                  className="w-full outline-none px-3"
                />
              </div>
            </div>
            <div className="px-4">
              <div className="flex justify-between items-center">
                <label htmlFor="" className="px-2">
                  Confirm Password
                </label>
                <div onClick={toggleView} className="px-4">
                  {password ? <MdOutlineRemoveRedEye /> : <LuEyeClosed />}
                </div>
              </div>
              <div className="bg-[#2c1e4a] w-full p-2 rounded-3xl">
                <input
                  name="password"
                  type={password ? "text" : "password"}
                  className="w-full outline-none px-3"
                />
              </div>
            </div>
            <div className="px-4">
              <label htmlFor="" className="px-2">
                Upload Avatar
              </label>
              <div className="bg-[#2c1e4a] w-full p-2 rounded-3xl">
                <input type="file" className="w-full outline-none px-3" />
              </div>
            </div>
            <div className="flex justify-center">
              <button
                className="bg-[#2c1e4a] w-1/2 h-9 rounded-3xl font-semibold cursor-pointer"
                type="submit"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login
