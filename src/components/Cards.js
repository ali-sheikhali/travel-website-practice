import React from "react";
import CardsItems from "./CardsItems";
function Cards() {
  return (
    <div className="flex flex-col my-16 space-y-5">
      <h1 className="font-bold text-3xl text-center mb-10">
        Check out these EPIC Destinations!
      </h1>

      <div className="w-8/12 mx-auto md:w-10/12  ">
        <CardsItems />
      </div>
    </div>
  );
}

export default Cards;

//className="w-8/12 mx-auto md:flex md: justify-around md:w-10/12 md: flex-wrap md:space-x-3"
