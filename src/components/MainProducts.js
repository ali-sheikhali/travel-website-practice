import React from "react";
import { IoCartOutline } from "react-icons/io5";

function MainProducts() {
  return (
    <div className="mb-24">
      <h1 className="font-bold border-b-2 w-10/12 mx-auto my-10 text-2xl">
        Travel equipment and supplies
      </h1>
      <div className="flex flex-col items-center md:grid md:gap-5 md:grid-cols-4 md:w-10/12 md:mx-auto mt-5 gap-5">
        <div className="flex flex-col shadow-md">
          <figure className="shadow-md space-y-2">
            <img
              className="object-cover hover:scale-105 transition-all ease-linear duration-300"
              src={require("../images/5188299.jpg")}
              alt=""
            />
          </figure>
          <div className="text-center space-y-2 mt-2">
            <p>Mountaineering glasses</p>
            <p>cost: 20$</p>
            <button className="bg-red-400 text-2xl text-white flex justify-around w-full py-1">
              <IoCartOutline />
            </button>
          </div>
        </div>
        <div className="flex flex-col shadow-md">
          <figure className="shadow-md space-y-2">
            <img
              className="object-cover hover:scale-105 transition-all ease-linear duration-300"
              src={require("../images/5463497.jpg")}
              alt=""
            />
          </figure>
          <div className="text-center space-y-2 mt-2">
            <p>Mountaineering glasses</p>
            <p>cost: 20$</p>
            <button className="bg-red-400 text-2xl text-white flex justify-around w-full py-1">
              <IoCartOutline />
            </button>
          </div>
        </div>
        <div className="flex flex-col shadow-md">
          <figure className="shadow-md space-y-2">
            <img
              className="object-cover hover:scale-105 transition-all ease-linear duration-300"
              src={require("../images/5538044.jpg")}
              alt=""
            />
          </figure>
          <div className="text-center space-y-2 mt-2">
            <p>Mountaineering glasses</p>
            <p>cost: 20$</p>
            <button className="bg-red-400 text-2xl text-white flex justify-around w-full py-1">
              <IoCartOutline />
            </button>
          </div>
        </div>
        <div className="flex flex-col shadow-md">
          <figure className="shadow-md space-y-2">
            <img
              className="object-cover hover:scale-105 transition-all ease-linear duration-300"
              src={require("../images/5538157.jpg")}
              alt=""
            />
          </figure>
          <div className="text-center space-y-2 mt-2">
            <p>Mountaineering glasses</p>
            <p>cost: 20$</p>
            <button className="bg-red-400 text-2xl text-white flex justify-around w-full py-1">
              <IoCartOutline />
            </button>
          </div>
        </div>
        <div className="flex flex-col shadow-md">
          <figure className="shadow-md space-y-2">
            <img
              className="object-cover hover:scale-105 transition-all ease-linear duration-300"
              src={require("../images/7353261.jpg")}
              alt=""
            />
          </figure>
          <div className="text-center space-y-2 mt-2">
            <p>Mountaineering glasses</p>
            <p>cost: 20$</p>
            <button className="bg-red-400 text-2xl text-white flex justify-around w-full py-1">
              <IoCartOutline />
            </button>
          </div>
        </div>
        <div className="flex flex-col shadow-md">
          <figure className="shadow-md space-y-2">
            <img
              className="h-[300px] w-[300px] object-cover hover:scale-105 transition-all ease-linear duration-300"
              src={require("../images/7770282.jpg")}
              alt=""
            />
          </figure>
          <div className="text-center space-y-2 mt-2">
            <p>Mountaineering glasses</p>
            <p>cost: 20$</p>
            <button className="bg-red-400 text-2xl text-white flex justify-around w-full py-1">
              <IoCartOutline />
            </button>
          </div>
        </div>
        <div className="flex flex-col shadow-md">
          <figure className="shadow-md space-y-2">
            <img
              className="object-cover hover:scale-105 transition-all ease-linear duration-300"
              src={require("../images/7758667.jpg")}
              alt=""
            />
          </figure>
          <div className="text-center space-y-2 mt-2">
            <p>Mountaineering glasses</p>
            <p>cost: 20$</p>
            <button className="bg-red-400 text-2xl text-white flex justify-around w-full py-1">
              <IoCartOutline />
            </button>
          </div>
        </div>
        <div className="flex flex-col shadow-md">
          <figure className="shadow-md space-y-2">
            <img
              className="object-cover hover:scale-105 transition-all ease-linear duration-300"
              src={require("../images/img-shoe.jpg")}
              alt=""
            />
          </figure>
          <div className="text-center space-y-2 mt-2">
            <p>Mountaineering glasses</p>
            <p>cost: 20$</p>
            <button className="bg-red-400 text-2xl text-white flex justify-around w-full py-1">
              <IoCartOutline />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainProducts;
