import React from "react";
import Buttons from "./Buttons";
function Footer() {
  return (
    <div className="w-full bg-slate-700 mt-5 space-y-5 py-10">
      <div className="text-center text-white">
        <h2>Join with Us to receive new news </h2>
      </div>
      <form
        action=""
        className="text-center space-y-3 border-gray-500 border-b-2 pb-4 md:w-5/12 md:mx-auto"
      >
        <input
          type="email"
          placeholder="E-Mail"
          className="focus:outline-none rounded-md p-2 w-7/12"
        />
        <div className="w-7/12 mx-auto">
          <Buttons>Subscribe</Buttons>
        </div>
      </form>
      <div className="text-white grid grid-cols-2 w-10/12 mx-auto
       md:grid-cols-4 md:w-9/12 md:mx-auto gap-3 md:gap-5">
        <div className="">
          <h3 className="font-bold ">About Us</h3>
          <ul className="p-2 ">
            <li className="hover:text-gray-400 hover:pl-1">How we work</li>
            <li className="hover:text-gray-400 hover:pl-1">How ou can work with us</li>
            <li className="hover:text-gray-400 hover:pl-1">Projects</li>
          </ul>
        </div>
        <div className="">
          <h3 className="font-bold ">Contact Us</h3>
          <ul className="p-2">
            <li className="hover:text-gray-400 hover:pl-1">Contact</li>
            <li className="hover:text-gray-400 hover:pl-1">Supprt</li>
            <li className="hover:text-gray-400 hover:pl-1">Sponsership</li>
          </ul>
        </div>
        <div className="">
          <h3 className="font-bold ">Video</h3>
          <ul className="p-2">
            <li className="hover:text-gray-400 hover:pl-1">Support Video</li>
            <li className="hover:text-gray-400 hover:pl-1">influencer</li>
            <li className="hover:text-gray-400 hover:pl-1">Agency</li>
          </ul>
        </div>
        <div className="">
          <h3 className="font-bold">Social Media</h3>
          <ul className="p-2">
            <li className="hover:text-orange-400 hover:pl-1">Instagram</li>
            <li className="hover:text-red-500 hover:pl-1">Youtube</li>
            <li className="hover:text-blue-500 hover:pl-1">Facebook</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
