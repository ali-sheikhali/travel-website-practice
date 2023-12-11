import React from "react";
import Buttons from "./Buttons";
function HeroSection() {
  return (
    <div className="relative">
      <div>
        <img
          className="w-full h-[657px]"
          src={require("../images/img-home.jpg")}
          alt=""
        />
      </div>
      <div className="absolute w-9/12 text-center top-1/2 left-1/2 transform space-y-5 -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-white text-3xl font-bold">ADVENTURE AWAITS</h1>
        <p className="text-white font-bold" >What are you Waiting for?</p>
        <div className="flex md:w-5/12 mx-auto">
        <Buttons className='text-white'>Get start</Buttons>
        <Buttons className='text-white'>Watch Trailer  <i class="fa-solid fa-play ml-2"></i></Buttons>
       
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
