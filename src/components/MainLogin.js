import React from 'react'

function MainLogin() {
  return (
    <div className="flex flex-col justify-center px-16 py-5 shadow-md">
        <form action="" className="flex flex-col space-y-10">
        <h1 className="font-bold text-3xl text-center border-b-2 mb-10 pb-2">Log in</h1>
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
          <div className="flex justify-around space-x-2">
            <label className="mt-1 text-xs font-bold" htmlFor="">Confirm Password: </label>
            <input
              type="password"
              placeholder="Password... "
              className="border-b-2 border-black focus:outline-none focus:border-blue-500 p-1"
            />
          </div>
          <div className="flex justify-around space-x-2">
            <label className="mt-1 font-bold" htmlFor="">email: </label>
            <input
              type="email"
              placeholder="email... "
              className=" border-b-2 border-black focus:outline-none focus:border-blue-500 p-1"
            />
          </div>
          <div className="text-center">
            <button className="bg-green-500 px-8 py-1 text-white rounded-md hover:bg-green-400" type="submit">Submit</button>
          </div>
        </form>
    </div>
  )
}

export default MainLogin