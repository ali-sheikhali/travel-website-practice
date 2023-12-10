import React from "react";

function Buttons({ children }) {
  return (
    <div className="bg-transparent border rounded-md mx-auto py-1 text-white
     w-5/12 text-center hover:border hover:border-white hover:bg-white  hover:text-black">
      {children}
    </div>
  );
}

export default Buttons;
