import React, {useState} from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import MainLogin from "./MainLogin";
function MainSignUp() {

  const [login,setLogin] = useState(false)

  const handleClick = ()=>{
    setLogin(true)
  }
  return (
   
    <div className="w-10/12 mx-auto mt-5 md:w-4/12" >
      {/* {login && <MainLogin />} */}
      {login ? <MainLogin /> :
      <div className="flex flex-col justify-center px-16 py-5 shadow-md">
        <h1 className="font-bold text-3xl text-center border-b-2 mb-10 pb-2">sign in</h1>
        <form action="" className="flex flex-col space-y-10">
          <div className="flex justify-around space-x-2">
            <label className="mt-1 font-bold" htmlFor="">UserName: </label>
            <input
              type="text"
              placeholder="userName... "
              className="border-b-2 border-black focus:outline-none focus:border-blue-500 p-1"
            />
          </div>
          <div className="flex justify-around space-x-2">
            <label className="mt-1 font-bold" htmlFor="">Password: </label>
            <input
              type="password"
              placeholder="Password... "
              className="border-b-2 border-black focus:outline-none focus:border-blue-500 p-1"
            />
          </div>
          {/* <div className="flex justify-around space-x-2">
            <label className="mt-1 font-bold" htmlFor="">email: </label>
            <input
              type="email"
              placeholder="email... "
              className=" border-b-2 border-black focus:outline-none focus:border-blue-500 p-1"
            />
          </div> */}
          <div className="text-center">
            <button className="bg-green-500 px-8 py-1 text-white rounded-md hover:bg-green-400" type="submit">Submit</button>
          </div>
        </form>
        <div className="relative my-10">
          <p className=" absolute top-[-14px] left-[131px] md:left-[160px] border border-black px-2 bg-white rounded-full">or</p>
          <hr />
        </div>
        <div className="my-10 flex justify-around"> 
          <span className="border-2 border-black p-2 rounded-full cursor-pointer hover:border-blue-500"><FaInstagram /></span>
          <span className="border-2 border-black p-2 rounded-full cursor-pointer hover:border-blue-500"><FaFacebookF /> </span>
         <span className="border-2 border-black p-2 rounded-full cursor-pointer hover:border-blue-500"> <FaGoogle /> </span>
        </div>
        <div className="text-center">
          <button onClick={handleClick} className="bg-red-500 px-8 py-1 text-white rounded-md hover:bg-red-400" type="submit">Log in</button>
        </div>
      </div>
}
    </div>
  );
}

export default MainSignUp;
