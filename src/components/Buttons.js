import React from "react";

function Buttons({ children }) {
  return (
    <div className="bg-transparent border rounded-md mx-auto py-1 text-white px-4
    text-center hover:border hover:border-white hover:bg-white transition-all ease-linear duration-900  hover:text-black">
      {children}
    </div>
  );
}

export default Buttons;
